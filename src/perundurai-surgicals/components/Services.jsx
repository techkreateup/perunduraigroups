import Reveal from '../components/Reveal';

const Services = () => {
  return (
    <section id="services" className="section alt" style={{ paddingTop: '30px' }}>
      <Reveal className="s-head" animation="reveal-up">
        <span className="s-tag">Our Services</span>
        <h2 className="s-title">Beyond Supply — <em>We Support</em><br />Your Operations</h2>
        <p className="s-sub">Comprehensive services designed for healthcare facilities of every size.</p>
      </Reveal>
      <Reveal className="section-visual" animation="reveal-up" delay="0.05s">
        <img
          src="https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=1400&q=85&auto=format&fit=crop"
          alt="Healthcare logistics and medical supply operations"
          loading="lazy"
        />
      </Reveal>
      <div className="svc-grid">
        <Reveal className="svc-card" animation="reveal-up">
          <div className="svc-icon"><svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /></svg></div>
          <div className="svc-content">
            <h3>Wholesale Supply</h3>
            <p>Bulk orders with competitive pricing for hospitals, clinics, nursing homes, and pharmacies across Tamil Nadu.</p>
          </div>
        </Reveal>
        <Reveal className="svc-card" animation="reveal-up" delay="0.1s">
          <div className="svc-icon"><svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg></div>
          <div className="svc-content">
            <h3>Prompt Delivery</h3>
            <p>Fast and reliable dispatch for urgent medical requirements. Same-day delivery available for local orders.</p>
          </div>
        </Reveal>
        <Reveal className="svc-card" animation="reveal-up" delay="0.2s">
          <div className="svc-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg></div>
          <div className="svc-content">
            <h3>Product Consultation</h3>
            <p>Expert guidance on selecting the right surgical and pharmaceutical products for your specific clinical needs.</p>
          </div>
        </Reveal>
        <Reveal className="svc-card" animation="reveal-up" delay="0.3s">
          <div className="svc-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></div>
          <div className="svc-content">
            <h3>Custom Procurement</h3>
            <p>Source rare or specialised items on request. We work with our extensive brand network to fulfil unique items.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
