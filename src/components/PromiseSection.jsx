import React from 'react';
import { ArrowRight, Play, Heart, Users, Star } from 'lucide-react';

const PromiseSection = () => {
  return (
    <section className="container promise-section">
      <div className="promise-content">
        <span className="badge"><span style={{fontSize: '1.2rem', color: '#8BAA8B'}}>❦</span> OUR PROMISE</span>
        <h2>Nurturing Plants,<br/><span>Nurturing Lives.</span></h2>
        <p>At Green Haven Nursery, we believe plants bring happiness, balance, and a breath of fresh air to everyday life.</p>
        <button className="btn-primary">Know More <ArrowRight size={16} /></button>
        
        <div className="stats">
          <div className="stat-item">
            <Heart className="icon" size={24} />
            <div>
              <h4>20K+</h4>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="stat-item">
            <Users className="icon" size={24} />
            <div>
              <h4>150+</h4>
              <p>Plant Varieties</p>
            </div>
          </div>
          <div className="stat-item">
            <Star className="icon" size={24} />
            <div>
              <h4>4.9★</h4>
              <p>Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{position: 'relative'}}>
        <div className="promise-image-container">
          <img src="./images/watering_plants_1781080231575.png" alt="Watering Plants" />
        </div>
        <div className="watch-story">
          <button className="play-btn"><Play size={16} fill="currentColor" /></button>
          <span>Watch Our<br/>Story</span>
        </div>
        {/* Decorative leaves */}
        <div style={{position: 'absolute', top: '10%', left: '-20px', width: '40px', height: '40px', background: 'var(--primary-green)', borderRadius: '50% 0 50% 50%', opacity: 0.1, transform: 'rotate(45deg)'}}></div>
      </div>
    </section>
  );
};

export default PromiseSection;
