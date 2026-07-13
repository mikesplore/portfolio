import { ExternalLink } from 'lucide-react';
import { projectsCatalog } from '../data/projectsCatalog';

const platformLabels = {
  web: 'Web',
  android: 'Android',
  tooling: 'Tooling',
};

const typeLabels = {
  'problem-solving': 'Problem-solving',
  hobby: 'Hobby',
  hackathon: 'Hackathon',
  curiosity: 'Curiosity',
};

const statusLabels = {
  live: 'Live',
  'source-only': 'Source only',
};

const platformPillStyles = {
  web: 'bg-accent-soft text-accent',
  android: 'bg-teal-soft text-teal',
  tooling: 'bg-elevated text-muted',
};

const typePillStyles = {
  'problem-solving': 'bg-teal-soft text-teal',
  hobby: 'bg-elevated text-muted',
  hackathon: 'bg-accent-soft text-accent',
  curiosity: 'bg-elevated text-muted',
};

const statusPillStyles = {
  live: 'bg-accent-soft text-accent',
  'source-only': 'bg-elevated text-muted',
};

const Projects = () => {
  return (
    <section className="space-y-3" aria-label="Projects">
      <div className="space-y-2">
        {projectsCatalog.map((project) => (
          <article
            key={`${project.title}-${project.tagline}`}
            className="flex items-start gap-3 rounded-lg border border-divider bg-card p-2"
          >
            <div className="h-16 w-24 shrink-0 overflow-hidden rounded-md bg-elevated">
              {project.image ? (
                <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-xs text-subtle">No image yet</div>
              )}
            </div>

            <div className="min-w-0 flex-1 space-y-1">
              <div>
                <h2 className="truncate text-sm font-semibold text-ink">{project.title}</h2>
                <p className="text-xs text-subtle">{project.tagline}</p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      platformPillStyles[project.platform]
                    }`}
                  >
                    {platformLabels[project.platform]}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      typePillStyles[project.type]
                    }`}
                  >
                    {typeLabels[project.type]}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      statusPillStyles[project.status]
                    }`}
                  >
                    {statusLabels[project.status]}
                  </span>
                </div>
              </div>

              <p className="text-xs leading-snug text-muted">{project.summary}</p>

              <div className="flex flex-wrap items-center gap-3 pt-0.5 text-xs">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-teal hover:opacity-80"
                  >
                    GitHub
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-subtle">Source: coming soon</span>
                )}
                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent/80"
                  >
                    Live
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-subtle">Live: none</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
