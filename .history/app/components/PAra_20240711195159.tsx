import React, { useEffect, useRef } from "react";
import { Box, Text } from "@chakra-ui/react";
import "../public/globals.css";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

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
    <Box className="container" bg="black">
      <Box ref={rotatingTextRef} className="rotating-text">
        {steps.map((step, index) => (
          <Text key={index} className="step">
            {step}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default ParallaxRotatingText;
