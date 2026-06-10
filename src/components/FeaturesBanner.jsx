import React from 'react';
import { Leaf, Heart, Truck, ShieldCheck } from 'lucide-react';

const FeaturesBanner = () => {
  return (
    <div className="container">
      <div className="features-banner">
        <div className="feature-item">
          <Leaf className="feature-icon" size={32} />
          <div>
            <h4>Handpicked Plants</h4>
            <p>Carefully selected for you</p>
          </div>
        </div>
        <div className="feature-item">
          <Heart className="feature-icon" size={32} />
          <div>
            <h4>Healthy & Fresh</h4>
            <p>Grown with love, just for you</p>
          </div>
        </div>
        <div className="feature-item">
          <Truck className="feature-icon" size={32} />
          <div>
            <h4>Fast Delivery</h4>
            <p>Quick & safe delivery</p>
          </div>
        </div>
        <div className="feature-item">
          <ShieldCheck className="feature-icon" size={32} />
          <div>
            <h4>Secure Packaging</h4>
            <p>Plants packed with care</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;
