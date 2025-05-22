import { useState, useEffect } from 'react';
import '../styles/About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    
    observer.observe(document.querySelector('#about'));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section">
    
      <div className="hero-background">
        <div className="tech-circle one"></div>
        <div className="tech-circle two"></div>
        <div className="tech-circle three"></div>
      </div>
      <div className="grid-overlay"></div>
      
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className={`about-content ${isVisible ? 'animate' : ''}`}>
          <div className="about-image-container">
            <div className="about-image">
              <img src="src/assets/profile.png" alt="Profile" />
            </div>
            <div className="image-backdrop"></div>
            <div className="tech-icons">
              <span className="tech-icon">⚛️</span>
              <span className="tech-icon">🔥</span>
              <span className="tech-icon">💻</span>
              <span className="tech-icon">🌐</span>
            </div>
          </div>
          
          <div className="about-text">
            <div className="about-text-content">
              <h3 className="greeting">Hello, World! <span className="wave">👋</span></h3>
              <p>I'm a full-stack developer with a strong foundation in Android development, Kotlin, and Jetpack Compose. I love building structured and efficient applications that provide real value, especially for local businesses and educational tools.</p>

              <p>My journey began with native Android apps, but over time, I expanded into backend development using Kotlin Ktor, real-time systems with Firebase, and more recently, frontend development with <span className="highlight">React</span> and <span className="highlight">Vite</span> for web applications.</p>

              <p>I'm particularly passionate about <span className="highlight">cross-platform development</span>, <span className="highlight">clean architecture</span>, and <span className="highlight">building unified experiences across web and mobile</span>. I thrive on integrating technologies that work well together and enjoy bridging the gap between frontend and backend systems.</p>

              <div className="career-goals">
                <h3>Career Vision <span className="icon">🚀</span></h3>
                <p>I aspire to build scalable and reliable multiplatform applications, enhance the productivity of developers and end users, and contribute to projects that drive positive change through technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
