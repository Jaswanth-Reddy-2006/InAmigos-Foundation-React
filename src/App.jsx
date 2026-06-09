import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VortexBackground from './components/VortexBackground';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Volunteer from './pages/Volunteer';
import { ToastProvider } from './context/ToastContext';

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        {/* Animated Vortex Particle Starfield Background */}
        <VortexBackground />

        {/* Floating Capsule Header */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>

        {/* Page Footer */}
        <Footer />
      </BrowserRouter>
    </ToastProvider>
  );
}
