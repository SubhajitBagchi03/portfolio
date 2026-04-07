import './Marquee.css';

export default function Marquee() {
  const items = [
    'developer', 'ai enthusiast', 'full-stack',
    'problem solver', 'builder', 'developer',
    'ai enthusiast', 'full-stack'
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-wrapper">
      <div className="grid-line" />
      <div className="marquee-track">
        <div className="marquee-content">
          {repeated.map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-dot">●</span>
            </span>
          ))}
        </div>
      </div>
      <div className="grid-line" />
    </div>
  );
}
