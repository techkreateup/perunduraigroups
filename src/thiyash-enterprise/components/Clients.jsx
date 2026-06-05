import React, { useEffect, useRef } from 'react';
import '../styles/Clients.css';

const clients = [
  {
    name: "Govt Hospitals IRT College (Perundurai)",
    type: "HEALTHCARE / INSTITUTION",
    icon: "H"
  },
  {
    name: "IRT Nursing College",
    type: "EDUCATION / HEALTHCARE",
    icon: "I"
  },
  {
    name: "The Black Medical Officer (Chennimalai)",
    type: "GOVERNMENT / HEALTH",
    icon: "M"
  },
  {
    name: "Erode Periyar Government Hospitals",
    type: "HEALTHCARE NETWORK",
    icon: "G"
  },
  {
    name: "Sports Development Authority of Tamil Nadu (Erode DT)",
    type: "GOVERNMENT / SPORTS",
    icon: "S"
  },
  {
    name: "Kongu Engineering / Polytechnic College",
    type: "EDUCATIONAL INSTITUTION",
    icon: "K"
  }
];

const Clients = () => {
  const cardRefs = useRef([]);

  // Mouse glow effect tracker
  useEffect(() => {
    const handlers = cardRefs.current.map((card) => {
      if (!card) return null;
      const handler = (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        const glow = card.querySelector('.th-card-glow');
        if (glow) {
          glow.style.setProperty('--x', `${x}%`);
          glow.style.setProperty('--y', `${y}%`);
        }
      };
      card.addEventListener('mousemove', handler);
      return { card, handler };
    });

    return () => {
      handlers.forEach((item) => {
        if (item) item.card.removeEventListener('mousemove', item.handler);
      });
    };
  }, []);

  return (
    <section id="clients" className="th-clients-section">
      <div className="th-clients-container">

        {/* Header */}
        <div className="th-clients-header">
          <span className="th-clients-label">Institutional Partnerships</span>
          <h2 className="th-clients-title">
            Our Prestigious <span>Clients</span>
          </h2>
          <p className="th-clients-subtitle">
            Trusted by the most respected government and educational institutions across the region.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="th-clients-grid">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`th-client-premium-card delay-${index + 1}`}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              {/* ✅ th-card-inner was MISSING in old JSX — this is the traitor */}
              <div className="th-card-inner">

                {/* ✅ th-card-glow was MISSING — hover glow effect broken */}
                <div className="th-card-glow"></div>

                <div className="th-card-front">
                  <div className="th-client-badge">{client.icon}</div>
                  <div className="th-client-info">
                    <h3 className="th-client-display-name">{client.name}</h3>
                    <span className="th-client-type">{client.type}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="th-clients-footer-v2">
          <div className="th-footer-stat">
            <strong>500+</strong>
            <span>PROJECTS COMPLETED</span>
          </div>
          <div className="th-footer-divider"></div>
          <div className="th-footer-stat">
            <strong>100%</strong>
            <span>SERVICE SATISFACTION</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;
