import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/surgicals.css';
import MarqueeStrip from '../components/MarqueeStrip';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import ShowcaseBand from '../components/ShowcaseBand';
import About from '../components/About';
import Products from '../components/Products';
import WhyUs from '../components/WhyUs';
import Brands from '../components/Brands';
import AuthorizedDealers from '../components/AuthorizedDealers';
import Licenses from '../components/Licenses';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

import '../styles/surgicals.css';

export default function HomePage() {
  const location = useLocation();
  const scrollToId = useSmoothScroll(68);

  useEffect(() => {
    document.body.classList.add('surgicals-theme');
    document.body.classList.remove('thiyash-theme');
    return () => {
      document.body.classList.remove('surgicals-theme');
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Small timeout to ensure DOM is ready and Reveal animations don't interfere too much
      const timeout = setTimeout(() => {
        scrollToId(null, id);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [location.hash, scrollToId]);

  return (
    <div className="surgicals-theme">
      <Navbar />
      <MarqueeStrip />
      <Hero />
      <StatsBar />
      <ShowcaseBand />
      <About />
      <Products />
      <WhyUs />
      <Brands />
      <AuthorizedDealers />
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
