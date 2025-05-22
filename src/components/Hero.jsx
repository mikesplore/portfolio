import { useEffect, useState } from 'react';
import '../styles/Hero.css';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Animation trigger when component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="tech-circle one"></div>
        <div className="tech-circle two"></div>
        <div className="tech-circle three"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="container">
        <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
          <div className="hero-text">
            <div className="hero-intro">
              <span className="greeting">Hi there, I'm</span>
            </div>
            
            <h1 className="hero-name">
              Michael Odhiambo<span className="accent-dot">.</span>
            </h1>
            
            <div className="hero-title">
              <h2>Full Stack Developer</h2>
              <div className="tech-stack">
                <span className="tech-tag">Jetpack Compose</span>
                <span className="tech-tag">Ktor</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Exposed</span>
                <span className="tech-tag">PostgreSQL</span>
              </div>
            </div>
            
            <p className="hero-description">
              I'm a full-stack developer with expertise in Android development, Kotlin, and Jetpack Compose. I specialize in building structured and efficient applications that provide real value, particularly for local businesses and educational tools. My passion lies in creating unified experiences across web and mobile platforms.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn cta-primary">
                <span>Explore My Work</span>
                <i className="arrow-icon">→</i>
              </a>
              <a href="/resume.pdf" className="btn cta-secondary" target="_blank" rel="noopener noreferrer">
                <span>Resume</span>
                <i className="download-icon">↓</i>
              </a>
            </div>
            
            <div className="hero-scroll-indicator">
              <span>Scroll Down</span>
              <div className="scroll-arrow"></div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="profile-container">
              <div className={`profile-image ${isLoaded ? 'loaded' : ''}`}>
                <img src="src/assets/profile.png" alt="Michael Odhiambo" />
              </div>
              <div className="profile-backdrop"></div>
            </div>
            
            <div className="floating-elements">
              <div className="tech-element kotlin">Kotlin</div>
              <div className="tech-element html">HTML</div>
              <div className="tech-element css">CSS</div>
              <div className="tech-element js">JS</div>
              <div className="tech-element react">SQL</div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
