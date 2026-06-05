import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { categories, productsByCat } from '../data/productsData';

const Products = () => {
  const [activeCat, setActiveCat] = useState('surgical');
  const navigate = useNavigate();

  useEffect(() => {
    const handleSelectCat = (e) => {
      if (e.detail) setActiveCat(e.detail);
    };
    window.addEventListener('selectProductCat', handleSelectCat);
    return () => window.removeEventListener('selectProductCat', handleSelectCat);
  }, []);

  // Clicking any product card navigates to the /products page
  const handleCardClick = (e) => {
    if (e.target.closest('.pg-card')) {
      navigate('/products', { state: { activeCat } });
    }
  };

  const handleCatClick = (catId) => {
    setActiveCat(catId);
    // On mobile, scroll to the detail panel after React re-renders
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        const panel = document.getElementById(`cat-${catId}`);
        if (panel) {
          const top = panel.getBoundingClientRect().top + window.scrollY + 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <>
      <section id="products" className="section">
        <Reveal className="s-head">
          <span className="s-tag">Product Categories</span>
          <h2 className="s-title">Comprehensive <em>Medical Supply</em> Range</h2>
          <p className="s-sub">Click any category to explore our full product list with specifications.</p>
        </Reveal>

        <div className="pcat-wrap">
          {/* LEFT: Category Cards */}
          <div className="pcat-grid">
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                className={`pcat-card ${activeCat === cat.id ? 'active' : ''}`} 
                onClick={() => handleCatClick(cat.id)}
              >
                <div className="pcat-img">
                  <img src={cat.banner} alt={cat.title} />
                  <div className="prod-top-overlay"></div>
                </div>
                <div className="pcat-info">
                  <h3>{cat.title}</h3>
                  <p>{cat.sub}</p>
                </div>
                <svg className="pcat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            ))}
          </div>

          {/* RIGHT: Product Detail Panel */}
          <div className="pcat-panel">
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                className={`pcat-detail ${activeCat === cat.id ? 'active' : ''}`} 
                id={`cat-${cat.id}`}
              >
                <div className="pcd-header">
                  <img src={cat.banner} alt={cat.title} />
                  <div className="pcd-header-overlay">
                    <h2>{cat.title}</h2>
                    <p>{cat.description}</p>
                  </div>
                </div>
                <div className="pcd-body">
                  <div className="prod-grid" onClick={handleCardClick}>
                    {productsByCat[cat.id]?.map((prod, idx) => (
                      <div className="pg-card" key={idx}>
                        <div className="pg-img">
                          <img src={prod.img} alt={prod.name} />
                        </div>
                        <div className="pg-info">
                          <strong>{prod.name}</strong>
                          <span>{prod.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a 
                    href={`https://wa.me/919865271371?text=Hello%2C%20I%20need%20a%20quote%20for%20${encodeURIComponent(cat.title)}.`}
                    target="_blank" 
                    rel="noreferrer" 
                    className="pcd-enquire"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
