import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const highlights = [
  'Native Android (Kotlin) app with clean lifecycle architecture for device monitoring',
  'LLM function-calling integration — no hardcoded command parsers',
  'Secure client-to-device communication via a custom VPSS relay server',
];

const repos = [
  { name: 'vela', label: 'Core repo', url: 'https://github.com/mikesplore/vela' },
  { name: 'vela-android', label: 'Android client', url: 'https://github.com/mikesplore/vela-android' },
  { name: 'VelaAI', label: 'LLM backend', url: 'https://github.com/mikesplore/VelaAI' },
  { name: 'velavps', label: 'VPSS relay', url: 'https://github.com/mikesplore/velavps' },
];

const Vela = () => {
  return (
    <article className="space-y-8">
      <div>
        <Link to="/timeline" className="text-sm text-subtle hover:text-accent">
          ← Timeline
        </Link>
        <h1 className="mt-3 text-2xl font-semibold text-ink">Vela</h1>
        <p className="mt-1 text-base text-subtle">
          Cross-platform remote device orchestration via natural language
        </p>
      </div>

      <section className="space-y-4 text-base leading-relaxed text-muted">
        <p>
          Remote device management tools are usually rigid — memorized commands, brittle parsers,
          admin panels nobody wants to learn. Vela flips that: you describe what you want in plain
          English, and an LLM maps intent to precise hardware actions through function calling.
        </p>
        <p>
          A native Kotlin Android client pairs with a Flask backend and a VPSS relay server for
          secure client-to-device routing. The model is the interface layer; there is no parallel
          command grammar to maintain.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wider text-subtle">Highlights</h2>
        <ul className="mt-3 space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-base text-muted">
              <span className="text-accent mt-0.5" aria-hidden="true">→</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wider text-subtle">Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {['Kotlin', 'Android SDK', 'LLM Function Calling', 'Flask', 'VPSS Relay'].map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wider text-subtle">Repos</h2>
        <ul className="mt-3 space-y-2">
          {repos.map((repo) => (
            <li key={repo.name}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-base text-muted hover:text-accent"
              >
                {repo.label}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Vela;
