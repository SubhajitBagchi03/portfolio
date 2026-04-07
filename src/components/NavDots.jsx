import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navSections } from '../data/portfolio';
import './NavDots.css';

export default function NavDots() {
  const [active, setActive] = useState('hero');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setVisible(window.scrollY > 300);

      // Determine active section
      const sections = navSections
        .map(({ id }) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { id, top: rect.top };
        })
        .filter(Boolean);

      const current = sections.reduce((closest, sec) => {
        return Math.abs(sec.top) < Math.abs(closest.top) ? sec : closest;
      }, sections[0]);

      if (current) setActive(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="nav-dots"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
        >
          {navSections.map(({ id, label }) => (
            <button
              key={id}
              className={`nav-dot-btn ${active === id ? 'nav-dot-active' : ''}`}
              onClick={() => scrollTo(id)}
              title={label}
              aria-label={`Navigate to ${label}`}
            >
              <span className="nav-dot-indicator" />
              <span className="nav-dot-label">{label}</span>
            </button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
