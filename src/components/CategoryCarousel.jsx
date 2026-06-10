import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Flower2, Droplet, Sprout, Wind, Scissors } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const categories = [
  { id: 1, name: 'Indoor Plants', icon: <Flower2 size={20} />, image: './images/indoor_plant_1781080252563.png' },
  { id: 2, name: 'Outdoor Plants', icon: <Sprout size={20} />, image: './images/hero_plant_1781080219752.png' },
  { id: 3, name: 'Succulents', icon: <Droplet size={20} />, image: './images/indoor_plant_1781080252563.png' },
  { id: 4, name: 'Pots & Planters', icon: <Wind size={20} />, image: './images/hero_plant_1781080219752.png' },
  { id: 5, name: 'Accessories', icon: <Scissors size={20} />, image: './images/watering_plants_1781080231575.png' },
  { id: 6, name: 'Rare Finds', icon: <Flower2 size={20} />, image: './images/indoor_plant_1781080252563.png' },
];

const CategoryCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <section className="container category-section">
      <div className="category-header">
        <h2>Shop by Category</h2>
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
          <a href="#" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '0.9rem'}}>
            View All Categories <span style={{background: 'var(--primary-green)', color: 'white', borderRadius: '50%', padding: '4px', display: 'flex'}}><ArrowRight size={14}/></span>
          </a>
        </div>
      </div>
      
      <div style={{position: 'relative', display: 'flex', alignItems: 'center', gap: '1rem'}}>
        <button onClick={() => swiperRef.current?.slidePrev()} style={{background: 'white', borderRadius: '50%', padding: '0.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', color: 'var(--text-gray)', zIndex: 10}}>
          <ChevronLeft size={20} />
        </button>
        
        <div style={{flex: 1, overflow: 'hidden'}}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={4.5}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            breakpoints={{
              320: { slidesPerView: 1.5 },
              768: { slidesPerView: 3.5 },
              1024: { slidesPerView: 4.5 },
            }}
          >
            {categories.map(cat => (
              <SwiperSlide key={cat.id}>
                <div className="category-card">
                  <div className="img-wrapper">
                    <img src={cat.image} alt={cat.name} />
                    <div className="category-icon">{cat.icon}</div>
                  </div>
                  <h3>{cat.name}</h3>
                  <a href="#">Shop Now <ArrowRight size={14} /></a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <button onClick={() => swiperRef.current?.slideNext()} style={{background: 'white', borderRadius: '50%', padding: '0.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', color: 'var(--text-gray)', zIndex: 10}}>
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="custom-pagination" style={{display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem'}}></div>
    </section>
  );
};

export default CategoryCarousel;
