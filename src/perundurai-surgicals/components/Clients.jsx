import React from 'react';
import Reveal from './Reveal';
import '../styles/Clients.css';

const clients = [
  "Adhithi Hospital", 
  "Indian Medicals (Baby Hospital)", 
  "Sivakumar Hospital", 
  "GSK Hospital", 
  "Krishna Hospital", 
  "Kurunji Medicals (Dr. Nandhagopal)", 
  "VP Medical Centre", 
  "Archana Dental Care", 
  "Sun Shine Clinic", 
  "Thivya Hospital", 
  "Tharani Hospital", 
  "Shanmuga Hospital", 
  "Sri Jothi Lab", 
  "Medhura Hospital", 
  "HRS Medical Centre", 
  "Nesi Dental Clinic", 
  "Dr. K T Arumugam", 
  "Dr. Reshma's Dental Clinic", 
  "Dr. Gowthaman (Govt. Veterinary)", 
  "Sri Nandha Educational Trust", 
  "Kongu Naturopathy Yoga Medical College", 
  "Care 24 Hospital", 
  "Keerthi Medical Centre", 
  "Dr. Viswanathan Nursing Home"
];

// Split the array into two rows
const half = Math.ceil(clients.length / 2);
const row1Clients = clients.slice(0, half);
const row2Clients = clients.slice(half);

// Duplicate the arrays for a seamless infinite loop
const infiniteRow1 = [...row1Clients, ...row1Clients];
const infiniteRow2 = [...row2Clients, ...row2Clients];

const Clients = () => {
  return (
    <section id="clients" className="ps-clients-section">
      <div className="ps-clients-container">
        <Reveal animation="reveal-up">
          <div className="ps-clients-header">
            <span className="ps-clients-label">Trusted by Healthcare Professionals</span>
            <h2 className="ps-clients-title">Our Valued Clients</h2>
          </div>
        </Reveal>

        <div className="ps-clients-marquee-wrapper">
          {/* Row 1: Scrolls Left */}
          <div className="ps-clients-marquee-track track-1">
            {infiniteRow1.map((client, index) => (
              <div className="ps-client-card" key={`r1-${index}`}>
                <div className="ps-client-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6v-2z"/>
                  </svg>
                </div>
                <div className="ps-client-name">{client}</div>
              </div>
            ))}
          </div>

          {/* Row 2: Scrolls Right */}
          <div className="ps-clients-marquee-track track-2">
            {infiniteRow2.map((client, index) => (
              <div className="ps-client-card" key={`r2-${index}`}>
                <div className="ps-client-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6v-2z"/>
                  </svg>
                </div>
                <div className="ps-client-name">{client}</div>
              </div>
            ))}
          </div>
        </div>

        <Reveal animation="reveal-up" delay="0.2s">
          <div className="ps-clients-footer">
            Proudly serving 300+ healthcare institutions across the region
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Clients;
