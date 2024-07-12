import React, { useEffect, useRef } from "react";
import { Box, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

const containerStyles = css`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: black;
`;

const rotatingTextStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
`;

const stepStyles = (index: number) => css`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: #fff;
  transform: rotateY(${index * 90}deg) translateZ(300px);
`;

const ParallaxRotatingText = () => {
  const rotatingTextRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const rotation = scrollTop * 0.2; // Adjust the multiplier to control the rotation speed
    if (rotatingTextRef.current) {
      rotatingTextRef.current.style.transform = `translate(-50%, -50%) rotateY(${rotation}deg)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box css={containerStyles}>
      <Box ref={rotatingTextRef} css={rotatingTextStyles}>
        {steps.map((step, index) => (
          <Text key={index} css={stepStyles(index)}>
            {step}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default ParallaxRotatingText;
