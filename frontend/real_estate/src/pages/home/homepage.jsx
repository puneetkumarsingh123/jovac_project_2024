import React, { useState } from 'react';
import './homepagecss.css';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  const handleAddPropertyClick = () => {
    console.log('Navigating to Add Property page');
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to Kharidlo Co.</h1>
      </header>
      
      <section className="search-section">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-bar"
            placeholder="Search for properties..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </section>

      <section className="add-property-section">
        <button className="add-property-button" onClick={handleAddPropertyClick}>
          Add Property
        </button>
      </section>
    </div>
  );
};

export default HomePage;
