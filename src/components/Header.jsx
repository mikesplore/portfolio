import { Link } from 'react-router-dom';
import { Github, Mail } from 'lucide-react';
import profileImage from '../data/profile.jpg';
import { socialLinks, status } from '../data/profile';

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
    case 'Dev.to':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-label="dev.to">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
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

const Header = () => {
  const pillSocials = socialLinks.filter((link) => link.name !== 'Email');

  return (
    <header className="pt-4 pb-6">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
         

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
            Michael Odhiambo
          </h1>
          <p className="mt-2 text-base text-muted">Software Engineer · AI enthusiast</p>

          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2 text-base text-muted">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {status.location}
            </li>
            <li className="flex items-center gap-2 text-base text-muted">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {status.focus}
            </li>
          </ul>

          <div className="mt-5 flex min-w-0 items-center gap-2">
            <div className="scroll-pills flex min-w-0 flex-1 items-center gap-2 overflow-x-auto">
              {pillSocials.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-elevated px-3.5 py-2 text-sm text-muted transition-colors hover:bg-[var(--color-hover)] hover:text-ink"
                >
                  {getSocialIcon(link.name)}
                  {link.label}
                </a>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-3.5 py-2 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              <Mail className="w-4 h-4" />
              Say hello
            </Link>
          </div>
        </div>

        <div className="shrink-0">
          <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-2xl bg-elevated">
            <img src={profileImage} alt="Michael Odhiambo" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
