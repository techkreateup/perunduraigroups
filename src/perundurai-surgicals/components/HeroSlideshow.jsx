import { useState, useEffect, useRef, useCallback } from 'react';
import { assetUrl } from '../utils/assetUrl';

const SLIDES = [
  { src: 'perundurai/Surgical instruments/Scalpel Blade.jpg', tag: 'SURGICAL', name: 'Scalpel & Blades', desc: 'Carbon steel and stainless steel surgical blades' },
  { src: 'perundurai/Diagnostic Supplies/Pulse Oximeter.jpg', tag: 'DIAGNOSTIC', name: 'Pulse Oximeter', desc: 'OLED display, high accuracy SpO2 sensor' },
  { src: 'perundurai/Diagnostic Supplies/Digital BP Monitor.jpg', tag: 'DIAGNOSTIC', name: 'Digital BP Monitor', desc: 'Fully automatic, one-touch operation' },
  { src: 'perundurai/IV infusion/IV Cannula.jpg', tag: 'IV & INFUSION', name: 'IV Cannula', desc: 'With injection port and wings, all gauges available' },
  { src: 'perundurai/PPE/3-Ply Surgical Mask.jpg', tag: 'PPE', name: '3-Ply Surgical Mask', desc: 'Premium 3-ply, BFE >99% certification' },
  { src: 'perundurai/PPE/Nitrile Examination Gloves.jpg', tag: 'PPE', name: 'Nitrile Gloves', desc: 'Latex-free examination strength, all sizes' },
  { src: 'perundurai/Wound care/Sterile Gauze Pads.jpg', tag: 'WOUND CARE', name: 'Sterile Gauze Pads', desc: 'High absorbency sterile dressing' },
  { src: 'perundurai/Diagnostic Supplies/Digital Thermometer.jpg', tag: 'DIAGNOSTIC', name: 'Digital Thermometer', desc: 'Fast and accurate body temperature measurement' },
  { src: 'perundurai/Diagnostic Supplies/Glucometer.png', tag: 'DIAGNOSTIC', name: 'Glucometer', desc: 'Precise blood glucose monitoring kit' },
  { src: 'perundurai/Diagnostic Supplies/Stethoscope.jpg', tag: 'DIAGNOSTIC', name: 'Stethoscope', desc: 'Littmann Classic type, high acoustic sensitivity' },
  { src: 'perundurai/Surgical instruments/Mayo Scissors.jpg', tag: 'SURGICAL', name: 'Mayo Scissors', desc: 'Straight & curved, tungsten carbide reinforced' },
  { src: 'perundurai/IV infusion/Burette Chamber Set.webp', tag: 'IV & INFUSION', name: 'Burette Chamber Set', desc: '110ml/150ml, micro drip (60 drops/ml)' },
  { src: 'perundurai/Wound care/Crepe Bandage.webp', tag: 'WOUND CARE', name: 'Crepe Bandage', desc: 'Elastic and firm support rolls for injuries' },
  { src: 'perundurai/Pharmaceutical/Amoxicillin-Clavulanate.webp', tag: 'PHARMA', name: 'Antibiotics', desc: 'Augmentin, Azithromycin, and specialty drugs' },
  { src: 'perundurai/IV infusion/Syringe Infusion Pump.webp', tag: 'IV & INFUSION', name: 'Syringe Infusion Pump', desc: 'Controlled precision dosing for critical care' }
].map((slide) => ({ ...slide, src: assetUrl(slide.src) }));

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
