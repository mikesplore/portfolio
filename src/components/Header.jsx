import { useState, useEffect } from 'react';
import '../styles/Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [activeSection, setActiveSection] = useState("home");
  
  // Handle scroll event to add 'scrolled' class
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");
        }
      });
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);
  
  // Toggle theme
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Apply or remove light-mode class to body element
    if (newDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('darkMode', newDarkMode ? 'true' : 'false');
  };
  
  // Check for saved theme preference on load
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      const isDarkMode = savedTheme === 'true';
      setDarkMode(isDarkMode);
      if (!isDarkMode) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }
  }, []);
  
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <h2>Portfolio</h2>
      </div>
      
      <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={() => setMenuActive(!menuActive)}>
        <div className="hamburger"></div>
      </div>
      
      <nav className={`nav ${menuActive ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setMenuActive(false)}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setMenuActive(false)}>About</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setMenuActive(false)}>Skills</a></li> 
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setMenuActive(false)}>Projects</a></li>
          <li><a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={() => setMenuActive(false)}>Education</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setMenuActive(false)}>Contact</a></li>
        </ul>
      </nav>
      
      <div className="theme-toggle">
        <button 
          className="theme-btn" 
          onClick={toggleTheme} 
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="icon">
            {darkMode ? '☀️' : '🌙'}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
