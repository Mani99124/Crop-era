import { useState } from "react";

export default function Sidebar({ products, onFilterChange }) {
  const [filters, setFilters] = useState({
    categories: [],
    minPrice: 0,
    maxPrice: 1000,
    inStock: false
  });

  // Get unique categories from products
  const categories = [...new Set(products.map(product => product.category))];
  
  // Get price range
  const prices = products.map(p => p.price);
  const maxProductPrice = Math.max(...prices);
  const minProductPrice = Math.min(...prices);

  const handleCategoryChange = (category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (type, value) => {
    const newFilters = { ...filters, [type]: parseInt(value) };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleStockChange = () => {
    const newFilters = { ...filters, inStock: !filters.inStock };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const newFilters = {
      categories: [],
      minPrice: 0,
      maxPrice: maxProductPrice,
      inStock: false
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div
  style={{
    width: "80%",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
    padding: "24px",
    marginRight: "24px",
    height: "fit-content",
    position: "sticky",
    top: "20px",
    transition: "all 0.3s ease-in-out",
    border: "1px solid #e0e0e0"
  }}
>

      <div style={{ marginBottom: "24px" }}>
        <h3 style={{ marginBottom: "16px", color: "#333" }}>Filters</h3>
        <button
          onClick={clearFilters}
          style={{
            background: "#195030",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "8px 16px",
            cursor: "pointer",
            fontSize: "0.9rem"
          }}
        >
          Clear All Filters
        </button>
      </div>

      {/* Categories */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ marginBottom: "12px", color: "#555" }}>Categories</h4>
        {categories.map(category => (
          <div key={category} style={{ marginBottom: "8px" }}>
            <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                style={{ marginRight: "8px" }}
              />
              <span style={{ fontSize: "0.9rem" }}>{category}</span>
            </label>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ marginBottom: "12px", color: "#555" }}>Price Range</h4>
        <div style={{ marginBottom: "8px" }}>
          <label style={{ fontSize: "0.9rem" }}>Min: ₹{filters.minPrice}</label>
          <input
            type="range"
            min={minProductPrice}
            max={maxProductPrice}
            value={filters.minPrice}
            onChange={(e) => handlePriceChange("minPrice", e.target.value)}
            style={{ width: "100%", marginTop: "4px" }}
          />
        </div>
        <div>
          <label style={{ fontSize: "0.9rem" }}>Max: ₹{filters.maxPrice}</label>
          <input
            type="range"
            min={minProductPrice}
            max={maxProductPrice}
            value={filters.maxPrice}
            onChange={(e) => handlePriceChange("maxPrice", e.target.value)}
            style={{ width: "100%", marginTop: "4px" }}
          />
        </div>
      </div>

      {/* In Stock Only */}
      <div style={{ marginBottom: "24px" }}>
        <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={handleStockChange}
            style={{ marginRight: "8px" }}
          />
          <span style={{ fontSize: "0.9rem" }}>In Stock Only</span>
        </label>
      </div>
    </div>
  );
} 