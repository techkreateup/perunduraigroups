import { useLocation, useNavigate, Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Footer = () => {
  const scrollToId = useSmoothScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const isProductsPage = location.pathname === '/products' || location.pathname === '/surgicals/products';

  const handleLinkClick = (e, id) => {
    if (location.pathname === '/surgicals' || location.pathname === '/surgicals/') {
      if (e) e.preventDefault();
      scrollToId(e, id);
    }
    // Else let <Link> handle navigation to /#id
  };

  const handleProductClick = (e, categoryKey) => {
    if (location.pathname === '/surgicals' || location.pathname === '/surgicals/') {
      e.preventDefault();
      
      window.dispatchEvent(new CustomEvent('selectProductCat', { detail: categoryKey }));
      
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setTimeout(() => {
          scrollToId(null, `cat-${categoryKey}`);
        }, 100);
      } else {
        scrollToId(null, 'products');
      }
    }
    // Else, allow standard navigation to /products with state
  };

  const handleBackToTop = (e) => {
    if (isProductsPage) {
      // On products page, "Back to home" should navigate to /surgicals
      return; 
    }
    
    // Use the majestic smooth scroll animation to go to the top (hero section)
    if (e) e.preventDefault();
    scrollToId(e, 'home-strip');
  };

  return (
    <>
      <Reveal className="footer-wrap" animation="reveal-up" threshold={0.1}>
        <footer>
          <div className="footer-grid">
            <Reveal className="fg-about" animation="reveal-left">
              <Link to="#" className="logo" style={{ display: 'inline-block' }} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <img src={`${import.meta.env.BASE_URL}perundurai/PS-FULL-LOGO.png`} alt="Perundurai Surgicals" className="logo-img" style={{ objectFit: 'contain'}} /> 
              </Link>
              <p>Your trusted wholesale partner for surgical and pharmaceuticals products in Erode District, Tamil Nadu. Licensed, genuine, and reliable since 2016.</p>
              <div className="hero-btns">
                <Link to="/surgicals#products" className="btn-primary" onClick={(e) => handleLinkClick(e, 'products')}>Explore Products</Link>
                <a href="https://wa.me/919865271371" target="_blank" rel="noreferrer" className="btn-secondary">Message on WhatsApp</a>
              </div>
              <div className="foot-social visible">
                <a href="https://wa.me/919865271371" target="_blank" rel="noreferrer" title="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a href="mailto:perunduraisurgicals@gmail.com" title="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
                <a href="tel:+919865271371" title="Call">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                  </svg>
                </a>
              </div>
            </Reveal>
            <Reveal className="fg-col" animation="reveal-up" delay="0.1s">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/surgicals#about" onClick={(e) => handleLinkClick(e, 'about')}>About Us</Link></li>
                <li><Link to="/surgicals#products" onClick={(e) => handleLinkClick(e, 'products')}>Products</Link></li>
                <li><Link to="/surgicals#brands" onClick={(e) => handleLinkClick(e, 'brands')}>Brands</Link></li>
                <li><Link to="/surgicals#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</Link></li>
                <li><Link to="/surgicals#licenses" onClick={(e) => handleLinkClick(e, 'licenses')}>Certifications</Link></li>
                <li><Link to="/surgicals#contact-form" onClick={(e) => handleLinkClick(e, 'contact-form')}>Get Quote</Link></li>
              </ul>
            </Reveal>
            <Reveal className="fg-col" animation="reveal-up" delay="0.2s">
              <h4>Products</h4>
              <ul>
                <li><Link to="/products" state={{ activeCat: 'surgical' }} onClick={(e) => handleProductClick(e, 'surgical')}>Surgical Instruments</Link></li>
                <li><Link to="/products" state={{ activeCat: 'wound' }} onClick={(e) => handleProductClick(e, 'wound')}>Wound Care</Link></li>
                <li><Link to="/products" state={{ activeCat: 'iv' }} onClick={(e) => handleProductClick(e, 'iv')}>IV & Infusion</Link></li>
                <li><Link to="/products" state={{ activeCat: 'diag' }} onClick={(e) => handleProductClick(e, 'diag')}>Diagnostics</Link></li>
                <li><Link to="/products" state={{ activeCat: 'ppe' }} onClick={(e) => handleProductClick(e, 'ppe')}>PPE & Protection</Link></li>
                <li><Link to="/products" state={{ activeCat: 'pharma' }} onClick={(e) => handleProductClick(e, 'pharma')}>Pharmaceutical</Link></li>
              </ul>
            </Reveal>
            <Reveal className="fg-col" animation="reveal-right" delay="0.3s">
              <h4>Contact</h4>
              <div className="foot-ci">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p>88/10, Thendral Nagar, Chenniyavalasu Road, Perundurai – 638 052</p>
              </div>
              <div className="foot-ci">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
                <a href="tel:+919865271371">+91 98652 71371</a>
              </div>
              <div className="foot-ci">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:perunduraisurgicals@gmail.com">perunduraisurgicals@gmail.com</a>
              </div>
            </Reveal>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p className="copyright-text">© 2026 Perundurai Surgicals. All rights reserved. | Proprietor: K. Ragavendran B.E.</p>
              <p className="dev-text">
                Designed & Developed by <a href="https://kreateup.in" target="_blank" rel="noopener noreferrer" className="dev-link">kreateup.in</a>
                <br />Project Led By THARUN KIRUTHIK K S | Designed by LOGESHWARAN P & SUBASH P
              </p>
            </div>
            <Link 
              to={isProductsPage ? "/surgicals" : "#"} 
              onClick={handleBackToTop} 
              className="group inline-flex items-center justify-center gap-1 transition-all duration-300 hover:scale-105" 
              style={{ textDecoration: 'none' }}
            >
              {isProductsPage ? 'Back to home' : 'Back to top'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:animate-bounce">
                {isProductsPage ? <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> : <path d="M17 11l-5-5l-5 5M12 18V6" />}
              </svg>
            </Link>
          </div>
        </footer>
      </Reveal>
      
      <a href="https://wa.me/919865271371?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
        className="wa-float" target="_blank" rel="noreferrer" title="Chat on WhatsApp">
        <svg viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
};

export default Footer;
