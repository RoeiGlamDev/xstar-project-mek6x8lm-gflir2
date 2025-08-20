import React from 'react';
import './ContactPage.css'; // Importing CSS for styling

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page">
            <header className="contact-header">
                <h1>Contact Us</h1>
                <p>For inquiries about our luxury cosmetics, please fill out the form below.</p>
            </header>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={4} required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
};

export default ContactPage;