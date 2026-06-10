import React from 'react';
import { ArrowRight, Play, Sun, MousePointer2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="container hero">
      <div className="hero-content animate-fade-in-up animate-delay-1">
        <h1>Bring Nature<br/><span>Indoors</span></h1>
        <p>Discover our curated collection of premium indoor plants, designed to breathe life and tranquility into your living spaces.</p>
        <div className="hero-actions">
          <button className="btn-primary">
            Shop Now <ArrowRight size={18} /></button>
          <button className="btn-outline">Explore Collection <Play size={16} fill="currentColor" /></button>
        </div>
      </div>
      
      <div className="hero-image-container animate-fade-in-up animate-delay-2">
        <div className="hero-image-bg">
          <img src="./images/hero_plant_1781080219752.png" alt="Monstera Plant" />
        </div>
        <div className="monstera-widget animate-fade-in-up animate-delay-3">
          <img src="./images/hero_plant_1781080219752.png" alt="Monstera" />
          <div>
            <h4>Monstera</h4>
            <p>Just added</p>
          </div>
          <Sun size={20} color="var(--primary-green)" style={{position: 'absolute', top: '-10px', right: '10px'}} />
        </div>
        
        <div className="scroll-indicator">
          <div style={{border: '1px solid var(--text-gray)', borderRadius: '1rem', width: '20px', height: '32px', display: 'flex', justifyContent: 'center', paddingTop: '4px'}}>
             <div style={{width: '2px', height: '6px', background: 'var(--text-gray)', borderRadius: '2px'}}></div>
          </div>
          <span>Scroll to explore</span>
        </div>
        
        <div className="pagination">
          <span className="active">01</span>
          <span>02</span>
          <span>03</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
