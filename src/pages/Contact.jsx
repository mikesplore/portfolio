import { Link } from 'react-router-dom';
import { socialLinks } from '../data/portfolio';

const Contact = () => {
  const emailLink = socialLinks.find((link) => link.name === 'Email')?.url || 'mailto:mikepremium8@gmail.com';

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-lg font-medium text-stone-100">Contact</h2>
        <p className="mt-4 text-base leading-relaxed text-stone-400">
          Open to freelance work, collaborations, and conversations about backends, Android, or
          constraint-aware AI systems.
        </p>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={emailLink}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-medium text-surface transition-colors hover:bg-accent/90"
        >
          Get in touch
        </a>
        <a
          href="https://wa.me/254799013845"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-stone-600 px-6 py-3 text-base text-stone-200 transition-colors hover:border-stone-400"
        >
          WhatsApp
        </a>
        <a
          href="https://github.com/mikesplore"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-stone-700/80 px-6 py-3 text-base text-stone-300 transition-colors hover:border-stone-500 hover:text-stone-100"
        >
          GitHub
        </a>
      </div>

      <p className="text-sm text-stone-500">
        Or check the{' '}
        <Link to="/timeline" className="text-accent hover:text-accent/80">
          timeline
        </Link>
        .
      </p>
    </div>
  );
};

export default Contact;
