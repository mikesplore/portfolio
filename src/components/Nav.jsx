import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/timeline', label: 'Timeline', end: false },
  { to: '/hackathons', label: 'Hackathons', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/contact', label: 'Contact', end: false },
];

const Nav = () => {
  return (
    <nav className="flex items-center justify-between gap-4 border-b border-line pb-4" aria-label="Main">
      <ul className="flex flex-wrap items-center gap-1">
        {navItems.map((item, index) => (
          <li key={item.to} className="flex items-center gap-1">
            {index > 0 && (
              <span className="px-1 text-subtle select-none" aria-hidden="true">
                ·
              </span>
            )}
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `rounded-lg px-2.5 py-1.5 text-base transition-colors ${
                  isActive
                    ? 'bg-accent-soft text-accent font-medium'
                    : 'text-muted hover:bg-[var(--color-hover)] hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
};

export default Nav;
