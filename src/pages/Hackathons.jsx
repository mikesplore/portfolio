import { ExternalLink } from 'lucide-react';
import { hackathons } from '../data/profile';

const Hackathons = () => {
  return (
    <div className="space-y-8">
      <p className="text-base leading-relaxed text-stone-400">
        Hackathons — wins, submissions, and what I&apos;m building right now.
      </p>

      <ul className="space-y-6">
        {hackathons.map((item) => (
          <li key={`${item.title}-${item.year}`} className="border-b border-stone-800/80 pb-6 last:border-b-0">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <h2 className="text-base font-medium text-stone-100">{item.title}</h2>
              <span
                className={`text-base ${
                  item.result === 'Participating' ? 'text-rose-400' : 'text-accent'
                }`}
              >
                {item.result}
              </span>
              <span className="text-base text-stone-500">· {item.year}</span>
            </div>

            {item.project && <p className="mt-2 text-base text-stone-300">{item.project}</p>}
            <p className={`${item.project ? 'mt-1' : 'mt-2'} text-base leading-relaxed text-stone-400`}>
              {item.description}
            </p>

            {item.organization && (
              <p className="mt-1 text-base text-stone-500">{item.organization}</p>
            )}

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-base text-accent hover:text-accent/80"
              >
                {item.result === 'Participating' || item.result === 'Submitted'
                  ? 'Lablab profile'
                  : 'View project'}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hackathons;
