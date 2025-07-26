// import React, { useEffect, useState } from 'react';
// import './Store.css';
// import { Link } from 'react-router-dom';
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import Sidebar from './Sidebar';
// import productsData from './products.json';

// export default function Store() {
//   const [products, setProducts] = useState(productsData.products);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [wishlist, setWishlist] = useState([]);
//   const [cart, setCart] = useState([]);
//   const user = JSON.parse(localStorage.getItem('user'));
//   const email = user?.email;

//   // Sidebar filter state
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [priceRange, setPriceRange] = useState([0, 5000]);
//   const [sortBy, setSortBy] = useState('');

//   // Get unique categories for sidebar
//   const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

//   // Get min/max price for slider
//   const prices = products.map(p => p.price);
//   const minPrice = prices.length ? Math.min(...prices) : 0;
//   const maxPrice = prices.length ? Math.max(...prices) : 5000;

//   // Filters state
//   const [filters, setFilters] = useState({
//     categories: [],
//     minPrice: minPrice,
//     maxPrice: maxPrice,
//     inStock: false
//   });

//   // Filter products based on filters state
//   const filteredProducts = products.filter(product => {
//     const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);
//     const priceMatch = product.price >= filters.minPrice && product.price <= filters.maxPrice;
//     const stockMatch = !filters.inStock || product.stock > 0;
//     return categoryMatch && priceMatch && stockMatch;
//   });

//   // Handlers
//   const handleClearFilters = () => {
//     setFilters({
//       categories: [],
//       minPrice: minPrice,
//       maxPrice: maxPrice,
//       inStock: false
//     });
//   };

//   // Sort products
//   if (sortBy === 'lowToHigh') {
//     filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
//   } else if (sortBy === 'highToLow') {
//     filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
//   }

//   const addToCart = async (productId) => {
//     if (!email) {
//       setMessage('Please log in to add to cart.');
//       return;
//     }
//     setMessage('Adding...');
//     try {
//       const res = await fetch('/api/add-to-cart', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ productId, email })
//       });
//       if (res.ok) {
//         setMessage('Added to cart!');
//         setCart(prev => {
//           const latestCart = JSON.parse(localStorage.getItem('cart')) || [];
//           if (latestCart.some(item => item.id === productId)) return latestCart;
//           const updated = [...latestCart, products.find(p => p.id === productId)];
//           localStorage.setItem('cart', JSON.stringify(updated));
//           return updated;
//         });
//       } else {
//         throw new Error('Backend not available');
//       }
//     } catch (error) {
//       console.log('Mock cart operation:', error.message);
//       setMessage('Added to cart! (Mock)');
//       setCart(prev => {
//         const latestCart = JSON.parse(localStorage.getItem('cart')) || [];
//         if (latestCart.some(item => item.id === productId)) return latestCart;
//         const updated = [...latestCart, products.find(p => p.id === productId)];
//         localStorage.setItem('cart', JSON.stringify(updated));
//         return updated;
//       });
//     }
//     setTimeout(() => setMessage(''), 1200);
//   };

//   const addToWishlist = async (productId) => {
//     if (!email) {
//       setMessage('Please log in to add to wishlist.');
//       return;
//     }
//     try {
//       await fetch('/api/add-to-wishlist', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ productId, email })
//       });
//       setWishlist(prev => {
//         const updated = [...prev, products.find(p => p.id === productId)];
//         localStorage.setItem('wishlist', JSON.stringify(updated));
//         return updated;
//       });
//     } catch (error) {
//       console.log('Mock wishlist operation:', error.message);
//       setWishlist(prev => {
//         const updated = [...prev, products.find(p => p.id === productId)];
//         localStorage.setItem('wishlist', JSON.stringify(updated));
//         return updated;
//       });
//     }
//   };

//   const removeFromWishlist = async (productId) => {
//     if (!email) return;
//     try {
//       await fetch('/api/remove-from-wishlist', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ productId, email })
//       });
//       setWishlist(prev => {
//         const updated = prev.filter(p => p.id !== productId);
//         localStorage.setItem('wishlist', JSON.stringify(updated));
//         return updated;
//       });
//     } catch (error) {
//       console.log('Mock wishlist operation:', error.message);
//       setWishlist(prev => {
//         const updated = prev.filter(p => p.id !== productId);
//         localStorage.setItem('wishlist', JSON.stringify(updated));
//         return updated;
//       });
//     }
//   };

//   const isInWishlist = (productId) => wishlist.some(p => p.id === productId);
//   const isInCart = (productId) => cart.some(item => item.id === productId);

//   return (
//     <div className="store-bg">
//       <div className="store-header">
//         <h1>Agri Store</h1>
//         <div>
//           <Link to="/wishlist" className="cart-link" style={{marginRight: 12}}>Wishlist</Link>
//           <Link to="/cart" className="cart-link">View Cart</Link>
//         </div>
//       </div>
//       <div style={{ display: 'flex' }}>
//         <Sidebar products={products} onFilterChange={setFilters} />
//         <div style={{ flex: 1 }}>
//           {message && <div className="store-message">{message}</div>}
//           {loading ? <div className="store-loading">Loading products...</div> : (
//             <div className="store-grid">
//               {filteredProducts.map(product => (
//                 <div className="store-card" key={product.id}>
//                   <img className="store-card-img" src={product.image} alt={product.name} />
//                   <div className="store-card-title">{product.name}</div>
//                   <div className="store-card-details">
//                     <span className="store-chip">{product.category}</span>
//                   </div>
//                   <div className="store-card-price">₹{product.price}</div>
//                   <div className="store-card-stock" style={{fontSize: '0.95rem', color: product.stock > 0 ? '#388e3c' : '#e53935', marginBottom: 8}}>
//                     {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
//                   </div>
//                   <div style={{fontSize: '0.98rem', marginBottom: 8}}>{product.description}</div>
//                   {isInCart(product.id) ? (
//                     <Link to="/cart" className="store-add-btn">Go to Cart</Link>
//                   ) : (
//                     <button className="store-add-btn" onClick={() => addToCart(product.id)}>Add to Cart</button>
//                   )}
//                   <button className="store-wishlist-btn" onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product.id)}>
//                     {isInWishlist(product.id) ? <FaHeart color="#e53935" /> : <FaRegHeart color="#888" />}
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// } 
// Store.js
import React, { useEffect, useState } from 'react';
import './Store.css';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaBars, FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar';
import productsData from './products.json';

