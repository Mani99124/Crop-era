import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './Store.css';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [message, setMessage] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user?.email;

  useEffect(() => {
    if (email) {
      fetch(`/api/wishlist?email=${email}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Backend not available');
          }
        })
        .then(data => {
          setWishlist(data);
          localStorage.setItem('wishlist', JSON.stringify(data));
        })
        .catch(error => {
          console.log('Using localStorage wishlist:', error.message);
          const storedWishlist = localStorage.getItem('wishlist');
          setWishlist(storedWishlist ? JSON.parse(storedWishlist) : []);
        });
    }
  }, [email]);

  const removeFromWishlist = async (productId) => {
    try {
      await fetch('/api/remove-from-wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, email })
      });
      
      fetch(`/api/wishlist?email=${email}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Backend not available');
          }
        })
        .then(data => setWishlist(data))
        .catch(error => {
          console.log('Mock remove operation:', error.message);
          setWishlist(prev => prev.filter(p => p.id !== productId));
        });
    } catch (error) {
      console.log('Mock remove operation:', error.message);
      setWishlist(prev => prev.filter(p => p.id !== productId));
    }
  };

  const addToCart = async (productId) => {
    try {
      await fetch('/api/add-to-cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, email })
      });
      setMessage('Added to cart!');
    } catch (error) {
      console.log('Mock add to cart operation:', error.message);
      setMessage('Added to cart! (Mock)');
    }
    setTimeout(() => setMessage(''), 1200);
  };

  return (
    <div className="store-bg">
      <div className="store-header">
        <h1>My Wishlist</h1>
        <div>
          <Link to="/store" className="cart-link" style={{marginRight: 12}}>Back to Store</Link>
          <Link to="/cart" className="cart-link">View Cart</Link>
        </div>
      </div>
      {message && <div className="store-message">{message}</div>}
      {wishlist.length === 0 ? (
        <div className="store-loading">Your wishlist is empty.</div>
      ) : (
        <div className="store-grid">
          {wishlist.map(product => (
            <div className="store-card" key={product.id}>
              <img className="store-card-img" src={product.image} alt={product.name} />
              <div className="store-card-title">{product.name}</div>
              <div className="store-card-details">
                <span className="store-chip">{product.category}</span>
                <span className="store-chip">{product.crop}</span>
              </div>
              <div className="store-card-price">₹{product.price} <span className="store-unit">/{product.unit}</span></div>
              <button className="store-add-btn" onClick={() => addToCart(product.id)}>Add to Cart</button>
              <button className="store-wishlist-btn" onClick={() => removeFromWishlist(product.id)}>
                <FaHeart color="#e53935" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 