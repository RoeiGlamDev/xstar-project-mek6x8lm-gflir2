import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff; // white background
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #ff69b4; // pink color
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0);
    }
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingElement style={{ left: '10%', top: '20%' }} />
      <FloatingElement style={{ right: '15%', top: '50%' }} />
      <FloatingElement style={{ left: '50%', bottom: '10%' }} />
    </FloatingContainer>
  );
};

export default FloatingElements;