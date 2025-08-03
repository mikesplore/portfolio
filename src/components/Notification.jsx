import { useState, useEffect } from 'react';
import '../styles/Notification.css';

function Notification({ message, type, duration = 3000, onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, 300); // Wait for fade-out animation before calling onClose
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration, onClose]);
  
  return (
    <div className={`notification ${type} ${isVisible ? 'show' : 'hide'}`}>
      <div className="notification-content">
        {type === 'success' && <span className="notification-icon">✓</span>}
        {type === 'error' && <span className="notification-icon">✗</span>}
        {type === 'info' && <span className="notification-icon">ℹ</span>}
        <p>{message}</p>
      </div>
      <button 
        className="notification-close" 
        onClick={() => {
          setIsVisible(false);
          setTimeout(() => {
            if (onClose) onClose();
          }, 300);
        }}
      >
        ×
      </button>
    </div>
  );
}

export default Notification;
