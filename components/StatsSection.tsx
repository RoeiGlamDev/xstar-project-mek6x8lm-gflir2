import React from 'react';
import './StatsSection.css'; // Importing CSS for styling

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="stat">
                <h2>100+</h2>
                <p>Luxury Brands</p>
            </div>
            <div className="stat">
                <h2>5000+</h2>
                <p>Products Available</p>
            </div>
            <div className="stat">
                <h2>10k+</h2>
                <p>Satisfied Customers</p>
            </div>
            <div className="stat">
                <h2>20+</h2>
                <p>Years of Experience</p>
            </div>
        </section>
    );
};

export default StatsSection;