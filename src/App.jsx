import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="portfolio">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
