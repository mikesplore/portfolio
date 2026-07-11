import { Link } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';
import { socialLinks } from '../data/portfolio';
import { availability } from '../data/profile';

const Contact = () => {
  const emailLink = socialLinks.find((link) => link.name === 'Email')?.url || 'mailto:mikepremium8@gmail.com';

  return (
    <div className="space-y-6">
      <p className="text-base leading-relaxed text-muted">{availability.detail}</p>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={emailLink}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-base font-medium text-on-accent transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          Email me
        </a>
        <a
          href="https://wa.me/254799013845"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-elevated px-6 py-3 text-base text-ink transition-colors hover:bg-[var(--color-hover)]"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href="https://github.com/mikesplore"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-elevated px-6 py-3 text-base text-muted transition-colors hover:bg-[var(--color-hover)] hover:text-ink"
        >
          GitHub
        </a>
      </div>

      <p className="text-sm text-subtle">
        Browse the{' '}
        <Link to="/timeline" className="text-accent hover:text-accent/80">
          timeline
        </Link>{' '}
        or{' '}
        <Link to="/" className="text-accent hover:text-accent/80">
          home
        </Link>{' '}
        for skills and education.
      </p>
    </div>
  );
};

export default Contact;
