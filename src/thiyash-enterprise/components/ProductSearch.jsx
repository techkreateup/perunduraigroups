import { useState } from 'react';

export default function ProductSearch({ query, onQueryChange }) {
  return (
    <div className="ps-search-outer">
      <div className="ps-search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="SEARCH..."
          aria-label="Search products"
          id="product-search-input"
          className="ps-search-input"
        />

        {/* Clear button */}
        {query && (
          <button
            onClick={() => onQueryChange('')}
            aria-label="Clear search"
            className="ps-search-clear"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}

        {/* Search icon */}
        <div className="ps-search-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>
    </div>
  );
}
