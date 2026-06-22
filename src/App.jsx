import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);

    const onScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setShowTop(window.scrollY > 420);
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };
    const onMove = (event) => setCursorPos({ x: event.clientX, y: event.clientY });

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove);

    onScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              className="loading-card"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="loading-ring" />
              <h3>Kurra Dinesh</h3>
              <p>Preparing a premium developer portfolio experience…</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="scroll-progress-bar" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />

      <div className="video-bg-layer" aria-hidden="true">
        <div className="video-bg-fallback" />
        <div className="cinematic-ambient-layer">
          <span className="cinematic-ring ring-one" />
          <span className="cinematic-ring ring-two" />
          <span className="cinematic-line line-one" />
          <span className="cinematic-line line-two" />
          <span className="cinematic-particle particle-one" />
          <span className="cinematic-particle particle-two" />
          <span className="cinematic-particle particle-three" />
          <span className="cinematic-particle particle-four" />
        </div>
      </div>

      <motion.div
        className="cursor-glow"
        animate={{ x: cursorPos.x - 110, y: cursorPos.y - 110 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      />

      <div className="ambient-bg" aria-hidden="true">
        <span className="blob blob-one" style={{ transform: `translateY(${scrollProgress * -18}px)` }} />
        <span className="blob blob-two" style={{ transform: `translateY(${scrollProgress * -10}px)` }} />
        <span className="blob blob-three" style={{ transform: `translateY(${scrollProgress * -24}px)` }} />
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Certifications />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            className="scroll-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}