import React from 'react';
import Reveal from './Reveal';

const dealers = [
  { name: 'Sree Sastha Medical Agencies', location: 'Erode' },
  { name: 'Sre Sivam Pharma', location: 'Tiruppur' },
  { name: 'Pharma Traders', location: 'Salem' },
  { name: 'Jananae Pharma', location: 'Coimbatore' },
  { name: 'Rajavel Medical Agencies', location: 'Karur' },
  { name: 'Sagar Medical Agencies', location: 'Namakkal' },
  { name: 'R V Surgicals', location: 'Erode' },
  { name: 'Sri Thangam Pharma', location: 'Tiruppur' },
  { name: 'Supreme Pharma', location: 'Salem' },
];

const AuthorizedDealers = () => {
  const getInitials = (name) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + (parts[1][0] === 'S' && parts[1].toLowerCase() === 'surgicals' ? '' : parts[1][0])).toUpperCase();
    }
    return name.charAt(0).toUpperCase();
  };

  return (
    <section id="dealers" className="dealers-section">
      <div className="container">
        <Reveal className="s-head center">
          <span className="s-tag">Our Network</span>
          <h2 className="s-title" style={{ color: '#fff' }}>Authorized <em style={{ color: '#D4AF37' }}>Dealers</em></h2>
          <p className="s-sub" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto' }}>
            Connecting quality healthcare supplies to every corner through our trusted official partners.
          </p>
        </Reveal>

        <div className="dealers-grid">
          {dealers.map((dealer, index) => (
            <Reveal key={index} className="dealer-card" delay={`${index * 0.1}s`}>
              <div className="dealer-badge">OFFICIAL STOCKIST</div>
              
              <div className="dealer-monogram-wrap">
                <div className="dealer-monogram">
                  {getInitials(dealer.name)}
                </div>
              </div>

              <div className="dealer-info">
                <h3>{dealer.name}</h3>
                <div className="dealer-location">
                  <svg className="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{dealer.location}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorizedDealers;
