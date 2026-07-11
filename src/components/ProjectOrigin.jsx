import { Link } from 'react-router-dom';
import { projectOrigins } from '../data/projects';

const ProjectOrigin = ({ slug }) => {
  const paragraphs = projectOrigins[slug];
  if (!paragraphs) return null;

  return (
    <section>
      <h2 className="text-sm font-medium uppercase tracking-wider text-subtle">Why I built this</h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-muted">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default ProjectOrigin;
