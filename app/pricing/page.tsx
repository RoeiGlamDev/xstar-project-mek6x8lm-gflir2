import React from 'react';
import './PricingPage.css'; // Import custom styles for the pricing page

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="header">
                <h1 className="title">Luxury FashionTV Cosmetics</h1>
                <p className="subtitle">Elevate Your Beauty Experience</p>
            </header>
            <section className="pricing-section">
                <h2 className="pricing-title">Our Pricing Plans</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="plan-title">Basic</h3>
                        <p className="plan-price">$29/month</p>
                        <ul className="plan-features">
                            <li>Access to basic products</li>
                            <li>Monthly beauty tips</li>
                        </ul>
                        <button className="plan-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="plan-title">Premium</h3>
                        <p className="plan-price">$59/month</p>
                        <ul className="plan-features">
                            <li>Access to premium products</li>
                            <li>Personalized beauty advice</li>
                        </ul>
                        <button className="plan-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="plan-title">Luxury</h3>
                        <p className="plan-price">$99/month</p>
                        <ul className="plan-features">
                            <li>Access to all products</li>
                            <li>Exclusive events and webinars</li>
                        </ul>
                        <button className="plan-button">Choose Plan</button>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="footer-text">© 2023 Luxury FashionTV Cosmetics. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PricingPage;