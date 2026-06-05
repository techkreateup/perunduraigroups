import Reveal from '../components/Reveal';

const WhyUs = () => {
  return (
    <section id="why-us" className="th-why-us">
      <div className="th-container">
        <Reveal className="th-why-header" animation="reveal-up">
          <div className="th-why-title-wrap">
            <span className="th-section-tag">The Thiyash Advantage</span>
            <h2 className="th-section-title">Why Industry Leaders <em>Trust Us</em></h2>
          </div>
          <div className="th-why-desc-wrap">
            <p className="th-section-sub">We deliver more than just supplies; we deliver reliability and operational excellence.</p>
          </div>
        </Reveal>

        <Reveal className="th-why-main-visual" animation="reveal-up" delay="0.1s">
          <img
            src="https://images.unsplash.com/photo-1705658372376-8a8b14f4de13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFdoeSUyMEluZHVzdHJ5JTIwTGVhZGVycyUyMFRydXN0JTIwVXN8ZW58MHwwfDB8fHww"
            alt="Professional housekeeping management"
            loading="lazy"
            style={{ objectPosition: 'center 75%' }}
          />
          <div className="th-why-visual-label">Professional housekeeping management</div>
        </Reveal>

        <div className="th-why-grid">
          <Reveal className="th-why-card" delay="0.2s">
            <div className="th-why-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
            </div>
            <h3>Express Logistics</h3>
            <p>Optimized supply chain for same-day delivery in Perundurai and swift distribution across Tamil Nadu.</p>
          </Reveal>

          <Reveal className="th-why-card" delay="0.3s">
            <div className="th-why-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
            </div>
            <h3>Wholesale Economics</h3>
            <p>Direct-to-enterprise pricing models that significantly reduce facility management overheads.</p>
          </Reveal>

          <Reveal className="th-why-card" delay="0.4s">
            <div className="th-why-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h3>Certified Quality</h3>
            <p>100% genuine industrial-grade products sourced from authorized national manufacturers.</p>
          </Reveal>

          <Reveal className="th-why-card" delay="0.5s">
            <div className="th-why-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            </div>
            <h3>Responsive Support</h3>
            <p>Personalized assistance for facility managers. Quick order processing via WhatsApp and phone.</p>
          </Reveal>

          <Reveal className="th-why-card" delay="0.6s">
            <div className="th-why-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <h3>GST Compliant Billing</h3>
            <p>Professional tax invoicing for all orders. Transparent pricing with no hidden costs for institutional buyers.</p>
          </Reveal>

          <Reveal className="th-why-card" delay="0.7s">
            <div className="th-why-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <h3>Custom Procurement</h3>
            <p>Need something specific? We leverage our network to source specialized cleaning tools and chemicals.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
