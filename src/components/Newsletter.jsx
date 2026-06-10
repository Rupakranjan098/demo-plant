import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="container">
      <div className="newsletter-section">
        <div className="container newsletter-content">
          <div className="newsletter-text">
            <div style={{color: 'var(--primary-green)'}}>
              {/* Simple leaf icon placeholder */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
            </div>
            <div>
              <h3>Let's Grow Something Beautiful</h3>
              <p>Subscribe for plant care tips, new arrivals and exclusive offers.</p>
            </div>
          </div>
          
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn-primary">Subscribe <ArrowRight size={16} /></button>
          </form>
          
          {/* Decorative element on right */}
          <div style={{position: 'absolute', right: '2rem', bottom: 0}}>
             <img src="./images/indoor_plant_1781080252563.png" alt="small plant" style={{width: '100px', height: '120px', objectFit: 'cover', maskImage: 'linear-gradient(to top, transparent, black)', WebkitMaskImage: 'linear-gradient(to top, transparent, black)'}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
