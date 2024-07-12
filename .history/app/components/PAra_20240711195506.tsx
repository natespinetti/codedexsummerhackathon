import React, { useEffect, useRef } from "react";
import { Box, Text } from "@chakra-ui/react";

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
    <Box
      position="relative"
      width="100vw"
      height="200vh"
      overflow="hidden"
      bg="black"
    >
      <Box
        ref={rotatingTextRef}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        transformStyle="preserve-3d"
        transition="transform 0.1s ease-out"
      >
        {steps.map((step, index) => (
          <Text
            key={index}
            position="absolute"
            width="100%"
            textAlign="center"
            fontSize="2rem"
            color="white"
            style={{
              transform: `rotateY(${index * 90}deg) translateZ(300px)`,
            }}
          >
            {step}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default ParallaxRotatingText;
