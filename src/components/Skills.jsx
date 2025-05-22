import { useState, useEffect, useRef } from 'react';
import '../styles/Skills.css';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        skillsRef.current.classList.add('in-view');
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    const skillsSection = document.querySelector('#skills');
    observer.observe(skillsSection);
    skillsRef.current = skillsSection;

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: "Kotlin", level: 60 },
    { name: "Jetpack Compose", level: 65 },
    { name: "React", level: 40 },
    { name: "Vite", level: 35 },
    { name: "Firebase", level: 50 },
    { name: "Ktor", level: 75 }
  ];
  
  const softSkills = [
    "Communication",
    "Problem Solving",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Attention to Detail"
  ];

  return (
    <section id="skills" className="skills section">
      {/* Add background elements like in About section */}
      <div className="hero-background">
        <div className="tech-circle one"></div>
        <div className="tech-circle two"></div>
        <div className="tech-circle three"></div>
      </div>
      <div className="grid-overlay"></div>

      <div className="container">
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <h2 className="section-title">Skills</h2>
          <div className="title-underline"></div>
        </div>

        <div className={`skills-content ${isVisible ? 'animate' : ''}`} ref={skillsRef}>
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skill-bars">
              {technicalSkills.map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill-name" data-level={skill.level}>{skill.name}</div>
                  <div className="skill-bar">
                    <div 
                      className="skill-level" 
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        '--skill-width': `${skill.level}%`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <ul className="soft-skills-list">
              {softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
