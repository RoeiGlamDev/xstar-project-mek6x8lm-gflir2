import React from 'react';
import './AboutPage.css'; // Importing CSS for styling

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1>Welcome to FashionTV Cosmetics</h1>
                <p>Your destination for luxury beauty products</p>
            </header>
            <section className="about-content">
                <h2>About Us</h2>
                <p>
                    At FashionTV Cosmetics, we believe in elegance and sophistication. 
                    Our products are designed to enhance your natural beauty while providing 
                    a luxurious experience.
                </p>
                <p>
                    Our mission is to deliver high-quality cosmetics that empower individuals 
                    to express their unique style and confidence.
                </p>
            </section>
            <footer className="about-footer">
                <p>© 2023 FashionTV Cosmetics. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;