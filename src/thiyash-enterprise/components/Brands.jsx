import Reveal from '../components/Reveal';
import { assetUrl } from '../utils/assetUrl';

const Brands = () => {
  return (
    <section id="brands" className="section alt">
      <Reveal className="s-head" animation="reveal-up">
        <span className="s-tag">Brands We Carry</span>
        <h2 className="s-title">Authorised <em>Distributor</em> for Leading Brands</h2>
        <p className="s-sub">We stock products from trusted, globally and nationally recognised cleaning brands.</p>
      </Reveal>
      <div className="brands-grid">
        <Reveal className="brand-tile" animation="reveal-scale">
          <div className="brand-logo-wrapper text-logo">Diversey</div>
          <span className="status">Wholesale</span>
        </Reveal>
        <Reveal className="brand-tile" animation="reveal-scale" delay="0.1s">
          <div className="brand-logo-wrapper text-logo">Taski</div>
          <span className="status">Authorised</span>
        </Reveal>
        <Reveal className="brand-tile" animation="reveal-scale" delay="0.2s">
          <div className="brand-logo-wrapper text-logo">3M Commercial</div>
          <span className="status">Authorised</span>
        </Reveal>
        <Reveal className="brand-tile" animation="reveal-scale" delay="0.3s">
          <div className="brand-logo-wrapper text-logo">Kimberly-Clark</div>
          <span className="status">Wholesale</span>
        </Reveal>
        <Reveal className="brand-tile" animation="reveal-scale" delay="0.4s">
          <div className="brand-logo-wrapper text-logo">Eureka Forbes</div>
          <span className="status">Partner</span>
        </Reveal>
      </div>
    </section>
  );
};

export default Brands;
