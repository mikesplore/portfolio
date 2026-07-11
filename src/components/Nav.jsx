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
    <nav className="flex items-center justify-between gap-4 border-b border-divider pb-0" aria-label="Main">
      <ul className="flex flex-wrap items-end gap-1">
        {navItems.map((item) => (
          <li key={item.to}>
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
