import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projects } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  
  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform coordinates to degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate normalized position from -0.5 to 0.5
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href={project.liveUrl || project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
        {/* Header: massive number + live badge */}
        <div className="project-card-header">
          <span className="project-card-num">{project.number}</span>
          {project.liveUrl && (
            <span className="project-live-badge">
              <FiExternalLink size={12} /> live
            </span>
          )}
        </div>

        {/* Body: name + description */}
        <div className="project-card-body">
          <h3 className="project-card-name" style={{ transform: "translateZ(20px)" }}>{project.name}</h3>
          <p className="project-card-desc" style={{ transform: "translateZ(10px)" }}>{project.description}</p>
        </div>

        {/* Footer: tech tags + arrow */}
        <div className="project-card-footer">
          <div className="project-card-tech" style={{ transform: "translateZ(15px)" }}>
            {project.tech.map((t) => (
              <span key={t} className="project-card-tag">{t}</span>
            ))}
          </div>
          <FiArrowUpRight size={28} className="project-card-arrow" />
        </div>
      </div>
    </motion.a>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-inner">
        <ScrollReveal>
          <h2 className="text-section-title projects-title">
            pro<span className="text-red">jects</span>
          </h2>
        </ScrollReveal>

        <div className="projects-list">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
