import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import '../styles/thiyash.css';

// Import components
import Navbar from '../components/Navbar';
import MarqueeStrip from '../components/MarqueeStrip';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import ShowcaseBand from '../components/ShowcaseBand';
import About from '../components/About';
import Products from '../components/Products';
import WhyUs from '../components/WhyUs';
import Brands from '../components/Brands';
import Licenses from '../components/Licenses';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

export default function ThiyashPage() {
  const location = useLocation();
  const scrollToId = useSmoothScroll(68);

  useEffect(() => {
    document.body.classList.add('thiyash-theme');
    document.body.classList.remove('surgicals-theme');
    return () => {
      document.body.classList.remove('thiyash-theme');
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timeout = setTimeout(() => {
        scrollToId(null, id);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [location.hash, scrollToId]);

  return (
    <div className="thiyash-theme">
      <Navbar />
      <MarqueeStrip />
      <Hero />
      <StatsBar />
      <ShowcaseBand />
      <About />
      <Products />
      <WhyUs />
      <Brands />
      <Licenses />
      <Clients />
      <Services />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}
