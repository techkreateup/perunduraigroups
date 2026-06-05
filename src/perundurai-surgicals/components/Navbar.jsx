import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { assetUrl } from '../utils/assetUrl';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home-strip');
  const [scrolled, setScrolled] = useState(false);
  const scrollToId = useSmoothScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const isManualScrolling = useRef(false);
  const manualScrollTimer = useRef(null);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  // Wrapper for navbar to also close mobile menu
  const handleNavClick = (e, id) => {
    closeNav();
    
    if (location.pathname.includes('/surgicals') || location.pathname.includes('/enterprise')) {
      // Set active state IMMEDIATELY for instant UI feedback
      setActiveSection(id);
      isManualScrolling.current = true;

      if (e) e.preventDefault();
      scrollToId(null, id);
      
      // Clear existing timer if any
      if (manualScrollTimer.current) clearTimeout(manualScrollTimer.current);
      
      // Unlock after scroll finishes
      manualScrollTimer.current = setTimeout(() => {
        isManualScrolling.current = false;
      }, 2500); 
    }
  };

  const getBasePath = () => {
    if (location.pathname.startsWith('/enterprise')) return '/enterprise';
    if (location.pathname.startsWith('/surgicals')) return '/surgicals';
    return '/surgicals';
  };
  const basePath = getBasePath();

  useEffect(() => {
    if (location.pathname !== '/surgicals' && location.pathname !== '/enterprise') {
      setActiveSection(''); // No active section line on sub-pages
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      // Skip scroll detection if we are mid-manual-scroll from a click
      if (isManualScrolling.current) return;

      const sectionIds = ['home-strip', 'about', 'products', 'clients', 'services', 'contact'];
      let current = 'home-strip';

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          if (scrollY >= section.offsetTop - 120) {
            current = id;
          }
        }
      }

      // Near the bottom of the page, keep the last actual section active.
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 80) {
        const lastSection = sectionIds.slice().reverse().find((id) => document.getElementById(id));
        if (lastSection) current = lastSection;
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle local scrolled state even on sub-pages
  useEffect(() => {
    const handleScrollSimple = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScrollSimple);
    return () => window.removeEventListener('scroll', handleScrollSimple);
  }, []);

  return (
    <nav id="topnav" className={scrolled ? 'scrolled' : ''}>
      <Link to={`${basePath}#home-strip`} className="logo" onClick={(e) => handleNavClick(e, 'home-strip')}>
        <img src={assetUrl('perundurai/PS-FULL-LOGO.png')} alt="Perundurai Surgicals" className="logo-img" />
      </Link>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
        <li><Link to={`${basePath}#home-strip`} className={activeSection === 'home-strip' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'home-strip')}>Home</Link></li>
        <li><Link to={`${basePath}#about`} className={activeSection === 'about' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'about')}>About Us</Link></li>
        <li><Link to={`${basePath}#products`} className={activeSection === 'products' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'products')}>Products</Link></li>
        <li><Link to={`${basePath}#clients`} className={activeSection === 'clients' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'clients')}>Clients</Link></li>
        <li><Link to={`${basePath}#services`} className={activeSection === 'services' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'services')}>Services</Link></li>
      </ul>
      <div className="nav-right">
        <a href="tel:+919865271371" className="nav-contact-btn hidden md:flex">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Contact
        </a>
        <Link to={`${basePath}#contact-form`} className="nav-cta" onClick={(e) => handleNavClick(e, 'contact-form')}>Get Quote</Link>
        <button className="hamburger" id="hamburger" onClick={toggleNav}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
