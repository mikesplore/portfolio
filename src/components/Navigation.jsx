import { Github, Twitter, Mail } from 'lucide-react';
import { socialLinks } from '../data/portfolio';
import profileImage from '../data/profile.jpg';

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
    case 'Email':
      return <Mail className="w-4 h-4" />;
    default:
      return null;
  }
};

const Navigation = ({ isScrolled }) => {
  const socials = socialLinks.filter(link => link.name !== 'Email');

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-[0_10px_40px_-24px_rgba(255,255,255,0.4)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 border border-white/20 overflow-hidden">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="text-sm text-gray-400">Full Stack Developer</div>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-2 backdrop-blur">
            {[{ href: '#about', label: 'About' }, { href: '#projects', label: 'Projects' }, { href: '#gallery', label: 'Gallery' }, { href: '#skills', label: 'Skills' }].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 rounded-full text-sm uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              {socials.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors"
                  title={link.label}
                >
                  {getSocialIcon(link.name)}
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/254799013845"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black transition-all text-sm uppercase tracking-wider"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
