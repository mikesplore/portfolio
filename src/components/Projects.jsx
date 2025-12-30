import { ExternalLink, Smartphone, Globe } from 'lucide-react';
import { projects } from '../data/portfolio';

const ProjectCard = ({ project }) => {
  const icon = project.type === 'mobile' ? <Smartphone className="w-6 h-6" /> : <Globe className="w-6 h-6" />;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5/5 backdrop-blur-md p-8 shadow-[0_10px_40px_-20px_rgba(255,255,255,0.3)] hover:border-white/20 transition-all duration-300">
      {/* Accent glows */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -top-12 -right-12 h-32 w-32 bg-white/10 blur-3xl" />
        <div className="absolute -bottom-12 -left-12 h-32 w-32 bg-white/10 blur-3xl" />
      </div>

      <div className="flex items-start justify-between mb-6">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors">
          {icon}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 group-hover:opacity-100 transition-opacity"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      <div className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-3">{project.category}</div>
      <h3 className="text-2xl font-bold mb-3 tracking-tight text-gray-200">{project.title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

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

      <div className="text-sm font-medium border-t border-white/10 pt-4 text-gray-300">
        {project.impact}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 tracking-tight text-gray-100">Selected Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
