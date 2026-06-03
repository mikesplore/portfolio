import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';

const ProjectCard = ({ project }) => {
  const liveLink = project.liveLink || project.demoLink;
  const hasLiveLink = liveLink && liveLink !== '#';

  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500">{project.category}</p>
          <h3 className="mt-2 text-xl font-medium tracking-tight text-gray-50">{project.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-300">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-gray-400">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm md:justify-end">
          {hasLiveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-200 transition hover:text-white"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-gray-500">
              <ExternalLink className="h-4 w-4" />
              Live unavailable
            </span>
          )}

          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-200 transition hover:text-white">
            <Github className="h-4 w-4" />
            Code
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const webApps = projects.filter((project) => project.type !== 'mobile');
  const androidApps = projects.filter((project) => project.type === 'mobile');

  return (
    <section id="projects" className="border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-5xl font-bold mb-8 tracking-tight text-gray-100">Selected Work</h2>
        <p className="max-w-2xl text-base leading-7 text-gray-400">A short list of web apps and Android apps.</p>

        <div className="mt-16 space-y-12">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">Android apps</h3>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="space-y-4">
              {androidApps.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">Web apps</h3>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="space-y-4">
              {webApps.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
