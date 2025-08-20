import React from 'react';
import './PricingSection.css'; // Assuming you have a CSS file for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Luxury Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic Package</h3>
                        <p className="price">$99</p>
                        <ul className="features">
                            <li>High-quality cosmetics</li>
                            <li>Free shipping</li>
                            <li>30-day return policy</li>
                        </ul>
                        <button className="buy-button">Buy Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Premium Package</h3>
                        <p className="price">$199</p>
                        <ul className="features">
                            <li>All Basic features</li>
                            <li>Exclusive discounts</li>
                            <li>Personalized consultation</li>
                        </ul>
                        <button className="buy-button">Buy Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Luxury Package</h3>
                        <p className="price">$299</p>
                        <ul className="features">
                            <li>All Premium features</li>
                            <li>VIP access to events</li>
                            <li>Luxury gift set</li>
                        </ul>
                        <button className="buy-button">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;