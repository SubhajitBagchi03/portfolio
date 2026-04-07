import { useState, useEffect } from 'react';
import { skills } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import './Skills.css';

const TypewriterScreen = ({ items }) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = items.join('\n');

  useEffect(() => {
    let timer;
    if (!isDeleting && currentText === fullText) {
      // Wait 2 seconds before backspacing
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      // Wait briefly before typing again
      timer = setTimeout(() => setIsDeleting(false), 500);
    } else {
      const nextText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);
        
      // Reduced typing speed
      const delay = isDeleting ? 30 : 80; 
      timer = setTimeout(() => setCurrentText(nextText), delay);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, fullText]);

  return (
    <div className="typewriter-content">
      {currentText}<span className="typewriter-cursor">|</span>
    </div>
  );
};

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="section skills-section">
      <div className="section-inner">
        <ScrollReveal>
          <h2 className="text-section-title skills-title">
            skills
          </h2>
        </ScrollReveal>

        <div className="skills-phones-grid">
          {categories.map(([category, items], catIdx) => (
            <ScrollReveal key={category} delay={catIdx * 0.1}>
              <div className="skills-phone-frame">
                <div className="skills-phone-speaker"></div>
                <div className="skills-phone-screen">
                  <div className="skills-phone-content">
                    <div className="skills-row-header">
                      <span className="skills-row-num">{String(catIdx + 1).padStart(2, '0')}</span>
                      <span className="skills-row-category">{category}</span>
                    </div>
                    <div className="skills-row-items">
                      <TypewriterScreen items={items} />
                    </div>
                  </div>
                </div>
                <div className="skills-phone-home-button"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div style={{ 
          margin: 'clamp(60px, 8vw, 100px) 0', 
          borderTop: '3px solid rgba(255, 255, 255, 0.8)', 
          width: '100%' 
        }} />
      </div>
    </section>
  );
}
