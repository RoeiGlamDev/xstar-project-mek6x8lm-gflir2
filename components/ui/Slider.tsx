import React from 'react';
import './Slider.css'; // Assuming you have a CSS file for styling

const Slider: React.FC = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide">
          <img src="/images/slide1.jpg" alt="Luxury Cosmetic 1" />
        </div>
        <div className="slide">
          <img src="/images/slide2.jpg" alt="Luxury Cosmetic 2" />
        </div>
        <div className="slide">
          <img src="/images/slide3.jpg" alt="Luxury Cosmetic 3" />
        </div>
      </div>
      <div className="slider-controls">
        <button className="prev">❮</button>
        <button className="next">❯</button>
      </div>
    </div>
  );
};

export default Slider;