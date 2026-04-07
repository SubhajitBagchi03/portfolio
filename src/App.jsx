import NavDots from './components/NavDots';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import LaunchNest from './components/LaunchNest';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="app-wrapper">
      <NavDots />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <LaunchNest />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
