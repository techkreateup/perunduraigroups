import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductsPage from './perundurai-surgicals/pages/ProductsPage';
import HomePage from './perundurai-surgicals/pages/HomePage';
import ThiyashPage from './thiyash-enterprise/pages/ThiyashPage';
import ThiyashProductsPage from './thiyash-enterprise/pages/ThiyashProductsPage';
import ScrollToTop from './perundurai-surgicals/components/ScrollToTop';

// Use Vite's BASE_URL so routing works on both localhost and GitHub Pages
const basename = import.meta.env.BASE_URL;

// Dynamically swaps the browser tab favicon based on the current route
function FaviconManager() {
  const location = useLocation();

  useEffect(() => {
    const base = import.meta.env.BASE_URL;
    let href = `${base}perunduraigroups.jpeg`; // default: landing

    if (location.pathname.startsWith('/surgicals') || location.pathname.startsWith('/products')) {
      href = `${base}perundurai/ps-icon-w.png`;
    } else if (location.pathname.startsWith('/enterprise')) {
      href = `${base}thiyash/thiyash-logo-w.png`;
    }

    // Update existing favicon link tag
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = href;
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <FaviconManager />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/surgicals" element={<HomePage />} />
        <Route path="/surgicals/products" element={<ProductsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/enterprise" element={<ThiyashPage />} />
        <Route path="/enterprise/products" element={<ThiyashProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
