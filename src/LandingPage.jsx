import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './landing.css';

const psLogo = `${import.meta.env.BASE_URL}perundurai/PS-FULL-LOGO.png`;
const thiyashLogo = `${import.meta.env.BASE_URL}thiyash/thiyash-logo.png`;
const groupLogo = `${import.meta.env.BASE_URL}perunduraigroups.jpeg`;

const businesses = [
  {
    id: 'surgicals',
    logo: psLogo,
    title: 'Perundurai Surgicals',
    subtitle: 'Wholesale Medical & Surgical Supplies',
    path: '/surgicals',
    accent: '#003580',
    tag: 'Medical',
  },
  {
    id: 'enterprise',
    logo: thiyashLogo,
    title: 'Thiyash Enterprise',
    subtitle: 'Manufacturer of Housekeeping Products',
    path: '/enterprise',
    accent: '#dc2626',
    tag: 'Housekeeping',
  },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    document.body.classList.remove('surgicals-theme', 'thiyash-theme');
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (e, biz) => {
    navigate(biz.id === 'enterprise' ? '/enterprise' : '/surgicals');
  };
  return (
    <div className="lp-root">
      {/* Subtle background pattern */}
      <div className="lp-bg-pattern" aria-hidden="true" />

      {/* Watermark Logo Background */}
      <div className="lp-watermark-bg" aria-hidden="true">
        <img
          src={groupLogo}
          alt=""
          draggable="false"
        />
      </div>

      <main className="lp-main">
        {/* Group Logo */}
        <div className="lp-group-logo-wrap" aria-label="Perundurai Groups">
          <img
            src={groupLogo}
            alt="Perundurai Groups"
            className="lp-group-logo"
            draggable="false"
          />
        </div>

        {/* Header */}
        <header className="lp-header">
          <span className="lp-eyebrow">Welcome</span>
          <h1 className="lp-heading">Choose Your Business</h1>
          <p className="lp-subheading">
            Select a business to explore its products and services.
          </p>
        </header>

        {/* Cards */}
        <section className="lp-cards" aria-label="Business selection">
          {businesses.map((biz) => (
            <button
              key={biz.id}
              onClick={(e) => handleCardClick(e, biz)}
              className="lp-card"
              aria-label={`Go to ${biz.title}`}
              style={{ '--accent': biz.accent }}
            >
              <span className="lp-card-tag">{biz.tag}</span>

              <div className={`lp-card-logo-wrap lp-logo-${biz.id}`}>
                <img
                  src={biz.logo}
                  alt={`${biz.title} logo`}
                  className="lp-card-logo"
                  draggable="false"
                />
              </div>

              <div className="lp-card-info">
                <h2 className="lp-card-title">{biz.title}</h2>
                <p className="lp-card-subtitle">{biz.subtitle}</p>
              </div>

              <span className="lp-card-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10h12M11 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          ))}
        </section>

        {/* Footer note */}
        <div className="lp-footer-note">
          <p>© {new Date().getFullYear()} · All Rights Reserved</p>
        </div>
      </main>
    </div>
  );
}
