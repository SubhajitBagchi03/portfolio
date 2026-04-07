import { personalInfo } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const links = [
    { href: personalInfo.github, icon: FiGithub, label: 'github' },
    { href: personalInfo.linkedin, icon: FiLinkedin, label: 'linkedin' },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <ScrollReveal>
          <p className="text-small contact-label">let's connect</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <a
            href={`mailto:subhajitbagchi03@gmail.com`}
            className="contact-hello-link"
          >
            <h2 className="text-section-title contact-title">
              say<span className="text-red"> hello</span>
            </h2>
          </a>
        </ScrollReveal>

        {/* Links bounded by thick lines */}
        <div className="contact-links-block">
          {links.map((link, i) => (
            <ScrollReveal key={link.label} delay={0.1 * i}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-row"
              >
                <div className="contact-link-left">
                  <link.icon size={22} />
                  <span className="contact-link-name">{link.label}</span>
                </div>
                <span className="contact-link-arrow">➔</span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="footer">
            <span className="footer-text">
              designed & built by <span className="text-red">{personalInfo.name}</span>
            </span>
            <span className="footer-year">© {new Date().getFullYear()}</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
