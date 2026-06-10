import React from 'react';
import { Search, User, ShoppingCart, Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="header-wrapper animate-fade-in-up">
      <div className="container header">
        <div className="logo animate-fade-in-up animate-delay-1">
          <Leaf className="logo-icon" />
          <div className="logo-text">
            <span>Green Haven</span>
            <small>N U R S E R Y</small>
          </div>
        </div>
        
        <nav className="nav-links animate-fade-in-up animate-delay-2">
          <a href="#" className="active">Home</a>
          <a href="#">Plants</a>
          <a href="#">Pots & Planters</a>
          <a href="#">Accessories</a>
          <a href="#">Sale</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>

        <div className="header-icons animate-fade-in-up animate-delay-3">
          <button><Search size={20} /></button>
          <button><User size={20} /></button>
          <button className="cart-icon">
            <ShoppingCart size={20} />
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
