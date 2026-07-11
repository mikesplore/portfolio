import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Hackathons from './pages/Hackathons';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Cv from './pages/Cv';
import BucketList from './pages/BucketList';
import Vela from './pages/projects/Vela';
import FarmPulse from './pages/projects/FarmPulse';
import Kipepeo from './pages/projects/Kipepeo';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="hackathons" element={<Hackathons />} />
          <Route path="events" element={<Events />} />
          <Route path="bucket-list" element={<BucketList />} />
          <Route path="cv" element={<Cv />} />
          <Route path="about" element={<Navigate to="/" replace />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/vela" element={<Vela />} />
          <Route path="projects/farmpulse" element={<FarmPulse />} />
          <Route path="projects/kipepeo" element={<Kipepeo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
