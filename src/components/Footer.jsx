import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="copyright">
            <p>&copy; {currentYear} Michael Odhiambo. All Rights Reserved.</p>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/mikesplore" target="_blank" rel="noopener noreferrer">
              GH
            </a>
            <a href="https://github.com/mikesplore" target="_blank" rel="noopener noreferrer">
              in
            </a>
            <a href="https://twitter.com/mikesplore" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </div>
          
          <div className="back-to-top">
            <a href="#home" className="top-link">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
