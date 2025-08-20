import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1 className="about-title">About FashionTV Cosmetics</h1>
        <p className="about-description">
          Discover the essence of luxury with FashionTV Cosmetics. Our products are crafted with the finest ingredients to enhance your natural beauty while providing an elegant touch to your daily routine.
        </p>
        <p className="about-description">
          Embrace sophistication and indulge in our exclusive range designed for the modern individual who appreciates high-end cosmetics.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;