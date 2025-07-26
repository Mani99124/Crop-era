import React, { useEffect, useState } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [checkingOut, setCheckingOut] = useState(false);
  const [paying, setPaying] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const email = user?.email;

  useEffect(() => {
    if (!email) {
      setMessage('Please log in to view your cart.');
      setLoading(false);
      return;
    }
    // Try to fetch from backend, fallback to localStorage
    fetch(`/api/cart?email=${encodeURIComponent(email)}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Backend not available');
        }
      })
      .then(data => {
        setCart(data);
        setLoading(false);
        localStorage.setItem('cart', JSON.stringify(data));
      })
      .catch(error => {
        console.log('Using localStorage cart:', error.message);
        const storedCart = localStorage.getItem('cart');
        setCart(storedCart ? JSON.parse(storedCart) : []);
        setLoading(false);
      });
  }, [email]);

  const removeFromCart = async (productId) => {
    setMessage('Removing...');
    try {
      const res = await fetch('/api/remove-from-cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, email })
      });
      if (res.ok) {
        const data = await res.json();
        setCart(data.cart);
        localStorage.setItem('cart', JSON.stringify(data.cart));
        setMessage('Removed from cart!');
      } else {
        throw new Error('Backend not available');
      }
    } catch (error) {
      console.log('Mock remove operation:', error.message);
      setCart(prev => {
        const updated = prev.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(updated));
        return updated;
      });
      setMessage('Removed from cart! (Mock)');
    }
    setTimeout(() => setMessage(''), 1200);
  };

  const checkout = async () => {
    setCheckingOut(true);
    setMessage('Processing checkout...');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
        setMessage('Checkout successful! Thank you for your order.');
      } else {
        throw new Error('Backend not available');
      }
    } catch (error) {
      console.log('Mock checkout operation:', error.message);
      setCart([]);
      localStorage.setItem('cart', JSON.stringify([]));
      setMessage('Checkout successful! Thank you for your order. (Mock)');
    }
    setCheckingOut(false);
    setTimeout(() => setMessage(''), 2000);
  };

  const payNow = async () => {
    setPaying(true);
    setMessage('Processing payment...');
    
    try {
      const res = await fetch('/api/pay', { method: 'POST' });
      
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setMessage('Payment successful! (Fake)');
        } else {
          throw new Error('Payment failed');
        }
      } else {
        throw new Error('Backend not available');
      }
    } catch (error) {
      console.log('Mock payment operation:', error.message);
      setMessage('Payment successful! (Mock)');
    }
    
    setPaying(false);
    setTimeout(() => setMessage(''), 2000);
  };

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="cart-bg">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <Link to="/store" className="store-link">Back to Store</Link>
      </div>
      {message && <div className="cart-message">{message}</div>}
      {loading ? <div className="cart-loading">Loading cart...</div> : (
        <div className="cart-list">
          {cart.length === 0 ? (
            <div className="cart-empty">Your cart is empty.</div>
          ) : (
            <>
              {cart.map((item, idx) => (
                <div className="cart-item" key={item.id + '-' + idx}>
                  <div className="cart-item-main">
                    <div className="cart-item-title">{item.name}</div>
                    <div className="cart-item-details">
                      <span className="cart-chip">{item.category}</span>
                      <span className="cart-chip">{item.crop}</span>
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <div className="cart-item-price">₹{item.price} <span className="cart-unit">/{item.unit}</span></div>
                    <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
              <div className="cart-total-row">
                <div className="cart-total-label">Total:</div>
                <div className="cart-total-value">₹{total}</div>
              </div>
              <button className="cart-checkout-btn" onClick={checkout} disabled={checkingOut}>Checkout</button>
              <button className="cart-pay-btn" onClick={payNow} disabled={paying || cart.length === 0} style={{marginTop: 10}}>
                {paying ? 'Paying...' : 'Pay Now'}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
} 