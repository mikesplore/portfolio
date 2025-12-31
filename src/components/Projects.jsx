import { ExternalLink, Github, Code, Play } from 'lucide-react';
import { projects } from '../data/portfolio';

const ProjectCard = ({ project }) => {
  const isFlagship = project.tier === 'flagship';

  return (
    <div className={`group relative overflow-hidden rounded-2xl border backdrop-blur-md p-8 shadow-[0_10px_40px_-20px_rgba(255,255,255,0.3)] transition-all duration-300 ${
      isFlagship 
        ? 'border-white/20 bg-white/8 hover:border-white/40 lg:col-span-1'
        : 'border-white/10 bg-white/5 hover:border-white/20'
    }`}>
      {/* Subtle accent on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
        <div className="absolute -top-20 -right-20 h-40 w-40 bg-white/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Header with category and links */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold">{project.category}</div>
          {isFlagship && (
            <span className="text-[10px] uppercase tracking-[0.1em] text-yellow-400/80 bg-yellow-400/10 px-2 py-1 rounded">
              Flagship
            </span>
          )}
        </div>

        {/* Title and problem */}
        <h3 className="text-2xl font-bold mb-2 tracking-tight text-gray-100">{project.title}</h3>
        
        {project.problem && (
          <p className="text-sm text-gray-400 mb-4 italic leading-relaxed">
            {project.problem}
          </p>
        )}

        {/* Main description */}
        <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

        {/* System details for flagship projects */}
        {isFlagship && project.system && (
          <div className="mb-4 p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-xs uppercase tracking-[0.15em] text-gray-400 font-semibold mb-2">Architecture</p>
            <p className="text-sm text-gray-300 leading-relaxed">{project.system}</p>
          </div>
        )}

        {/* Engineering highlights for flagship projects */}
        {isFlagship && project.highlights && (
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.15em] text-gray-400 font-semibold mb-3">Engineering Highlights</p>
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="text-sm text-gray-300 flex gap-2">
                  <span className="text-white/40 mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impact */}
        <div className="text-sm font-medium text-white/80 mb-6 pb-4 border-t border-white/10 pt-4">
          ✓ {project.impact}
        </div>

        {/* Links */}
        <div className="flex gap-3 flex-wrap">
          {project.demoLink && project.demoLink !== '#' && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all text-gray-200"
              title="Live Demo"
            >
              <Play className="w-4 h-4" />
              Demo
            </a>
          )}
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all text-gray-200"
            title="GitHub Repository"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          {project.docsLink && project.docsLink !== '#' && (
            <a
              href={project.docsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all text-gray-200"
              title="Architecture / README"
            >
              <Code className="w-4 h-4" />
              Docs
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const flagshipProjects = projects.filter(p => p.tier === 'flagship');
  const otherProjects = projects.filter(p => p.tier !== 'flagship');

  return (
    <section id="projects" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4 tracking-tight text-gray-100">Featured Projects</h2>
          <p className="text-gray-400 text-lg">Ranked by systems complexity and engineering depth.</p>
        </div>

        {/* Flagship Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-200 mb-6 uppercase tracking-wider text-gray-400">Flagship Systems</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flagshipProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>

        {/* Secondary & Creative Projects */}
        <div>
          <h3 className="text-xl font-bold text-gray-200 mb-6 uppercase tracking-wider text-gray-400">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
