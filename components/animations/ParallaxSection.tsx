import React from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: #fff; // White background for elegance
`;

const ParallaxLayer = styled.div<{ speed: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateZ(0);
  will-change: transform;
  background: url(${(props) => props.image}) center center / cover no-repeat;
  transform: translateY(${(props) => props.speed * 100}px); // Parallax effect
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: #ff69b4; // Pink color for text
  text-align: center;
  padding-top: 50vh; // Center content vertically
`;

const ParallaxSection: React.FC<{ image: string; speed: number }> = ({ image, speed, children }) => {
  return (
    <ParallaxContainer>
      <ParallaxLayer image={image} speed={speed} />
      <Content>{children}</Content>
    </ParallaxContainer>
  );
};

export default ParallaxSection;