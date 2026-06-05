import { useState, useEffect, useRef, useCallback } from 'react';
import { assetUrl } from '../utils/assetUrl';

const SLIDES = [
  { src: assetUrl('thiyash/cleaning-tools/mop.jpg'), tag: 'CLEANING TOOLS', name: 'Premium Mops', desc: 'Microfiber and cotton wet mops for industrial floors.' },
  { src: assetUrl('thiyash/hygiene-sanitization/sanitizer.jpg'), tag: 'HYGIENE', name: 'Hand Sanitizers', desc: 'Premium hand sanitizers for clinical and household use.' },
  { src: assetUrl('thiyash/cleaning-tools/broom.jpg'), tag: 'CLEANING TOOLS', name: 'Heavy Duty Brooms', desc: 'Durable brooms for industrial and outdoor cleaning.' },
  { src: assetUrl('thiyash/laundry-care/Liquid Detergen.jpeg'), tag: 'LAUNDRY CARE', name: 'Liquid Detergents', desc: 'Professional grade detergents for pristine fabric care.' },
  { src: assetUrl('thiyash/hygiene-sanitization/surface-sanitizer.jpg'), tag: 'SANITIZATION', name: 'Surface Disinfectants', desc: 'Hospital-grade disinfectants for all types of surfaces.' },
  { src: assetUrl('thiyash/cleaning-tools/floor wiper.jpg'), tag: 'CLEANING TOOLS', name: 'Floor Wipers', desc: 'High-quality wipers for quick and efficient floor drying.' },
  { src: assetUrl('thiyash/hygiene-sanitization/facial-tissues.jpg'), tag: 'PAPER PRODUCTS', name: 'Facial Tissues', desc: 'Soft and absorbent tissues for personal hygiene.' },
  { src: assetUrl('thiyash/cleaning-tools/garbagebag.jpg'), tag: 'WASTE MANAGEMENT', name: 'Garbage Bags', desc: 'Strong and leak-proof bags for waste disposal.' },
  { src: assetUrl('thiyash/hygiene-sanitization/room-spray.jpeg'), tag: 'HYGIENE', name: 'Room Fresheners', desc: 'Refreshing scents to maintain a pleasant environment.' },
  { src: assetUrl('thiyash/cleaning-tools/dustpan.webp'), tag: 'CLEANING TOOLS', name: 'Professional Dustpans', desc: 'Sturdy dustpans for efficient dust collection.' },
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  const [transClass, setTransClass] = useState('');
  const [oldSlide, setOldSlide] = useState(null);
  const timerRef = useRef(null);

  const transitioningRef = useRef(false);

  const goTo = useCallback((nextIdx, isReverse = false) => {
    if (transitioningRef.current || nextIdx === current) return;
    
    transitioningRef.current = true;
    setOldSlide(current);

    const type = isReverse ? 'slide-over-reverse' : 'slide-over';
    
    setTransClass(type);
    setCurrent(nextIdx);

    setTimeout(() => {
      setOldSlide(null);
      setTransClass('');
      transitioningRef.current = false;
    }, 900);
  }, [current]);

  // Auto-play standard forward (right-to-left visual slide)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [current, goTo]);

  const currentDesc = SLIDES[current];

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      goTo((current + 1) % SLIDES.length, false);
    } else if (distance < -minSwipeDistance) {
      goTo((current - 1 + SLIDES.length) % SLIDES.length, true);
    }
  };

  const onMouseDown = (e) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e) => {
    if (touchStart !== null) {
      setTouchEnd(e.clientX);
    }
  };

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setTouchStart(null);
      return;
    }
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      goTo((current + 1) % SLIDES.length, false);
    } else if (distance < -minSwipeDistance) {
      goTo((current - 1 + SLIDES.length) % SLIDES.length, true);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const onMouseLeave = () => {
    if (touchStart !== null) {
      setTouchStart(null);
      setTouchEnd(null);
    }
  };

  return (
    <div 
      className="hero-slideshow" 
      id="heroSlideshow"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      style={{ touchAction: 'pan-y' }}
    >
      <div className="hs-track" id="hsTrack">
        {SLIDES.map((s, i) => {
          const isActive = i === current;
          const isOld = i === oldSlide;
          if (!isActive && !isOld) return null;
          
          let classes = 'hs-slide';
          if (isActive && !oldSlide) classes += ' active';
          if (isActive && oldSlide !== null) classes += ` enter-${transClass} active`;
          if (isOld) classes += ` exit-${transClass}`;

          return (
            <div key={i} className={classes} style={{ opacity: isActive || isOld ? 1 : 0 }}>
              <div className="hs-bg" style={{ backgroundImage: `url('${s.src}')` }}></div>
              <div className="hs-overlay"></div>
              <div className="hs-content">
                <div className="hs-bottom-row">
                  <a href="#contact" className="hs-enquire">Enquire Now →</a>
                  <h3 className="hs-name">{s.name}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="hs-arrow hs-prev" aria-label="Previous" onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length, true)}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="hs-arrow hs-next" aria-label="Next" onClick={() => goTo((current + 1) % SLIDES.length, false)}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="hs-dots" id="hsDots">
        {SLIDES.map((_, i) => (
          <button key={i} aria-label={`Slide ${i + 1}`} className={`hs-dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i, i < current)}></button>
        ))}
      </div>

      <div className="hs-cat-badge" id="hsCatBadge" key={`badge-${current}`}>{currentDesc.tag}</div>

      <div className="hs-thumbs">
        {SLIDES.map((s, i) => {
          const diff = Math.abs(i - current);
          const show = diff <= 1 || (i === 0 && current === SLIDES.length - 1) || (i === SLIDES.length - 1 && current === 0);
          return (
            <div key={i} className={`hs-thumb ${i === current ? 'active' : ''}`} style={{ display: show ? 'block' : 'none' }} onClick={() => goTo(i)}>
              <img src={s.src} alt={s.name} loading="lazy" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSlideshow;
