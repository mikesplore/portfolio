import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Hackathons from './pages/Hackathons';
import About from './pages/About';
import Contact from './pages/Contact';
import Vela from './pages/projects/Vela';
import FarmPulse from './pages/projects/FarmPulse';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="hackathons" element={<Hackathons />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/vela" element={<Vela />} />
          <Route path="projects/farmpulse" element={<FarmPulse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
