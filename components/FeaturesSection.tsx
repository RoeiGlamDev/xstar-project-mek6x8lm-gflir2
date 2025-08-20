import React from 'react';
import './FeaturesSection.css'; // Assuming you have a CSS file for styling

const featuresData = [
  {
    title: 'Premium Quality',
    description: 'Our cosmetics are made from the finest ingredients, ensuring a luxurious experience.',
    icon: '🌟',
  },
  {
    title: 'Elegant Packaging',
    description: 'Each product is beautifully packaged, perfect for gifts or personal indulgence.',
    icon: '🎁',
  },
  {
    title: 'Cruelty-Free',
    description: 'We are committed to ethical practices, ensuring no harm to animals.',
    icon: '🐰',
  },
  {
    title: 'Exclusive Collections',
    description: 'Discover our limited edition collections that elevate your beauty routine.',
    icon: '💎',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;