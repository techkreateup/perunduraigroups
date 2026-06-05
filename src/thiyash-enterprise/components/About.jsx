import Reveal from '../components/Reveal';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { assetUrl } from '../utils/assetUrl';

const About = () => {
  const scrollToId = useSmoothScroll();
  return (
    <section id="about" className="section alt">
      <div className="about-grid">
        <div className="mobile-about-title">
          <Reveal animation="reveal-up">
            <span className="s-tag">About Us</span>
            <h2 className="s-title">Rooted in <em>Perundurai,</em><br />Serving Tamil Nadu</h2>
          </Reveal>
        </div>

        <Reveal className="about-visual" animation="reveal-left">
          <div className="about-img" style={{ background: 'none', padding: 0 }}>
            <img src={assetUrl('/proprietor-img.jpeg')}
              alt="Proprietor"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} loading="lazy" />
            <div className="about-chip">
              <strong>2016</strong>
              <span>Est. Since</span>
            </div>
          </div>
        </Reveal>

        <Reveal animation="reveal-right">
          <div className="desktop-about-title">
            <span className="s-tag">About Us</span>
            <h2 className="s-title">Rooted in <em>Perundurai,</em><br />Serving Tamil Nadu</h2>
          </div>
          <p className="s-sub">Thiyash Enterprise is a premier manufacturer and wholesale distributor of professional-grade housekeeping products, proudly based in Perundurai, Erode District, Tamil Nadu. We specialize in producing high-quality cleaning consumables, housekeeping equipment, and facility management supplies tailored for corporate offices, hospitals, educational institutions, and industrial sectors across the region. With a commitment to hygiene excellence and sustainable cleaning solutions, we ensure that every product meets rigorous quality standards. At Thiyash Enterprise, we combine manufacturing expertise with efficient logistics to deliver reliable facility maintenance solutions at the right time, making us the trusted backbone of the regional cleaning and sanitation supply chain.</p>
          <ul className="about-facts">
            <Reveal as="li" className="about-fact" animation="reveal-up" threshold={0.1}>
              <div className="fact-icon">
                <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
              <div className="fact-text">
                <strong>Proprietor</strong>
                <p><span className="fact-value"><span className="proprietor-name">K. Ragavendran</span> B.E.</span> — Over 10 years of industry expertise.</p>
              </div>
            </Reveal>
            <Reveal as="li" className="about-fact" animation="reveal-up" delay="0.1s" threshold={0.1}>
              <div className="fact-icon">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div className="fact-text">
                <strong>Strategic Location</strong>
                <p>Based in Perundurai, the heart of Erode's facility management hub.</p>
              </div>
            </Reveal>
            <Reveal as="li" className="about-fact" animation="reveal-up" delay="0.2s" threshold={0.1}>
              <div className="fact-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <div className="fact-text">
                <strong>Swift Operations</strong>
                <p>Mon–Sat: 9:00 AM – 7:00 PM. Local same-day dispatch.</p>
              </div>
            </Reveal>
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
