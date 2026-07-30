# DeployLoop

AI-assisted deployment agent for repo-based apps on a single VPS.

DeployLoop takes a Git repository, configures nginx, manages Cloudflare DNS, issues TLS certificates, validates the deployment, and optionally watches for new commits - without GitHub Actions.

**Phase 1 goal:** ship a reliable CLI-driven deploy loop for one project type on one Ubuntu server, with the LLM acting as planner only and all side effects going through typed tools.

---

## Table of contents

1. [Problem statement](#problem-statement)
2. [Phase 1 scope](#phase-1-scope)
3. [Architecture](#architecture)
4. [Deploy state machine](#deploy-state-machine)
5. [Tool catalog](#tool-catalog)
6. [Uniform error contract](#uniform-error-contract)
7. [LLM planner](#llm-planner)
8. [SSH execution model](#ssh-execution-model)
9. [Security boundaries](#security-boundaries)
10. [Retry and give-up policy](#retry-and-give-up-policy)
11. [Success criteria](#success-criteria)
12. [Repository layout](#repository-layout)
13. [Configuration](#configuration)
14. [Implementation plan](#implementation-plan)
15. [Testing checklist](#testing-checklist)
16. [Demo script (3 minutes)](#demo-script-3-minutes)
17. [Out of scope (Phase 2+)](#out-of-scope-phase-2)

---

## Problem statement

Deploying a side project to a VPS usually means manually:

- cloning/pulling code
- building artifacts
- writing nginx site configs
- creating DNS records
- running certbot
- debugging failures from scattered logs

DeployLoop automates this with a bounded agent loop: the model decides **which tool to run next**, tools perform deterministic actions, and the orchestrator enforces safety, retries, and stop conditions.

---

## Phase 1 scope

### In scope

| Area | Phase 1 decision |
| --- | --- |
| Control surface | Local CLI only |
| Execution | Local orchestrator → SSH to target VPS |
| OS | Ubuntu 22.04+ |
| Web server | nginx |
| DNS | Cloudflare API |
| TLS | certbot (HTTP-01 or DNS challenge via Cloudflare plugin) |
| Project types | **Static/Vite/React** build (`npm run build` → `dist/`) |
| Git sync | Manual deploy + optional systemd timer watcher |
| LLM role | Planner/recovery only (no free-form shell) |

### Out of scope for Phase 1

- Cloud VPS provisioning (DigitalOcean/Hetzner API)
- Multi-server orchestration
- Docker/Kubernetes
- Database migrations
- Web UI dashboard
- On-box relay / phone control (Vela pattern) - Phase 2
- GitHub Actions integration

### Assumptions

- The VPS already exists and is reachable over SSH.
- You run a one-time bootstrap script to create a restricted `deploybot` user.
- Cloudflare hosts the target zone; API token is scoped to DNS edit for that zone only.
- Demo uses a dedicated subdomain (e.g. `demo1.example.com`), not production traffic.

---

## Architecture

```text
┌─────────────────────────────────────────────────────────────┐
│  Local machine (you)                                        │
│  ┌──────────────┐    ┌──────────────┐    ┌───────────────┐  │
│  │ deploy-agent │───▶│ Orchestrator │───▶│ LLM Planner   │  │
│  │ CLI          │    │ (state loop) │    │ (tool pick)   │  │
│  └──────────────┘    └──────┬───────┘    └───────────────┘  │
│                             │                               │
│                    ┌────────▼────────┐                      │
│                    │ Tool Executor   │                      │
│                    │ (allowlist)     │                      │
│                    └────────┬────────┘                      │
└─────────────────────────────┼───────────────────────────────┘
                              │ SSH (restricted deploybot)
┌─────────────────────────────▼───────────────────────────────┐
│  Target VPS                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────┐  │
│  │ app dir  │  │ nginx    │  │ certbot  │  │ systemd   │  │
│  │ + build  │  │ site cfg │  │ certs    │  │ watcher   │  │
│  └──────────┘  └──────────┘  └──────────┘  └───────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────▼─────────┐
                    │ Cloudflare DNS API │
                    └────────────────────┘
```

### Design principles

1. **Tools do work; LLM decides.** No raw shell generation for writes.
2. **Uniform tool responses.** Every tool returns the same result envelope.
3. **Phase-gated execution.** Tools allowed depend on current deploy phase.
4. **Idempotent operations.** Re-running deploy should be safe.
5. **Fail with report.** Never silently retry forever.

---

## Deploy state machine

Fixed phases - the agent cannot skip ahead.

```text
INIT
  → REPO       (clone or pull, detect project type)
  → BUILD      (install deps, npm run build)
  → NGINX      (render + write site config, nginx -t)
  → DNS        (upsert Cloudflare A/CNAME record)
  → TLS        (issue cert if missing/expired)
  → ACTIVATE   (enable site, reload nginx)
  → HEALTH     (HTTPS GET must return 2xx)
  → WATCHER    (optional: install systemd timer for git pull)
  → DONE

Any phase failure → RECOVER (bounded retries) → FAILED
```

### Phase exit criteria

| Phase | Success condition |
| --- | --- |
| REPO | Repo exists on server; latest SHA recorded |
| BUILD | `dist/index.html` (or configured output) exists |
| NGINX | Config written; `nginx -t` passes |
| DNS | Record exists; API returns expected value |
| TLS | Valid cert present for domain |
| ACTIVATE | Site enabled; nginx reloaded without error |
| HEALTH | `https://<domain>` returns HTTP 200 |
| WATCHER | Timer installed and enabled (if requested) |
| DONE | Final URL + deployment report emitted |

---

## Tool catalog

All tools are registered with JSON Schema arguments. The LLM receives tool names, descriptions, and schemas - not implementation code.

### Read / inspect tools

| Tool | Purpose |
| --- | --- |
| `get_deploy_state` | Read current phase, SHA, last error, retry counts |
| `detect_project_type` | Inspect repo for supported stack (Phase 1: static/vite) |
| `read_remote_file` | Read bounded file content (logs, configs) - path allowlist |
| `run_diagnostic` | Read-only commands: `nginx -t`, `systemctl status`, `journalctl -n` |
| `http_health_check` | GET URL, return status + latency |

### Write / deploy tools

| Tool | Purpose |
| --- | --- |
| `git_clone_or_pull` | Clone repo or pull latest; return `{ changed, sha }` |
| `run_build` | Execute project build (`npm ci && npm run build`) |
| `write_nginx_site` | Render template → write site config (upsert, idempotent) |
| `enable_nginx_site` | Symlink sites-enabled, run `nginx -t`, reload |
| `cloudflare_upsert_record` | Create/update DNS A or CNAME for subdomain |
| `issue_certificate` | Run certbot for domain (skip if valid cert exists) |
| `install_git_watcher` | Write systemd service + timer for periodic pull/deploy |
| `rollback_to_previous` | Restore last known-good artifact + nginx config |

### Meta tools

| Tool | Purpose |
| --- | --- |
| `advance_phase` | Move state machine forward (orchestrator validates first) |
| `mark_failed` | Stop deploy; write final report |
| `request_human_confirm` | Pause for destructive action approval |

### SSH wrapper

All remote execution goes through one internal module:

```python
ssh_exec(command_key: str, args: dict) -> ToolResult
```

`command_key` maps to a pre-approved script on the server (e.g. `run_build`, `nginx_test`). The LLM never supplies raw shell strings.

---

## Uniform error contract

Every tool returns this envelope:

```json
{
  "ok": true,
  "tool": "run_build",
  "phase": "BUILD",
  "data": { "sha": "abc123", "artifact_path": "/var/www/demo1/dist" },
  "message": "Build completed successfully"
}
```

On failure:

```json
{
  "ok": false,
  "tool": "issue_certificate",
  "phase": "TLS",
  "error_class": "CERT_CHALLENGE_FAILED",
  "message": "Certbot failed: challenge verification timed out",
  "details": "...last 200 lines of certbot log...",
  "retryable": true,
  "suggested_fix": "WAIT_AND_RETRY_DNS"
}
```

### Error classes (Phase 1)

| Class | Meaning | Default action |
| --- | --- | --- |
| `AUTH_FAILED` | SSH or Cloudflare token invalid | Fail immediately |
| `PATH_NOT_ALLOWED` | Tool tried to touch forbidden path | Fail immediately |
| `UNSUPPORTED_PROJECT` | Repo type not in Phase 1 | Fail immediately |
| `BUILD_FAILED` | npm/build error | Retry up to 3 (same class) |
| `NGINX_TEST_FAILED` | `nginx -t` syntax error | Retry up to 3; run playbook fixes |
| `DNS_PROPAGATION_PENDING` | Record exists but not resolving | Wait + retry (max 3) |
| `CERT_CHALLENGE_FAILED` | certbot ACME failure | Retry up to 3 |
| `SERVICE_NOT_RUNNING` | systemd unit down | Retry up to 2 |
| `HEALTHCHECK_FAILED` | URL not 200 after deploy | Rollback once, then fail |
| `UNKNOWN` | Unclassified error | Fail after 1 attempt |

### Playbook fixes (non-LLM fallback)

For known error classes, run deterministic fixes before asking the LLM:

- `NGINX_TEST_FAILED` + "duplicate listen" → regenerate config from template
- `DNS_PROPAGATION_PENDING` → sleep 30s, re-check
- `HEALTHCHECK_FAILED` → rollback, report

---

## LLM planner

The LLM is **brain only**. It receives:

- current phase
- last tool result (including `error_class`)
- allowed tools for this phase
- retry budget remaining
- stop conditions

It returns:

```json
{
  "tool": "cloudflare_upsert_record",
  "args": { "name": "demo1", "type": "A", "content": "203.0.113.10" },
  "reason": "DNS record missing; nginx and build are ready"
}
```

### Provider abstraction

```text
src/planner/
  base.py          # PlannerProtocol
  fireworks.py     # Fireworks function-calling adapter
  groq.py          # Groq adapter
  openai.py        # Optional OpenAI adapter
  rule_based.py    # Fallback for known error_class → fix mapping
```

**Model selection criteria (test before committing):**

1. Emits valid tool call JSON on first try ≥ 90% of test cases
2. Picks correct next tool after a structured error ≥ 80%
3. Stops when told budget is exhausted (does not hallucinate progress)

Run a 10-step synthetic loop test against Fireworks and Groq; pick the winner for Phase 1.

### Cost split (optional)

| Step type | Model tier |
| --- | --- |
| Next-action planning after failure | Strong tool-calling model |
| Error classification (`X` vs `Y`) | Cheaper model or rule-based |

---

## SSH execution model

### Bootstrap (one time, manual)

On the VPS:

```bash
curl -fsSL https://raw.githubusercontent.com/<you>/deploy-loop/main/scripts/bootstrap.sh | bash
```

Bootstrap creates:

- user: `deploybot`
- app root: `/var/www/<app-name>/`
- sudoers allowlist for nginx, certbot, systemctl reload
- remote helper scripts invoked by `command_key`

### Local → remote flow

```text
CLI
  → Orchestrator
    → ssh_exec("run_build", { "app": "demo1" })
      → SSH deploybot@server
        → /opt/deployloop/bin/run_build demo1
          → ToolResult JSON returned to orchestrator
```

### SSH guardrails

| Setting | Value |
| --- | --- |
| Connect timeout | 15s |
| Command timeout | 300s (build may be slow) |
| Max stdout/stderr capture | 32 KB (truncate with notice) |
| Host key policy | `accept-new` or pre-seeded known_hosts |
| Auth | Ed25519 key, not password |

---

## Security boundaries

Enforced in the **tool executor**, independent of LLM output.

### Path allowlist (remote)

- `/var/www/<app-name>/`
- `/etc/nginx/sites-available/<app-name>`
- `/etc/nginx/sites-enabled/<app-name>`
- `/var/lib/deployloop/<app-name>/` (state, snapshots)

### Hard denylist

- `/root`, `/home/*` (except deploybot app dir)
- `/etc/ssh/`, `authorized_keys`, `sshd_config`
- `/etc/passwd`, `/etc/shadow`, user management
- firewall / iptables / ufw
- other nginx site configs (not owned by this app)
- agent credentials, Cloudflare token file, SSH private keys

### Sudo allowlist (deploybot)

- `nginx -t`
- `systemctl reload nginx`
- `certbot certonly ...` (fixed flags only)
- `systemctl start|stop|restart <app-unit>`

### Human confirmation required

- Overwriting an existing site on a domain that already serves traffic
- Deleting a site or systemd unit
- Force cert reissue
- Rollback (optional confirm in Phase 1 - auto rollback on health fail is OK)

---

## Retry and give-up policy

Two caps, enforced by orchestrator (not the LLM):

### Per error class

- Max **3** retries for the same `error_class` within one phase

### Global budget

- Max **12** tool calls per deploy run
- Max **15 minutes** wall-clock time

### On exhaustion

Stop and emit:

```text
DEPLOY FAILED

Phase: TLS
Last error: CERT_CHALLENGE_FAILED
Attempts: 3/3
Completed: REPO, BUILD, NGINX, DNS
Pending: TLS, ACTIVATE, HEALTH

Suggested manual fix:
  - Verify Cloudflare proxy settings (try DNS-only during cert issue)
  - Confirm port 80 is reachable from the internet
```

No silent retries. No escalating to destructive actions.

---

## Success criteria

Deploy is **DONE** only when all are true:

1. Build artifact exists on server
2. `nginx -t` passes
3. nginx site enabled and reloaded
4. Cloudflare DNS record points to server IP
5. TLS cert valid for domain
6. `https://<domain>` returns HTTP 200
7. CLI prints: `DEPLOYED: https://<domain>`

---

## Repository layout

```text
deploy-loop/
├── README.md                 # this file
├── pyproject.toml            # or requirements.txt
├── .env.example
├── src/
│   ├── cli.py                # entrypoint: deploy-agent run|status|watch
│   ├── orchestrator.py       # state machine loop
│   ├── state.py              # phase, retries, SHA, snapshots
│   ├── executor.py           # tool dispatch + denylist enforcement
│   ├── ssh_client.py         # SSH wrapper
│   ├── errors.py             # ToolResult, error classes
│   ├── planner/
│   │   ├── base.py
│   │   ├── fireworks.py
│   │   ├── groq.py
│   │   └── rule_based.py
│   └── tools/
│       ├── git.py
│       ├── build.py
│       ├── nginx.py
│       ├── cloudflare.py
│       ├── cert.py
│       ├── health.py
│       └── watcher.py
├── templates/
│   └── nginx_static.conf.j2
├── scripts/
│   ├── bootstrap.sh          # VPS one-time setup
│   └── remote/               # scripts invoked via command_key on server
│       ├── run_build.sh
│       ├── nginx_test.sh
│       └── ...
└── tests/
    ├── test_tools.py         # unit tests (no SSH)
    ├── test_state_machine.py
    └── fixtures/
        └── sample_tool_results.json
```

---

## Configuration

### CLI usage (Phase 1)

```bash
deploy-agent run \
  --repo https://github.com/you/demo-app.git \
  --domain demo1.example.com \
  --server deploybot@203.0.113.10 \
  --cloudflare-token "$CF_TOKEN" \
  --cloudflare-zone example.com \
  --watch
```

### Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `DEPLOYLOOP_SSH_HOST` | yes | Target server IP or hostname |
| `DEPLOYLOOP_SSH_USER` | yes | Default: `deploybot` |
| `DEPLOYLOOP_SSH_KEY` | yes | Path to private key |
| `CLOUDFLARE_API_TOKEN` | yes | Scoped DNS edit token |
| `CLOUDFLARE_ZONE_ID` | yes | Zone ID for domain |
| `LLM_PROVIDER` | yes | `fireworks` \| `groq` \| `openai` |
| `LLM_API_KEY` | yes | Provider API key |
| `LLM_MODEL` | yes | Model ID with function-calling support |

Store secrets in `.env` (gitignored). Never commit tokens.

### State file (remote)

`/var/lib/deployloop/<app>/state.json`:

```json
{
  "app": "demo1",
  "domain": "demo1.example.com",
  "repo": "https://github.com/you/demo-app.git",
  "phase": "HEALTH",
  "last_sha": "abc123def",
  "previous_sha": "999aaa111",
  "retries": { "CERT_CHALLENGE_FAILED": 1 },
  "tool_calls": 7,
  "started_at": "2026-07-19T08:00:00Z",
  "deployed_url": null
}
```

---

## Implementation plan

### Day 0 - Prep (1-2 hours)

- [ ] Create repo `deploy-loop`
- [ ] Pick demo repo (simple Vite static site)
- [ ] Pick demo subdomain + VPS
- [ ] Create scoped Cloudflare API token
- [ ] Run model tool-calling smoke test (Fireworks vs Groq)
- [ ] Write `.env.example`

### Day 1 - Core tools, no LLM (4-6 hours)

Build and test each tool in isolation over SSH.

| Order | Task | Est. |
| --- | --- | --- |
| 1 | `errors.py` - ToolResult envelope + error classes | 30m |
| 2 | `ssh_client.py` - connect, exec by command_key, timeouts | 45m |
| 3 | `scripts/bootstrap.sh` + remote helper scripts | 1h |
| 4 | `git_clone_or_pull` tool | 30m |
| 5 | `run_build` tool (static/vite) | 45m |
| 6 | `write_nginx_site` + template | 45m |
| 7 | `enable_nginx_site` + `run_diagnostic(nginx -t)` | 30m |
| 8 | `cloudflare_upsert_record` | 45m |
| 9 | `issue_certificate` | 45m |
| 10 | `http_health_check` | 15m |

**Day 1 exit criteria:** run tools manually (no LLM) and get a site live on HTTPS.

### Day 1 evening - Orchestrator skeleton (2-3 hours)

| Order | Task | Est. |
| --- | --- | --- |
| 11 | `state.py` - phase machine + retry counters | 45m |
| 12 | `executor.py` - dispatch, allowlist, denylist | 45m |
| 13 | `orchestrator.py` - linear phase runner (rule-based, no LLM) | 1h |
| 14 | `cli.py` - `deploy-agent run` wired to orchestrator | 30m |

**Exit criteria:** `deploy-agent run` completes end-to-end without LLM.

### Day 2 - LLM recovery loop (3-4 hours)

| Order | Task | Est. |
| --- | --- | --- |
| 15 | Planner adapter (Fireworks or Groq) | 1h |
| 16 | Wire planner into orchestrator for RECOVER phase only | 1h |
| 17 | Rule-based fallback for top 3 error classes | 45m |
| 18 | `rollback_to_previous` + auto rollback on health fail | 45m |
| 19 | Final report formatter (success + failure) | 30m |

**Exit criteria:** agent recovers from at least one injected failure (e.g. bad nginx path) in demo.

### Day 2 evening - Watcher + polish (2 hours)

| Order | Task | Est. |
| --- | --- | --- |
| 20 | `install_git_watcher` systemd timer | 1h |
| 21 | `deploy-agent status` command | 30m |
| 22 | README quickstart + architecture diagram | 30m |

### Day 3 - Submission (2-3 hours)

- [ ] Record 3-minute demo video
- [ ] Add "AI-assisted development" section to README
- [ ] Public repo with reproducible setup
- [ ] Submit to hackathon with repo URL + video

---

## Testing checklist

### Tool unit tests (local, no SSH)

- [ ] ToolResult serializes/deserializes correctly
- [ ] Error class mapping covers sample log snippets
- [ ] nginx template renders valid config for given domain/port
- [ ] Denylist blocks forbidden paths

### Integration tests (against demo VPS)

- [ ] Fresh deploy: repo → live HTTPS URL
- [ ] Idempotent re-deploy: same SHA → no unnecessary rebuild
- [ ] New commit: watcher detects change and redeploys
- [ ] Injected nginx typo → agent or playbook fixes within retry budget
- [ ] DNS delay simulated → waits and retries, then succeeds or fails cleanly
- [ ] Health check fail → rollback once → clear failure report
- [ ] Invalid Cloudflare token → immediate AUTH_FAILED, no retry loop

### Model loop tests (synthetic)

- [ ] 10-step scenario: planner picks valid tools only
- [ ] After structured error, planner picks appropriate recovery tool
- [ ] When budget exhausted, planner returns stop (or orchestrator overrides)

---

## Demo script (3 minutes)

| Time | Action |
| --- | --- |
| 0:00 | Show empty subdomain (NXDOMAIN or default page) |
| 0:20 | Run `deploy-agent run --repo ... --domain demo1.example.com` |
| 0:40 | Terminal: phases ticking (REPO → BUILD → NGINX → DNS → TLS) |
| 1:30 | Inject or show one failure + recovery (nginx or DNS wait) |
| 2:10 | Open `https://demo1.example.com` - site loads |
| 2:30 | Push small commit; show watcher redeploy OR re-run deploy |
| 2:50 | Show final report: URL, SHA, elapsed time |

---

## Out of scope (Phase 2+)

| Feature | Phase |
| --- | --- |
| Python/FastAPI project type | Phase 2 |
| On-box agent + relay (Vela-style remote control) | Phase 2 |
| Web dashboard | Phase 2 |
| Multi-app / multi-server | Phase 3 |
| Cloud VPS provisioning | Phase 3 |
| Blue/green or zero-downtime deploys | Phase 3 |

---

## Quick reference: Phase 1 decisions locked

| Decision | Choice |
| --- | --- |
| Agent role | Planner only |
| Side effects | Typed tools only |
| Control | Local CLI |
| Remote access | SSH via command_key map |
| Stack | Static/Vite |
| DNS | Cloudflare API |
| TLS | certbot |
| LLM | Fireworks or Groq (function-calling; swappable) |
| Retries | 3 per error class, 12 tools / 15 min global |
| Success | HTTPS 200 on final domain |

---

## License

MIT (update before public release)
