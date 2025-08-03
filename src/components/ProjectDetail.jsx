import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectBySlug } from '../data/projectsData';
import '../styles/ProjectDetail.css';

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const projectData = getProjectBySlug(slug);
    if (projectData) {
      setProject(projectData);
      setIsVisible(true);
    } else {
      navigate('/'); // Redirect to home if project not found
    }
  }, [slug, navigate]);
  
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  
  const navigateImage = (direction) => {
    if (!project) return;
    
    if (direction === 'next') {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.gallery.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? project.gallery.length - 1 : prevIndex - 1
      );
    }
  };

  if (!project) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-detail">
      <div className="hero-background">
        <div className="tech-circle one"></div>
        <div className="tech-circle two"></div>
        <div className="tech-circle three"></div>
      </div>
      <div className="grid-overlay"></div>

      <div className={`project-detail-container ${isVisible ? 'animate' : ''}`}>
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Projects
        </button>

        <div className="project-header">
          <div className="project-image-large">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-info-header">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-category">{project.category.replace('-', ' ').toUpperCase()}</p>
            <p className="project-short-description">{project.shortDescription}</p>
            
            <div className="project-tech-tags">
              {project.technologies.map((tech, index) => (
                <span className="tech-tag" key={index}>{tech}</span>
              ))}
            </div>

            <div className="project-links-header">
              {project.category === 'frontend' && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn primary">
                  View Live Demo
                </a>
              )}
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn secondary">
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        <div className="project-content">
          <section className="project-description">
            <h2>About This Project</h2>
            <div className="description-content">
              {project.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="project-features">
            <h2>Key Features</h2>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="project-challenges">
            <h2>Technical Challenges</h2>
            <ul className="challenges-list">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>

          <section className="project-outcomes">
            <h2>Results & Impact</h2>
            <ul className="outcomes-list">
              {project.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </section>
          
          <section className="project-gallery">
            <h2>Project Gallery</h2>
            <div className="gallery-grid">
              {project.gallery.map((image, index) => (
                <div 
                  className="gallery-item" 
                  key={index}
                  onClick={() => openModal(index)}
                >
                  <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                  <div className="gallery-overlay">
                    <span className="view-icon">+</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        {/* Image Modal */}
        {showModal && (
          <div className="gallery-modal">
            <div className="modal-overlay" onClick={closeModal}></div>
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>×</button>
              <button className="modal-nav prev" onClick={() => navigateImage('prev')}>‹</button>
              <div className="modal-image-container">
                <img 
                  src={project.gallery[currentImageIndex]} 
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`} 
                />
                <div className="modal-caption">
                  {project.title} - Image {currentImageIndex + 1} of {project.gallery.length}
                </div>
              </div>
              <button className="modal-nav next" onClick={() => navigateImage('next')}>›</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
