import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { categories, productsByCat } from '../data/productsData';
import { assetUrl } from '../utils/assetUrl';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import ProductSearch from '../components/ProductSearch';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

import '../styles/surgicals.css';

export default function ProductsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToId = useSmoothScroll(80);
  const [activeCat, setActiveCat] = useState(location.state?.activeCat || 'surgical');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.body.classList.add('surgicals-theme');
    document.body.classList.remove('thiyash-theme');
    return () => {
      document.body.classList.remove('surgicals-theme');
    };
  }, []);

  useEffect(() => {
    if (location.state?.activeCat) {
      setActiveCat(location.state.activeCat);
    }
    const timer = setTimeout(() => {
      const isMobile = window.innerWidth <= 768;
      const targetId = isMobile ? 'pp-main' : 'pp-layout';
      scrollToId(null, targetId);
    }, 100);
    return () => clearTimeout(timer);
  }, [location.state, location.key, scrollToId]);

  const currentCat = categories.find((c) => c.id === activeCat);
  
  const allProducts = Object.entries(productsByCat).flatMap(([catId, items]) => {
    const catLabel = categories.find(c => c.id === catId)?.title || catId;
    return items.map(item => ({ ...item, category: catLabel, catId }));
  });

  const rawProducts = (productsByCat[activeCat] || []).map(p => ({
    ...p,
    category: currentCat?.title || activeCat
  }));
  
  const products = searchQuery.trim()
    ? allProducts.filter(p => 
        p.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
    : rawProducts;

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="surgicals-theme">
      <Navbar />

      {/* ─── Page Hero ─── */}
      <div className="pp-hero">
        <div className="pp-hero-bg" style={{ backgroundImage: `url(${currentCat?.banner || ''})` }} />
        <div className="pp-hero-overlay" />
        <div className="pp-hero-content">
          <h1 className="pp-hero-title">Comprehensive <em>Medical Supply</em> Range</h1>
          <p className="pp-hero-sub">
            Browse by category and enquire instantly via WhatsApp.
          </p>
        </div>
        {/* Back button */}
        <button
          className="pp-back-btn"
          onClick={() => navigate('/surgicals#products')}
          aria-label="Go back to home"
          id="pp-back-btn"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>
      </div>

      {/* ─── Main Layout ─── */}
      <div className="pp-layout" id="pp-layout">

          {/* ─── Sidebar: category tabs ─── */}
          <aside className="pp-sidebar" aria-label="Product categories">
            <div className="pp-sidebar-search">
              <ProductSearch 
                query={searchQuery} 
                onQueryChange={(val) => {
                  setSearchQuery(val);
                  if (val.trim()) {
                    const query = val.trim().toLowerCase();
                    const firstMatch = allProducts.find(p => 
                      p.name.toLowerCase().includes(query) || 
                      p.category.toLowerCase().includes(query)
                    );
                    if (firstMatch && firstMatch.catId !== activeCat) {
                      setActiveCat(firstMatch.catId);
                    }
                  }
                }} 
              />
            </div>
            <p className="pp-sidebar-label">Categories</p>
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-tab-${cat.id}`}
                className={`pp-cat-tab${activeCat === cat.id ? ' active' : ''}`}
                onClick={() => {
                  setActiveCat(cat.id);
                  setSearchQuery('');
                  const isMobile = window.innerWidth <= 768;
                  scrollToId(null, isMobile ? 'pp-main' : 'pp-layout');
                }}
                aria-pressed={activeCat === cat.id}
              >
                <span className="pp-cat-tab-dot" />
                {cat.title}
              </button>
            ))}
            <div style={{ margin: '16px 0 8px', borderTop: '1px solid #e2e8f0', gridColumn: '1 / -1' }} />
            <button
              className="pp-cat-tab"
              style={{
                color: '#1A5FA8',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                gridColumn: '1 / -1',
                justifyContent: 'center'
              }}
              onClick={() => navigate('/surgicals#products')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to Home
            </button>
          </aside>

          {/* ─── Main: product grid ─── */}
          <main className="pp-main" id="pp-main">
            {/* Panel header */}
            <div className="pp-panel-head">
              <div className="pp-panel-head-img">
                <img src={currentCat?.banner || ''} alt={currentCat?.title} />
                <div className="pp-panel-head-overlay">
                  <h2>{currentCat?.title}</h2>
                  <p>{currentCat?.description}</p>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="prod-grid pp-grid" role="list">
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={handleCardClick}
                  />
                ))
              ) : (
                <div style={{ gridColumn: '1 / -1', padding: '40px 0', textAlign: 'center', color: '#6b7280' }}>
                  No products found matching "{searchQuery}".
                </div>
              )}
            </div>

            {/* Category-level WhatsApp enquiry */}
            <div className="pp-cat-wa-wrap">
              <a
                id={`wa-cat-${activeCat}`}
                href={`https://wa.me/919865271371?text=${encodeURIComponent(
                  `Hello, I need a quote for ${currentCat?.title}. Please share price and availability.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="pcd-enquire"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enquire for {currentCat?.title}
              </a>
            </div>
          </main>
        </div>

      {/* ─── Product detail modal ─── */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />

      <Footer />
    </div>
  );
}
