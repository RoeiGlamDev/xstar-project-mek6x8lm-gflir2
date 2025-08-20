import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GradientBackgroundContainer = styled.div`
  height: 100vh; // Full height of the viewport
  background: linear-gradient(270deg, #ffafbd, #ffc3a0); // Pink to white gradient
  background-size: 400% 400%; // For smooth animation
  animation: ${gradientAnimation} 15s ease infinite; // Animation settings
`;

const GradientBackground: React.FC = ({ children }) => {
  return <GradientBackgroundContainer>{children}</GradientBackgroundContainer>;
};

export default GradientBackground;