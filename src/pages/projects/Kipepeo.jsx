import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import ProjectOrigin from '../../components/ProjectOrigin';

const Kipepeo = () => {
  return (
    <article className="space-y-8">
      <div>
        <Link to="/timeline" className="text-sm text-subtle hover:text-accent">
          ← Timeline
        </Link>
        <h1 className="mt-3 text-2xl font-semibold text-ink">Kipepeo Intelligence</h1>
        <p className="mt-1 text-base text-subtle">
          Credit-worthiness scoring from M-Pesa statements and mobile money behavior
        </p>
      </div>

      <section className="space-y-4 text-base leading-relaxed text-muted">
        <p>
          Built for the Build With AI hackathon — a system that estimates credit worthiness from
          M-Pesa transaction history and usage patterns, aimed at lenders who need faster signals
          than manual statement review.
        </p>
      </section>

      <ProjectOrigin slug="kipepeo" />

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wider text-subtle">Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {['Python', 'M-Pesa', 'AI Scoring', 'Analytics'].map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <a
        href="https://github.com/mikesplore/Kipepeo-Intelligence"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-base text-accent hover:text-accent/80"
      >
        View on GitHub
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </article>
  );
};

export default Kipepeo;
