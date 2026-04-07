import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { launchNest } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import './LaunchNest.css';

export default function LaunchNest() {
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 100 });
  const titleX = useTransform(smoothX, [0, 1], [20, -20]);
  const titleY = useTransform(smoothY, [0, 1], [10, -10]);
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleMouse = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="launchnest"
      className="section launchnest-section"
      ref={sectionRef}
      onMouseMove={handleMouse}
    >
      <div className="section-inner">
        {/* Status badge */}
        <ScrollReveal>
          <div className="ln-status">
            <span className="ln-status-dot" />
            <span className="text-small">{launchNest.status}</span>
          </div>
        </ScrollReveal>

        {/* Massive title staggered effect bouncing opposite directions */}
        <div className="ln-massive-title-container" style={{ position: 'relative', width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '20px 0', overflow: 'hidden' }}>
          <div className="ln-massive-word ln-bounce-right">
            launch
          </div>
          <div className="ln-massive-word text-red ln-bounce-left">
            nest
          </div>
        </div>

        {/* Tagline */}
        <ScrollReveal delay={0.2}>
          <p className="text-large ln-tagline text-red">"{launchNest.tagline}"</p>
        </ScrollReveal>

        {/* Description + Problem */}
        <div className="ln-content-grid" style={{ marginTop: '40px' }}>
          <ScrollReveal delay={0.3}>
            <div className="ln-content-block">
              <span className="text-small">what it is</span>
              <div className="grid-line" style={{ margin: '10px 0 12px' }} />
              <p className="text-body">{launchNest.description}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="ln-content-block">
              <span className="text-small">the problem</span>
              <div className="grid-line" style={{ margin: '10px 0 12px' }} />
              <p className="text-body">{launchNest.problem}</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Features with sliding arrow like arrow.mp4 */}
        <ScrollReveal delay={0.2}>
          <span className="text-small" style={{ display: 'block', marginTop: '60px' }}>key features</span>
        </ScrollReveal>
        <div className="ln-features-list">
          {launchNest.features.map((feat, i) => (
            <ScrollReveal key={feat.title} delay={0.08 * i}>
              <div className="ln-feature-row">
                <div className="ln-feature-row-inner">
                  <div className="ln-feature-row-left">
                    <h3 className="ln-feature-name">{feat.title}</h3>
                  </div>
                  <div className="ln-feature-row-right">
                    <p className="ln-feature-desc">{feat.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech stack */}
        <ScrollReveal delay={0.2}>
          <h3 className="text-large" style={{ display: 'block', marginTop: '120px', marginBottom: '24px' }}>tech stack</h3>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="flex-gap" style={{ gap: '20px 40px' }}>
             {launchNest.stack.map((tech) => (
              <span key={tech} className="ln-stack-item">{tech}</span>
            ))}
          </div>
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
