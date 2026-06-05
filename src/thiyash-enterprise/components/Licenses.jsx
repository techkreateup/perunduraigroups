import Reveal from '../components/Reveal';

const Licenses = () => {
  return (
    <section id="licenses" className="section" style={{ paddingTop: '30px', paddingBottom: '15px' }}>
      <Reveal className="s-head center" animation="reveal-up">
        <span className="s-tag">Certifications</span>
        <h2 className="s-title">Licensed & <em>Fully Compliant</em></h2>
        <p className="s-sub" style={{ margin: '0 auto' }}>All operations are registered and compliant with Indian commercial regulations.</p>
      </Reveal>
      <Reveal className="section-visual" animation="reveal-up" delay="0.05s">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=85&auto=format&fit=crop"
          alt="Official business compliance and documentation"
          loading="lazy"
        />
      </Reveal>
      <div className="lic-grid">
        <Reveal className="lic-card" animation="reveal-scale">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <h4>GST Registration</h4>
          <p>33XXXXXXXXXXXXZD</p>
        </Reveal>
        <Reveal className="lic-card" animation="reveal-scale" delay="0.1s">
          <div className="lic-img-wrap">
            <img 
              src={`${import.meta.env.BASE_URL}thiyash/brands/make-in-india.png`} 
              alt="Make in India" 
              className="lic-img" 
            />
          </div>
          <h4>Make in India</h4>
          <p>Indian Manufactured Product</p>
        </Reveal>
        <Reveal className="lic-card" animation="reveal-scale" delay="0.2s">
          <div className="lic-img-wrap">
            <img 
              src={`${import.meta.env.BASE_URL}thiyash/brands/vocal-for-local.png`} 
              alt="Vocal for Local" 
              className="lic-img" 
            />
          </div>
          <h4>Vocal for Local</h4>
          <p>Supporting Local Businesses</p>
        </Reveal>
      </div>
    </section>
  );
};

export default Licenses;
