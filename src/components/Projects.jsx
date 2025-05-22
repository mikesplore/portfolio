import { useState, useEffect } from 'react';
import '../styles/Projects.css';
import timetableImage from '../assets/timetable.png';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(document.querySelector('#projects'));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Timetabling System",
      description: "A web application for creating and managing University timetables.",
      technologies: ["React", "PostgreSQL", "Ktor"],
      image: timetableImage, 
      liveLink: "https://github.com/mikesplore",
      githubLink: "https://github.com/mikesplore"
    },
    {
      id: 2,
      title: "StudVerify",
      description: "An app that allows examiners to verify student information and fee balances using QR codes.",
      technologies: ["Jetpack Compose", "Firebase", "Material-UI"],
      image: timetableImage,
      liveLink: "https://github.com/mikesplore",
      githubLink: "https://github.com/mikesplore"
    },
    {
      id: 3,
      title: "PC Buddy",
      description: "An Android app that display PC specifications and allows users to compare different models.",
      technologies: ["Jetpack Compose", "Ktor", "OSHI"],
      image: timetableImage,
      liveLink: "https://github.com/mikesplore",
      githubLink: "https://github.com/mikesplore"
    },
    {
      id: 4,
      title: "Uni Connect",
      description: "An Android app that allows students to connect with each other and share resources.",
      technologies: ["Jetpack Compose", "Firebase"],
      image: timetableImage,
      liveLink: "https://github.com/mikesplore",
      githubLink: "https://github.com/mikesplore"
    },
    

  ];

  return (
    <section id="projects" className="projects section">
      <div className="hero-background">
        <div className="tech-circle one"></div>
        <div className="tech-circle two"></div>
        <div className="tech-circle three"></div>
      </div>
      <div className="grid-overlay"></div>

      <div className="projects container">
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className={`projects-grid ${isVisible ? 'animate' : ''}`}>
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn small">Live Demo</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn small secondary">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
