import { assetUrl } from '../utils/assetUrl';

/**
 * ProductCard — reusable card used in both ProductsPage and the home Products section.
 * @param {object}   product   - Product object {id, name, description, image, category}
 * @param {function} onClick   - Called when the card is clicked. Receives the product object.
 * @param {boolean}  clickable - Adds a hover cursor/scale effect when true (default true)
 */
export default function ProductCard({ product, onClick, clickable = true }) {
  const handleClick = () => {
    if (onClick) onClick(product);
  };

  return (
    <div
      className={`pg-card${clickable ? ' pg-card--clickable' : ''}`}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); } : undefined}
      aria-label={onClick ? `View details for ${product.name}` : undefined}
      id={`product-card-${product.id}`}
    >
      <div className="pg-img">
        <img
          src={assetUrl(product.image)}
          alt={product.name}
          loading="lazy"
          onError={(e) => { e.target.style.opacity = '0.25'; }}
        />
      </div>
      <div className="pg-info">
        <strong>{product.name}</strong>
        <span>{product.description}</span>
      </div>
    </div>
  );
}