export default function Store() {
  const [products, setProducts] = useState(productsData.products);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));
  const email = user?.email;

  const prices = products.map(p => p.price);
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 5000;

  const [filters, setFilters] = useState({
    categories: [],
    minPrice: minPrice,
    maxPrice: maxPrice,
    inStock: false
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const isInWishlist = (productId) => wishlist.some(p => p.id === productId);
  const isInCart = (productId) => cart.some(item => item.id === productId);

  const addToCart = async (productId) => {
    if (!email) {
      setMessage('Please log in to add to cart.');
      return;
    }
    setMessage('Adding...');
    try {
      const res = await fetch('/api/add-to-cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, email })
      });
      if (res.ok) {
        setMessage('Added to cart!');
        setCart(prev => {
          const latestCart = JSON.parse(localStorage.getItem('cart')) || [];
          if (latestCart.some(item => item.id === productId)) return latestCart;
          const updated = [...latestCart, products.find(p => p.id === productId)];
          localStorage.setItem('cart', JSON.stringify(updated));
          return updated;
        });
      } else {
        throw new Error('Backend not available');
      }
    } catch (error) {
      console.log('Mock cart operation:', error.message);
      setMessage('Added to cart! (Mock)');
      setCart(prev => {
        const latestCart = JSON.parse(localStorage.getItem('cart')) || [];
        if (latestCart.some(item => item.id === productId)) return latestCart;
        const updated = [...latestCart, products.find(p => p.id === productId)];
        localStorage.setItem('cart', JSON.stringify(updated));
        return updated;
      });
    }
    setTimeout(() => setMessage(''), 1200);
  };

  const addToWishlist = async (productId) => {
    if (!email) {
      setMessage('Please log in to add to wishlist.');
      return;
    }
    try {
      await fetch('/api/add-to-wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, email })
      });
      setWishlist(prev => {
        const updated = [...prev, products.find(p => p.id === productId)];
        localStorage.setItem('wishlist', JSON.stringify(updated));
        return updated;
      });
    } catch (error) {
      console.log('Mock wishlist operation:', error.message);
      setWishlist(prev => {
        const updated = [...prev, products.find(p => p.id === productId)];
        localStorage.setItem('wishlist', JSON.stringify(updated));
        return updated;
      });
    }
  };

  const removeFromWishlist = async (productId) => {
    if (!email) return;
    try {
      await fetch('/api/remove-from-wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, email })
      });
      setWishlist(prev => {
        const updated = prev.filter(p => p.id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(updated));
        return updated;
      });
    } catch (error) {
      console.log('Mock wishlist operation:', error.message);
      setWishlist(prev => {
        const updated = prev.filter(p => p.id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(updated));
        return updated;
      });
    }
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);
    const priceMatch = product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const stockMatch = !filters.inStock || product.stock > 0;
    return categoryMatch && priceMatch && stockMatch;
  });

  return (
    <div className="store-bg">
      <div className="store-header">
        <h1>Agri Store</h1>
        <div className="store-header-links">
          <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <Link to="/wishlist" className="cart-link">Wishlist</Link>
          <Link to="/cart" className="cart-link">View Cart</Link>
        </div>
      </div>

      <div className="store-body">
        <div className={`store-sidebar-wrapper ${isSidebarOpen ? 'open' : ''}`}>
          <Sidebar products={products} onFilterChange={setFilters} />
        </div>

        <div className="store-main-content">
          {message && <div className="store-message">{message}</div>}
          {loading ? (
            <div className="store-loading">Loading products...</div>
          ) : (
            <div className="store-grid">
              {filteredProducts.map(product => (
                <div className="store-card" key={product.id}>
                  <img className="store-card-img" src={product.image} alt={product.name} />
                  <div className="store-card-title">{product.name}</div>
                  <div className="store-card-details">
                    <span className="store-chip">{product.category}</span>
                  </div>
                  <div className="store-card-price">₹{product.price}</div>
                  <div className="store-card-stock" style={{fontSize: '0.95rem', color: product.stock > 0 ? '#388e3c' : '#e53935', marginBottom: 8}}>
                    {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                  </div>
                  <div style={{fontSize: '0.98rem', marginBottom: 8}}>{product.description}</div>
                  {isInCart(product.id) ? (
                    <Link to="/cart" className="store-add-btn">Go to Cart</Link>
                  ) : (
                    <button className="store-add-btn" onClick={() => addToCart(product.id)}>Add to Cart</button>
                  )}
                  <button className="store-wishlist-btn" onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product.id)}>
                    {isInWishlist(product.id) ? <FaHeart color="#e53935" /> : <FaRegHeart color="#888" />}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}