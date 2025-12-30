import { Github, Twitter, Mail } from 'lucide-react';
import { socialLinks } from '../data/portfolio';

const Navigation = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight">MO</div>
        <div className="flex gap-8 items-center">
          <a href="#about" className="hover:text-gray-400 transition-colors text-sm uppercase tracking-wider">
            About
          </a>
          <a href="#projects" className="hover:text-gray-400 transition-colors text-sm uppercase tracking-wider">
            Projects
          </a>
          <a href="#gallery" className="hover:text-gray-400 transition-colors text-sm uppercase tracking-wider">
            Gallery
          </a>
          <a href="#skills" className="hover:text-gray-400 transition-colors text-sm uppercase tracking-wider">
            Skills
          </a>
          <a href="#contact" className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all text-sm uppercase tracking-wider">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
