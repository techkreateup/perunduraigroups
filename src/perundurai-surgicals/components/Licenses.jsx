import Reveal from '../components/Reveal';

const Licenses = () => {
  return (
    <section id="licenses" className="section" style={{ paddingTop: '30px' }}>
      <Reveal className="s-head center" animation="reveal-up">
        <span className="s-tag">Certifications</span>
        <h2 className="s-title">Licensed & <em>Fully Compliant</em></h2>
        <p className="s-sub" style={{ margin: '0 auto' }}>All operations are registered and compliant with Indian pharmaceutical regulations.</p>
      </Reveal>
      <Reveal className="section-visual" animation="reveal-up" delay="0.05s">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=85&auto=format&fit=crop"
          alt="Official documents and compliance certification records"
          loading="lazy"
        />
      </Reveal>
      <div className="lic-grid">
        <Reveal className="lic-card" animation="reveal-scale">
          <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="18" rx="2" /><line x1="8" y1="8" x2="16" y2="8" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="8" y1="16" x2="12" y2="16" /></svg>
          <h4>Drug License (Retail)</h4>
          <p>TN-XX-XXXXXX</p>
        </Reveal>
        <Reveal className="lic-card" animation="reveal-scale" delay="0.1s">
          <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
          <h4>Drug License (Wholesale)</h4>
          <p>TN-XX-XXXXXX</p>
        </Reveal>
        <Reveal className="lic-card" animation="reveal-scale" delay="0.2s">
          <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          <h4>GST Registration</h4>
          <p>33XXXXXXXXXXXZD</p>
        </Reveal>
        <Reveal className="lic-card" animation="reveal-scale" delay="0.3s">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>
          <h4>MSME Registration</h4>
          <p>UDYAM-TN-XX-XXXXXXX</p>
        </Reveal>
      </div>
    </section>
  );
};

export default Licenses;
