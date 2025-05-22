import { useState, useEffect } from 'react';
import '../styles/About.css';
import carouselImage1 from '../assets/carousel1.jpeg'; 
import carouselImage2 from '../assets/carousel2.jpeg'; 
import carouselImage3 from '../assets/carousel3.jpeg'; 
import carouselImage4 from '../assets/carousel4.jpeg'; 
import carouselImage5 from '../assets/carousel5.jpeg'; 
import carouselImage6 from '../assets/carousel6.jpeg'; 
import carouselImage7 from '../assets/carousel7.jpeg';


function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    carouselImage6,
    carouselImage2,
    carouselImage3,
    carouselImage1,
    carouselImage4,
    carouselImage5,
    carouselImage7
    
  ];
  
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

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };
  
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
            <div className="about-image carousel-container">
              <div className="carousel-inner" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                {carouselImages.map((image, index) => (
                  <div className="carousel-item" key={index}>
                    <img src={image} alt={`Profile ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-control prev" onClick={prevImage}>
                <span>❮</span>
              </button>
              <button className="carousel-control next" onClick={nextImage}>
                <span>❯</span>
              </button>
              <div className="carousel-indicators">
                {carouselImages.map((_, index) => (
                  <span 
                    key={index} 
                    className={`carousel-dot ${currentImageIndex === index ? 'active' : ''}`} 
                    onClick={() => goToImage(index)}
                  ></span>
                ))}
              </div>
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
