import { socialLinks } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <div>© {currentYear} Michael Odhiambo. All rights reserved.</div>
        <div className="flex gap-6">
          {socialLinks.map((link, idx) => {
            const isExternal = link.url.startsWith('http') || link.url.startsWith('mailto');
            return isExternal ? (
              <a 
                key={idx}
                href={link.url} 
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <a 
                key={idx}
                href={link.url}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
