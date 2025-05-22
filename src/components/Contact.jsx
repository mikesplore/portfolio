import { useState, useEffect } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(document.querySelector('#contact'));

    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    sending: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear any previous form status when user is typing
    if (formStatus.submitted) {
      setFormStatus({
        submitted: false,
        sending: false,
        error: false,
        message: ''
      });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        sending: false,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // Set loading state
    setFormStatus({
      submitted: false,
      sending: true,
      error: false,
      message: 'Sending your message...'
    });
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Random success (90%) or failure (10%) to simulate real-world scenarios
      const isSuccess = Math.random() > 0.1;
      
      if (isSuccess) {
        setFormStatus({
          submitted: true,
          sending: false,
          error: false,
          message: 'Thank you for your message! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Network error');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        sending: false,
        error: true,
        message: 'Something went wrong. Please try again or contact me directly via email.'
      });
    }
  };
  
  const resetForm = () => {
    setFormStatus({
      submitted: false,
      sending: false,
      error: false,
      message: ''
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="hero-background">
        <div className="tech-circle one"></div>
        <div className="tech-circle two"></div>
        <div className="tech-circle three"></div>
      </div>
      <div className="grid-overlay"></div>

      <div className="contact container">
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <h2 className="section-title">Contact Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className={`contact-content ${isVisible ? 'animate' : ''}`}>
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="icon">📧</i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:mikepremium8@gmail.com">mikepremium8@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="icon">📱</i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <a href="tel:+254799013845">+254 799013845</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="icon">📍</i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Mombasa, Kenya</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Find Me On</h3>
              <div className="social-icons">
                <a href="https://github.com/mikesplore" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="linkedin-icon">in</i>
                </a>
                <a href="https://github.com/mikesplore" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="github-icon">GH</i>
                </a>
                <a href="https://twitter.com/mikesplore" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="twitter-icon">X</i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send Me a Message</h3>
            
            {formStatus.submitted ? (
              <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                <p>{formStatus.message}</p>
                <button onClick={resetForm} className="btn secondary form-reset-btn">
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {formStatus.sending && (
                  <div className="form-loading">
                    <div className="loading-spinner"></div>
                    <p>Sending message...</p>
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    disabled={formStatus.sending}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    disabled={formStatus.sending}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to talk about..."
                    disabled={formStatus.sending}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`btn primary ${formStatus.sending ? 'btn-sending' : ''}`}
                  disabled={formStatus.sending}
                >
                  {formStatus.sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
