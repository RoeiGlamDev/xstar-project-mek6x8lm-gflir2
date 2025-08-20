import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1); // semi-transparent white
  backdrop-filter: blur(10px); // glass effect
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  color: #fff; // white text
  border: 1px solid rgba(255, 255, 255, 0.2); // subtle border
`;

const Title = styled.h2`
  font-size: 24px;
  color: #ff69b4; // pink color
  margin: 0 0 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #fff; // white text
`;

const GlassCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default GlassCard;