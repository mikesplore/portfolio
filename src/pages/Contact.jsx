import { Link } from 'react-router-dom';
import { ExternalLink, Mail } from 'lucide-react';
import { socialLinks, availability, contactSocials, username } from '../data/profile';

const Contact = () => {
  const emailLink = socialLinks.find((link) => link.name === 'Email')?.url || 'mailto:mikepremium8@gmail.com';

  return (
    <div className="space-y-8">
      <p className="text-base leading-relaxed text-muted">{availability.detail}</p>

      <div>
        <a
          href={emailLink}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-base font-medium text-on-accent transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          Email me
        </a>
      </div>

      <section>
        <h2 className="text-lg font-medium text-ink">Socials</h2>
        <p className="mt-1 text-sm text-subtle">@{username} on most platforms</p>

        <ul className="mt-4 divide-y divide-divider rounded-xl bg-elevated overflow-hidden">
          {contactSocials.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3.5 text-base transition-colors hover:bg-[var(--color-hover)]"
              >
                <span className="text-ink">{social.name}</span>
                <span className="inline-flex items-center gap-1.5 text-muted">
                  @{social.handle}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

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
