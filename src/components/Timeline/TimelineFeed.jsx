import { useMemo, useState } from 'react';
import { entries } from '../../data/entries';
import { ENTRY_TYPES } from '../../data/types';
import TypeFilter from './TypeFilter';
import TimelineRow from './TimelineRow';

const TimelineFeed = () => {
  const [activeType, setActiveType] = useState(null);
  const [expandedKey, setExpandedKey] = useState(null);

  const counts = useMemo(() => {
    return ENTRY_TYPES.reduce((acc, type) => {
      acc[type] = entries.filter((entry) => entry.type === type).length;
      return acc;
    }, {});
  }, []);

  const filteredEntries = useMemo(() => {
    if (!activeType) return entries;
    return entries.filter((entry) => entry.type === activeType);
  }, [activeType]);

  const getEntryKey = (entry) => `${entry.date}-${entry.title}`;

  const handleToggle = (key) => {
    setExpandedKey((current) => (current === key ? null : key));
  };

  return (
    <section aria-label="Timeline">
      <TypeFilter activeType={activeType} onChange={setActiveType} counts={counts} />

      <div className="mt-6">
        {filteredEntries.length === 0 ? (
          <p className="py-8 text-center text-base text-stone-500">
            No {activeType ? `${activeType} ` : ''}entries yet.
          </p>
        ) : (
          filteredEntries.map((entry) => {
            const key = getEntryKey(entry);
            return (
              <TimelineRow
                key={key}
                entry={entry}
                isExpanded={expandedKey === key}
                onToggle={() => handleToggle(key)}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default TimelineFeed;
