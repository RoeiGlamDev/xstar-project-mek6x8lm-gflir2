import React from 'react';

const README: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ color: '#D5006D' }}>Luxury FashionTV Cosmetics</h1>
      <p>Welcome to the official repository for the Luxury FashionTV Cosmetics website.</p>
      <h2>Overview</h2>
      <p>
        This website is designed to showcase our high-end cosmetics line with an elegant and luxurious feel.
        The primary colors used are pink and white, reflecting the brand's identity.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Elegant and high-end design</li>
        <li>Responsive layout for all devices</li>
        <li>Seamless navigation</li>
        <li>Product showcase with high-quality images</li>
        <li>Customer reviews and testimonials</li>
      </ul>
      <h2>Technologies Used</h2>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>CSS Modules</li>
        <li>React Router</li>
        <li>Axios for API calls</li>
      </ul>
      <h2>Installation</h2>
      <p>To get started with the project, clone the repository and install the dependencies:</p>
      <pre>
        <code>
          git clone https://github.com/yourusername/luxury-fashion-tv-cosmetics.git
          <br />
          cd luxury-fashion-tv-cosmetics
          <br />
          npm install
        </code>
      </pre>
      <h2>Usage</h2>
      <p>To run the application locally, use the following command:</p>
      <pre>
        <code>npm start</code>
      </pre>
      <h2>Contributing</h2>
      <p>We welcome contributions! Please fork the repository and submit a pull request.</p>
      <h2>License</h2>
      <p>This project is licensed under the MIT License.</p>
    </div>
  );
};

export default README;