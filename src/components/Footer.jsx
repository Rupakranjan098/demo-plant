import React from 'react';
import { Leaf, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo" style={{marginBottom: '1rem'}}>
              <Leaf className="logo-icon" />
              <div className="logo-text">
                <span>Green Haven</span>
                <small>N U R S E R Y</small>
              </div>
            </div>
            <div className="footer-social">
              <a href="#">IG</a>
              <a href="#">TW</a>
            </div>
          </div>
          
          <div>
            <h4>Shop</h4>
            <ul>
              <li><a href="#">All Plants</a></li>
              <li><a href="#">Indoor Plants</a></li>
              <li><a href="#">Outdoor Plants</a></li>
              <li><a href="#">Pots & Planters</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Information</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Plant Care Guide</a></li>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Help</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Track Your Order</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li><Phone size={16} /> +91 98765 43210</li>
              <li><Mail size={16} /> hello@greenhavennursery.com</li>
              <li><MapPin size={16} /> Green Haven Nursery, India</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 Green Haven Nursery. All Rights Reserved.</p>
          <button className="scroll-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
