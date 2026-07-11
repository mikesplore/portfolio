import { Link } from 'react-router-dom';
import { Github, Mail } from 'lucide-react';
import profileImage from '../data/profile.jpg';
import { socialLinks } from '../data/portfolio';

const getSocialIcon = (name) => {
  switch (name) {
    case 'GitHub':
      return <Github className="w-4 h-4" />;
    case 'Google Dev':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-label="Google Developers">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
      );
    case 'X':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-label="X">
          <path d="M13.468 10.813 19.95 3h-1.536l-5.617 6.64L8.002 3H2l6.845 9.74L2 21h1.536l5.998-7.086L15.998 21H22l-8.532-10.187ZM9.808 13.08l-.693-.986-5.15-7.35h2.219l4.155 5.931.692.988 5.406 7.707h-2.219l-4.41-6.29Z" />
        </svg>
      );
    case 'Lablab':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-label="Lablab">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5zm0 7l-7.5 3.75L12 22l7.5-3.75L12 16z" />
        </svg>
      );
    case 'Email':
      return <Mail className="w-4 h-4" />;
    default:
      return null;
  }
};

const statusBullets = [
  'Freelance full-stack · Mombasa, Kenya',
  'Kotlin backends, Android, LLM-assisted tooling',
];

const Header = () => {
  const pillSocials = socialLinks.filter((link) => link.name !== 'Email');

  return (
    <header className="pt-8 pb-6">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-stone-100">
            Michael Odhiambo
          </h1>
          <p className="mt-2 text-base text-stone-400">Full-stack developer · systems engineer</p>

          <ul className="mt-4 space-y-2">
            {statusBullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2 text-base text-stone-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {pillSocials.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1.5 rounded-full border border-stone-700/80 bg-stone-900/60 px-3.5 py-2 text-sm text-stone-300 transition-colors hover:border-stone-500 hover:text-stone-100"
              >
                {getSocialIcon(link.name)}
                {link.label}
              </a>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/15 px-3.5 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/25"
            >
              <Mail className="w-4 h-4" />
              Say hello
            </Link>
          </div>
        </div>

        <div className="shrink-0">
          <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-xl border border-stone-700/80 bg-stone-900">
            <img src={profileImage} alt="Michael Odhiambo" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
