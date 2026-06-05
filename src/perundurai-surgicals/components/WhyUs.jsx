import Reveal from '../components/Reveal';

const WhyUs = () => {
  return (
    <section id="why-us" style={{ padding: '100px 5%', background: 'linear-gradient(135deg, var(--navy-light) 0%, var(--navy) 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-100px', right: '-50px', width: '400px', height: '400px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.03)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-150px', left: '-100px', width: '500px', height: '500px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.03)', zIndex: 0 }}></div>
      
      <Reveal className="s-head center" style={{ position: 'relative', zIndex: 1 }}>
        <span className="s-tag" style={{ color: '#B5D4F4' }}>Why Choose Us</span>
        <h2 className="s-title" style={{ color: '#fff' }}>The Perundurai Surgicals <em style={{ color: '#B5D4F4' }}>Advantage</em></h2>
        <p className="s-sub" style={{ color: 'rgba(255,255,255,0.5)', margin: '0 auto' }}>Beyond being just a supplier — we are your long-term healthcare partner.</p>
      </Reveal>
      <Reveal className="section-visual dark" animation="reveal-up" delay="0.05s" style={{ position: 'relative', zIndex: 1 }}>
        <img
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=85"
          alt="Hospital care team and trusted healthcare partnership"
          loading="lazy"
        />
      </Reveal>
      <div className="why-grid">
        <Reveal className="why-card">
          <div className="why-icon"><svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg></div>
          <h3>Fast & Reliable Delivery</h3>
          <p>Same-day delivery within Perundurai. Next-day across Erode district. We understand urgency in healthcare — speed is non-negotiable.</p>
        </Reveal>
        <Reveal className="why-card" delay="0.1s">
          <div className="why-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg></div>
          <h3>Competitive Wholesale Pricing</h3>
          <p>Bulk pricing advantages passed directly to you. Special rates for hospitals, nursing homes, and regular institutional buyers.</p>
        </Reveal>
        <Reveal className="why-card" delay="0.2s">
          <div className="why-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
          <h3>100% Genuine Products</h3>
          <p>All products sourced directly from authorized manufacturers and C&F agents. Drug-licensed and fully traceable supply chain.</p>
        </Reveal>
        <Reveal className="why-card" delay="0.3s">
          <div className="why-icon"><svg viewBox="0 0 24 24"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" /></svg></div>
          <h3>Cold Chain Facility</h3>
          <p>Temperature-controlled storage and transport for vaccines, biologicals, and insulin — maintained end-to-end.</p>
        </Reveal>
        <Reveal className="why-card" delay="0.4s">
          <div className="why-icon"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg></div>
          <h3>Responsive Support</h3>
          <p>Reach us on WhatsApp or phone, 6 days a week. Quick order processing and a team that genuinely cares.</p>
        </Reveal>
        <Reveal className="why-card" delay="0.5s">
          <div className="why-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg></div>
          <h3>GST-Compliant Billing</h3>
          <p>Proper GST invoices for every order. Credit facility available for trusted institutional buyers with flexible payment terms.</p>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyUs;
