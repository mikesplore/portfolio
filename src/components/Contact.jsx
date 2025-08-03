import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailJsConfig } from '../utils/emailConfig';
import Notification from './Notification';
import '../styles/Contact.css';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef();
  const [notification, setNotification] = useState({
    visible: false,
    message: '',
    type: 'info'
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

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
      
      setNotification({
        visible: true,
        message: 'Please enter a valid email address.',
        type: 'error'
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
      // Check if EmailJS is properly configured
      if (emailJsConfig.serviceId === 'your_service_id' || 
          emailJsConfig.templateId === 'your_template_id' || 
          emailJsConfig.publicKey === 'your_public_key') {
        
        // If not configured, show instructions
        console.warn('EmailJS not configured. Please set up your email configuration in /src/utils/emailConfig.js');
        
        // Simulate successful send for development purposes
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setFormStatus({
          submitted: true,
          sending: false,
          error: false,
          message: 'Message sent successfully (simulated).'
        });
        
        setNotification({
          visible: true,
          message: 'Email sent successfully (simulated). Please configure EmailJS for real email sending.',
          type: 'info'
        });
        
        setFormData({ name: '', email: '', message: '' });
        return;
      }
      
      // Send email notification to you
      const result = await emailjs.sendForm(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        formRef.current,
        emailJsConfig.publicKey
      );
      
      console.log('Email sent successfully:', result.text);
      
      // Send an auto-response if template is configured
      if (emailJsConfig.autoResponseTemplateId && emailJsConfig.autoResponseTemplateId !== 'template_autoresponse') {
        try {
          // Send an auto-response to the person who contacted you
          await emailjs.send(
            emailJsConfig.serviceId,
            emailJsConfig.autoResponseTemplateId,
            {
              to_email: formData.email,
              from_name: formData.name,
              message: formData.message,
              reply_to: "mikepremium8@gmail.com" // Your email for them to reply to
            },
            emailJsConfig.publicKey
          );
          console.log("Auto-response sent successfully");
        } catch (autoResponseError) {
          console.error("Error sending auto-response:", autoResponseError);
          // We don't show this error to the user since the main email was sent successfully
        }
      }
      
      setFormStatus({
        submitted: true,
        sending: false,
        error: false,
        message: 'Thank you for your message! I\'ll get back to you soon.'
      });
      
      setNotification({
        visible: true,
        message: 'Thank you for your message! I\'ll get back to you soon.',
        type: 'success'
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setFormStatus({
        submitted: true,
        sending: false,
        error: true,
        message: 'Something went wrong. Please try again or contact me directly via email.'
      });
      
      setNotification({
        visible: true,
        message: 'Something went wrong. Please try again or contact me directly via email.',
        type: 'error'
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
    
    // Also close any notification
    setNotification({
      ...notification,
      visible: false
    });
  };

  // Close notification
  const closeNotification = () => {
    setNotification({
      ...notification,
      visible: false
    });
  };

  return (
    <section id="contact" className="contact section">
      {notification.visible && (
        <Notification 
          message={notification.message}
          type={notification.type}
          duration={5000}
          onClose={closeNotification}
        />
      )}
      
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
              <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
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
                
                {/* Hidden fields for additional email template data */}
                <input type="hidden" name="to_name" value="Mike" />
                <input type="hidden" name="from_name" value={formData.name} />
                
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
