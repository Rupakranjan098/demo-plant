import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesBanner from './components/FeaturesBanner';
import CategoryCarousel from './components/CategoryCarousel';
import PromiseSection from './components/PromiseSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import './App.css';
import { Truck } from 'lucide-react';

function App() {
  return (
    <div className="app">
      <div className="top-banner">
        <Truck size={16} /> Free shipping on orders over ₹999
      </div>
      <Header />
      <main>
        <Hero />
        <FeaturesBanner />
        <CategoryCarousel />
        <PromiseSection />
        <Newsletter />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
