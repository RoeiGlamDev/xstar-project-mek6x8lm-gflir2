import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for styling

const testimonials = [
  {
    name: "Sophia L.",
    feedback: "Absolutely love the luxurious feel of these cosmetics! They make me feel elegant and beautiful.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Emma W.",
    feedback: "The quality is unmatched. I can't imagine my makeup routine without these products!",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Olivia R.",
    feedback: "Every product feels like a treat! The packaging is stunning and the colors are perfect.",
    image: "/images/testimonial3.jpg",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;