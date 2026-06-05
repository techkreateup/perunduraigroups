import { useEffect, useRef, useState } from 'react';
import Reveal from '../components/Reveal';

const CounterTrigger = ({ onReveal }) => {
  const ref = useRef(null);
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const threshold = isMobile ? 0.2 : 0.5;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onReveal();
        observer.disconnect();
      }
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onReveal]);
  return <div ref={ref} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px' }} />;
};

const StatsBar = () => {
  const [counts, setCounts] = useState({ products: 0, brands: 0, years: 0, clients: 0 });
  const [hasStarted, setHasStarted] = useState(false);

  const handleReveal = () => {
    if (!hasStarted) {
      setHasStarted(true);
      const targets = { products: 1000, brands: 30, years: 10, clients: 500 };
      Object.keys(targets).forEach((key) => {
        let current = 0;
        const target = targets[key];
        const step = target / 50;
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            setCounts(prev => ({ ...prev, [key]: target }));
            clearInterval(interval);
          } else {
            setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
          }
        }, 30);
      });
    }
  };

  return (
    <Reveal className="stats-bar" animation="reveal-up" threshold={0.5}>
      <CounterTrigger onReveal={handleReveal} />
      <div className="stat-item">
        <div className="stat-num">{counts.products}<span>+</span></div>
        <div className="stat-lbl">Products Stocked</div>
      </div>
      <div className="stat-item">
        <div className="stat-num">{counts.brands}<span>+</span></div>
        <div className="stat-lbl">Trusted Brands</div>
      </div>
      <div className="stat-item">
        <div className="stat-num">{counts.years}<span>+</span></div>
        <div className="stat-lbl">Years Experience</div>
      </div>
      <div className="stat-item">
        <div className="stat-num">{counts.clients}<span>+</span></div>
        <div className="stat-lbl">Clients Served</div>
      </div>
    </Reveal>
  );
};

export default StatsBar;
