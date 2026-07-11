import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const highlights = [
  'Sensor ingestion pipeline for soil moisture, temperature, and flow rates',
  'FastAPI backend designed for low-bandwidth rural deployments',
  'React dashboard for irrigation and soil monitoring at a glance',
];

const FarmPulse = () => {
  return (
    <article className="space-y-8">
      <div>
        <Link to="/" className="text-xs text-stone-500 hover:text-accent">
          ← Timeline
        </Link>
        <h1 className="mt-3 text-2xl font-semibold text-stone-100">FarmPulse</h1>
        <p className="mt-1 text-sm text-stone-500">
          Farm telemetry and irrigation monitoring for smallholder agriculture
        </p>
      </div>

      <section className="space-y-4 text-sm leading-relaxed text-stone-400">
        <p>
          Smallholder farms rarely have unified tooling for sensor data — spreadsheets, SMS alerts,
          and guesswork fill the gap. FarmPulse pulls soil moisture, temperature, and flow-rate
          readings into one lightweight dashboard so irrigation decisions are data-driven, not
          reactive.
        </p>
        <p>
          Built for Kenyan connectivity constraints: a FastAPI ingestion layer handles intermittent
          uploads, and the React frontend stays usable on modest hardware and mobile screens.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wider text-stone-500">Highlights</h2>
        <ul className="mt-3 space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-stone-300">
              <span className="text-accent mt-0.5" aria-hidden="true">→</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wider text-stone-500">Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {['FastAPI', 'IoT', 'React', 'Telemetry', 'Python'].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-stone-700/70 bg-stone-900/50 px-2.5 py-1 text-xs text-stone-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <a
        href="https://github.com/mikesplore/FarmPulse"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80"
      >
        View on GitHub
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </article>
  );
};

export default FarmPulse;
