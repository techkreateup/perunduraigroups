import HeroSlideshow from './HeroSlideshow';
import Reveal from '../components/Reveal';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const scrollToId = useSmoothScroll();
  const heroRef = useRef(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return undefined;

    const setMousePosition = (clientX, clientY) => {
      const rect = heroEl.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      heroEl.style.setProperty('--mouse-x', `${x}px`);
      heroEl.style.setProperty('--mouse-y', `${y}px`);
    };

    const onMouseEnter = (event) => {
      if (window.innerWidth > 768) setMousePosition(event.clientX, event.clientY);
    };
    const onMouseMove = (event) => {
      if (window.innerWidth > 768) setMousePosition(event.clientX, event.clientY);
    };
    const onMouseLeave = () => {
      if (window.innerWidth > 768) {
        heroEl.style.setProperty('--mouse-x', '-999px');
        heroEl.style.setProperty('--mouse-y', '-999px');
      }
    };

    heroEl.addEventListener('mouseenter', onMouseEnter);
    heroEl.addEventListener('mousemove', onMouseMove);
    heroEl.addEventListener('mouseleave', onMouseLeave);

    return () => {
      heroEl.removeEventListener('mouseenter', onMouseEnter);
      heroEl.removeEventListener('mousemove', onMouseMove);
      heroEl.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="#ffffff">
          <path d="M0,50 C480,100 960,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
      <div className="hero-inner">
        <Reveal className="hero-col-left" animation="reveal-up">
          <div className="hero-badge visible">Verified Wholesale Supply</div>
          <h1 className="hero-title-line visible" style={{ transitionDelay: '0.1s'}}>Your Trusted Partner</h1>
          <h1 className="hero-title-line visible" style={{ marginTop: '-15px', transitionDelay: '0.2s' }}><span style={{color: '#E5E7EB'}}>for</span> <em style={{ color: '#F59E0B' }}>Surgical & Pharma</em></h1>
          <p className="hero-sub visible" style={{ transitionDelay: '0.3s', color: '#D1D5DB', fontSize: '20px'}}>
            Perundurai Surgicals supplies government hospitals, private hospitals, clinics, and retail pharmacies across Erode, Tirupur, Salem, Coimbatore, and Namakkal districts with 1000+ genuine, licensed medical products at the most competitive wholesale prices.
          </p>

          <div className="hero-value-props">
            <div className="hero-vp-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              Drug Licensed
            </div>
            <div className="hero-vp-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              GST Compliant
            </div>
            <div className="hero-vp-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              Genuine Stock Only
            </div>
          </div>

          <div className="hero-btns">
            <a href="#products" className="btn-primary" onClick={(e) => scrollToId(e, 'products')}>Explore Products</a>
            <a href="https://wa.me/919865271371" target="_blank" rel="noreferrer" className="btn-secondary">Message on WhatsApp</a>
          </div>
        </Reveal>

        <div className="hero-col-right">
          <HeroSlideshow />
        </div>
      </div>
    </section>
  );
};

export default Hero;
