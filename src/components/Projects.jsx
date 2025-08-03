import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Projects.css';
import { projectsData } from '../data/projectsData';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    const projectsElement = document.querySelector('#projects');
    if (projectsElement) {
      observer.observe(projectsElement);
    }

    return () => observer.disconnect();
  }, []);

  const categories = {
    all: 'All Projects',
    'mobile-apps': 'Mobile Apps',
    'fullstack': 'Full-Stack Web Apps'
  };

  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return Object.values(projectsData).flat();
    }
    return projectsData[activeCategory] || [];
  };

  const handleProjectClick = (slug) => {
    navigate(`/project/${slug}`);
  };

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
          <p className="section-subtitle">Explore my work across different technologies and platforms</p>
        </div>

        {/* Category Filter */}
        <div className={`category-filter ${isVisible ? 'animate' : ''}`}>
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              className={`filter-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={`projects-grid ${isVisible ? 'animate' : ''}`}>
          {getFilteredProjects().map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <div className="project-category-badge">{project.category.replace('-', ' ')}</div>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <div className="project-links">
                  <button 
                    className="btn small primary"
                    onClick={() => handleProjectClick(project.slug)}
                  >
                    View Details
                  </button>
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
