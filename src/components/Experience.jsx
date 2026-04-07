import { experience, education } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-inner">

        {/* ===== EXPERIENCE BLOCK ===== */}
        <div className="exp-block">
          <div className="exp-block-top">
            <span className="exp-block-subtitle">professional journey</span>
          </div>

          <ScrollReveal>
            <h2 className="exp-block-title">
              exper<span className="text-red">ience</span>
            </h2>
          </ScrollReveal>

          <div className="exp-block-cols">
            {experience.map((exp, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div className="exp-col">
                  <h3 className="exp-col-role">{exp.role}</h3>
                  <span className="exp-col-company">{exp.company}</span>
                  <span className="exp-col-period">{exp.period}</span>
                  <p className="exp-col-desc">{exp.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ===== EDUCATION BLOCK ===== */}
        <div className="exp-block edu-block-gap">
          <div className="exp-block-top">
            <span className="exp-block-subtitle">academic background</span>
          </div>

          <ScrollReveal>
            <h2 className="exp-block-title">
              edu<span className="text-red">cation</span>
            </h2>
          </ScrollReveal>

          <div className="exp-block-cols">
            <ScrollReveal delay={0.1}>
              <div className="exp-col">
                <h3 className="exp-col-role">{education.college}</h3>
                <span className="exp-col-company">{education.degree} — {education.department}</span>
                <span className="exp-col-period">{education.period}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="exp-col">
                <span className="exp-col-cgpa-label">CGPA</span>
                <span className="exp-col-cgpa-value">{education.cgpa}</span>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}
