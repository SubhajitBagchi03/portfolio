import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import { FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import './About.css';

export default function About() {
  const [isSpread, setIsSpread] = useState(false);
  const bioRef = useRef(null);

  return (
    <section id="about" className="section about-section">
      <div className="grid-line" />
      <div className="section-inner">
        <ScrollReveal>
          <p className="text-small about-label">about me</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <motion.p
            ref={bioRef}
            className={`text-large about-bio ${isSpread ? 'about-bio-spread' : ''}`}
            onMouseEnter={() => setIsSpread(true)}
            onMouseLeave={() => setIsSpread(false)}
          >
            {personalInfo.bio}
          </motion.p>
        </ScrollReveal>

        <div style={{ 
          margin: 'clamp(60px, 8vw, 100px) 0', 
          borderTop: '3px solid rgba(255, 255, 255, 0.8)', 
          width: '100%' 
        }} />
      </div>
    </section>
  );
}
