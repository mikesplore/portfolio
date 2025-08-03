import { useState, useEffect } from 'react';
import '../styles/Education.css';

function Education() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(document.querySelector('#education'));

    return () => observer.disconnect();
  }, []);

  const educationHistory = [
  {
    id: 1,
    institution: "Technical University of Mombasa",
    degree: "BSc. in Computer Science",
    duration: "2022 – Present",
    description: "Comprehensive study in software engineering, data structures, algorithms, computer networks, databases, and system administration."
  },
  {
    id: 2,
    institution: "W3Schools",
    degree: "Web Development Certification",
    duration: "2023",
    description: "Covered essential web technologies including HTML, CSS, JavaScript, and responsive design principles. Learned via <a href='https://pathfinder.w3schools.com/' target='_blank' rel='noopener noreferrer'>W3Schools</a>."
  },
  {
    id: 3,
    institution: "Self-Taught via React Documentation",
    degree: "React Development",
    duration: "2025",
    description: "Built multiple front-end projects using React, React Router, and hooks by studying official docs and applying concepts hands-on. Learned via <a href='https://react.dev/learn' target='_blank' rel='noopener noreferrer'>React Documentation</a>."
  },
  {
    id: 4,
    institution: "YouTube Tutorials & Practice Projects",
    degree: "Backend Development with Kotlin",
    duration: "2022",
    description: "Learned RESTful API development with Kotlin Ktor, JWT authentication, database integration (PostgreSQL), and deployment workflows. Learned via <a href='https://www.youtube.com/@PhilippLackner' target='_blank' rel='noopener noreferrer'>Philipp Lackner's YouTube Channel</a> and <a href='https://ktor.io/docs/' target='_blank' rel='noopener noreferrer'>Ktor Documentation</a>."
  },
  {
    id: 5,
    institution: "YouTube Tutorials & Practice Projects",
    degree: "Android Development with Kotlin",
    duration: "2022",
    description: "Focused on building modern Android apps using Jetpack Compose, Room database, MVVM architecture, and Firebase integration. Learned via <a href='https://www.youtube.com/@PhilippLackner' target='_blank' rel='noopener noreferrer'>Philipp Lackner's YouTube Channel</a>."
  },
  {
    id: 6,
    institution: "Swahilipot Hub",
    degree: "Internship Position",
    duration: "May – August 2025",
    description: "Interned at Swahilipot Hub, where I learned project management skills, backend development, and effective team collaboration."
  }
];

  
  const certifications = [
  {
    id: 1,
    name: "JavaScript Certification",
    issuer: "W3Schools",
    date: "2023"
  },
  {
    id: 2,
    name: "React Development",
    issuer: "Self-Taught via Official Documentation",
    date: "2025"
  },
  {
    id: 3,
    name: "Backend Development with Kotlin",
    issuer: "YouTube / Practice Projects",
    date: "2022"
  },
  {
    id: 4,
    name: "Android Development with Kotlin",
    issuer: "YouTube / Practice Projects",
    date: "2022"
  }
];

  return (
    <section id="education" className="education section">
      <div className="hero-background">
        <div className="tech-circle one"></div>
        <div className="tech-circle two"></div>
        <div className="tech-circle three"></div>
      </div>
      <div className="grid-overlay"></div>

      <div className="education container">
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </div>

        <div className={`education-content ${isVisible ? 'animate' : ''}`}>
          <div className="formal-education">
            <h3>Academic Background</h3>
            <div className="timeline">
              {educationHistory.map((item) => (
                <div className="timeline-item" key={item.id}>
                  <div className="timeline-content">
                    <h4>{item.degree}</h4>
                    <h5>{item.institution}</h5>
                    <p className="duration">{item.duration}</p>
                    <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications">
            <h3>Certifications</h3>
            <ul className="cert-list">
              {certifications.map((cert) => (
                <li key={cert.id}>
                  <strong>{cert.name}</strong> - {cert.issuer} ({cert.date})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
