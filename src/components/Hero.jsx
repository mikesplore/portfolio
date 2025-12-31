import { Github, Twitter, Mail, ChevronDown } from 'lucide-react';
import profileImage from '../data/profile.jpg';
import { socialLinks } from '../data/portfolio';

const getSocialIcon = (name) => {
  switch(name) {
    case 'GitHub':
      return <Github className="w-6 h-6" />;
    case 'Google Dev':
      return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>;
    case 'X':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-label="X">
          <path d="M13.468 10.813 19.95 3h-1.536l-5.617 6.64L8.002 3H2l6.845 9.74L2 21h1.536l5.998-7.086L15.998 21H22l-8.532-10.187ZM9.808 13.08l-.693-.986-5.15-7.35h2.219l4.155 5.931.692.988 5.406 7.707h-2.219l-4.41-6.29Z" />
        </svg>
      );
    case 'Email':
      return <Mail className="w-6 h-6" />;
    default:
      return null;
  }
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="order-2 md:order-1">
            <div className="mb-6 text-sm uppercase tracking-widest text-gray-400">
              Full Stack Developer
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-gray-100">
              Michael<br />Odhiambo
            </h1>
            <p className="text-lg md:text-xl text-white mb-2 font-medium leading-relaxed">
              Backend-first systems engineer building constraint-aware and AI-assisted products.
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              Kotlin backend, real-time systems, and production-grade architectures.
            </p>
            <div className="flex gap-6 items-center">
              {socialLinks.map((link, idx) => {
                const isExternal = link.url.startsWith('http') || link.url.startsWith('mailto');
                return isExternal ? (
                  <a 
                    key={idx}
                    href={link.url} 
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-3 border border-white/20 hover:border-white hover:bg-white/5 transition-all rounded-full"
                    title={link.label}
                  >
                    {getSocialIcon(link.name)}
                  </a>
                ) : (
                  <a 
                    key={idx}
                    href={link.url}
                    className="p-3 border border-white/20 hover:border-white hover:bg-white/5 transition-all rounded-full"
                    title={link.label}
                  >
                    {getSocialIcon(link.name)}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <img 
                  src={profileImage} 
                  alt="Michael Odhiambo" 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-white/20 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-white/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-40 hover:opacity-60 transition-opacity">
        <ChevronDown className="w-8 h-8 text-gray-600 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
