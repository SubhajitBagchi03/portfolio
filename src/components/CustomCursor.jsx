import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

  const dotX = useSpring(0, { damping: 40, stiffness: 400 });
  const dotY = useSpring(0, { damping: 40, stiffness: 400 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleEnter = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const isInteractive =
        tag === 'a' ||
        tag === 'button' ||
        e.target.classList.contains('pill') ||
        e.target.classList.contains('link-hover') ||
        e.target.closest('a') ||
        e.target.closest('button');
      if (isInteractive) setHovering(true);
    };

    const handleLeave = () => setHovering(false);
    const handleDown = () => setClicking(true);
    const handleUp = () => setClicking(false);
    const handleOut = () => setVisible(false);
    const handleIn = () => setVisible(true);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleEnter);
    document.addEventListener('mouseout', handleLeave);
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);
    document.addEventListener('mouseenter', handleIn);
    document.addEventListener('mouseleave', handleOut);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleEnter);
      document.removeEventListener('mouseout', handleLeave);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mouseenter', handleIn);
      document.removeEventListener('mouseleave', handleOut);
    };
  }, [visible, cursorX, cursorY, dotX, dotY]);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring — laggy follow */}
      <motion.div
        className={`cursor-ring ${hovering ? 'cursor-hover' : ''} ${clicking ? 'cursor-click' : ''}`}
        style={{ x: cursorX, y: cursorY }}
      />
      {/* Inner dot — tight follow */}
      <motion.div
        className={`cursor-dot ${hovering ? 'dot-hover' : ''}`}
        style={{ x: dotX, y: dotY }}
      />
    </>
  );
}
