import { ChevronDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import EntryIcon from './EntryIcon';

const formatDate = (isoDate) => {
  const date = new Date(isoDate + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const TimelineRow = ({ entry, isExpanded, onToggle }) => {
  const panelId = `timeline-panel-${entry.date}-${entry.title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="border-b border-stone-800/80 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        className="flex w-full items-center gap-3 py-4 text-left transition-colors hover:bg-stone-900/40 px-1 -mx-1 rounded-md"
      >
        <EntryIcon title={entry.title} type={entry.type} link={entry.link} />

        <span className="min-w-0 flex-1">
          <span className="block truncate text-base font-medium text-stone-100">{entry.title}</span>
        </span>

        <span className="shrink-0 text-sm tabular-nums text-stone-500">{formatDate(entry.date)}</span>

        <ChevronDown
          className={`h-5 w-5 shrink-0 text-stone-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {isExpanded && (
        <div id={panelId} className="pb-5 pl-12 pr-1">
          <p className="text-base leading-relaxed text-stone-400">{entry.blurb}</p>

          {entry.tags && entry.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-stone-700/70 bg-stone-900/50 px-2.5 py-1 text-sm text-stone-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-3 flex flex-wrap gap-3 text-base">
            {entry.slug && (
              <Link to={`/projects/${entry.slug}`} className="text-accent hover:text-accent/80">
                Read more →
              </Link>
            )}
            {entry.link && (
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-stone-300 hover:text-stone-100"
              >
                Visit
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelineRow;
