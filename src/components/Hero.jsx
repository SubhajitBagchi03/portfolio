import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="hero"
    >
      <div className="hero-content">
        <div className="hero-block-container">
          <div className="hero-block">
            <div className="hero-block-line">subh</div>
            <div className="hero-block-line">ajit</div>
            <div className="hero-block-line">
              bagch<span className="hero-i-wrap">i
                <span className="hero-center-dot" />
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle + CTA */}
        <div className="hero-subtitle-row" style={{ opacity: 1, transform: 'none', justifyContent: 'flex-end', marginBottom: '30px' }}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta"
          >
            <span>explore my work</span>
            <span className="hero-cta-arrow">↗</span>
          </a>
        </div>
      </div>

      <div className="hero-glow" />
    </motion.section>
  );
}
