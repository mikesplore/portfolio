import { NavLink } from 'react-router-dom';
import { events } from '../data/events';
import { hackathons } from '../data/profile';
import { bucketListItems } from '../data/bucketList';

const navItems = [
  { to: '/', label: 'About', end: true },
  { to: '/timeline', label: 'Timeline', end: false },
  { to: '/hackathons', label: 'Hackathons', end: false, count: hackathons.length },
  { to: '/events', label: 'Events', end: false, count: events.length },
  { to: '/bucket-list', label: 'Bucket list', end: false, count: bucketListItems.length },
  { to: '/contact', label: 'Contact', end: false },
  { to: '/cv', label: 'CV', end: false },
];

const Nav = () => {
  return (
    <nav className="w-full border-b border-divider" aria-label="Main">
      <div className="scroll-pills -mx-5 overflow-x-auto px-5 sm:-mx-6 sm:px-6">
        <ul className="flex w-max items-end gap-1">
          {navItems.map((item) => (
            <li key={item.to} className="shrink-0">
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `inline-block px-3 py-3 text-base transition-colors border-b-2 -mb-px ${
                    isActive
                      ? 'border-nav text-nav font-semibold'
                      : 'border-transparent text-muted hover:text-ink'
                  }`
                }
              >
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  {item.label}
                  {item.count != null && (
                    <span
                      className="rounded-full bg-elevated px-1.5 py-0.5 text-xs tabular-nums text-subtle"
                      aria-label={`${item.count} ${item.label.toLowerCase()}`}
                    >
                      {item.count}
                    </span>
                  )}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
