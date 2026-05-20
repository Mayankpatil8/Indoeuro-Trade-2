import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BreadcrumbSchema } from './components/BreadcrumbSchema';
import { Home } from './pages/Home';
import { Electronics } from './pages/Electronics';
import { Mechanical } from './pages/Mechanical';
import { Food } from './pages/Food';
import { DigitalMarketing } from './pages/DigitalMarketing';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { Careers } from './pages/Careers';

function AnimatedAppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-grow" role="main" aria-label="Main content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/food" element={<Food />} />
            <Route path="/digital" element={<DigitalMarketing />} />
            <Route path="/mechanical" element={<Mechanical />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <BreadcrumbSchema />
      <div className="min-h-screen flex flex-col">
        <AnimatedAppContent />
      </div>
    </Router>
  );
}
