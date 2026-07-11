import { ENTRY_TYPES, TYPE_LABELS } from '../../data/types';

const TypeFilter = ({ activeType, onChange, counts }) => {
  const handleClick = (type) => {
    onChange(activeType === type ? null : type);
  };

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by entry type">
      {ENTRY_TYPES.map((type) => {
        const isActive = activeType === type;
        const label = TYPE_LABELS[type];
        const count = counts[type];

        return (
          <button
            key={type}
            type="button"
            onClick={() => handleClick(type)}
            aria-pressed={isActive}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              isActive
                ? 'border-accent/50 bg-accent/15 text-accent'
                : 'border-stone-700/80 bg-stone-900/40 text-stone-400 hover:border-stone-600 hover:text-stone-200'
            }`}
          >
            {label}
            {count > 0 && <span className="ml-1.5 text-stone-500">{count}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default TypeFilter;
