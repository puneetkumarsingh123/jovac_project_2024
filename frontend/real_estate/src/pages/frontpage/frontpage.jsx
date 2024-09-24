import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import './styles.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Please Sign In</h2>
        <p>You need to sign in to access this section.</p>
        <div className="modal-buttons">
          <Link to="/signup" className="button" onClick={onClose}>Sign Up</Link>
          <Link to="/login" className="button" onClick={onClose}>Log In</Link>
        </div>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const FrontPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleNavClick = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="front-page">
      <nav className="navbar">
        <div className="logo">
          <h1>Kharidlo Co.</h1>
        </div>
        <ul className="nav-links">
          <li><a href="/" onClick={handleNavClick}>Home</a></li>
          <li><a href="/listings" onClick={handleNavClick}>Listings</a></li>
          <li><a href="/about" onClick={handleNavClick}>About Us</a></li>
        </ul>
        <div className="auth-buttons">
          <Link to="/signup" className="button">Sign Up</Link>
          <Link to="/login" className="button">Log In</Link>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <h2>Your Dream Home Awaits</h2>
          <p>Explore the best properties across the city and beyond.</p>
          <button className="hero-button" onClick={handleNavClick}>Browse Listings</button>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <Footer />
    </div>
  );
};

export default FrontPage;
