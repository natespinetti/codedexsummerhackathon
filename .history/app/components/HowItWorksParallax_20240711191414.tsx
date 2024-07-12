import React, { useEffect, useRef } from "react";
import { Box, Text, Image } from "@chakra-ui/react";

export default function Parallax() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (parallaxRef.current) {
      const layers =
        parallaxRef.current.querySelectorAll<HTMLElement>("[data-speed]");
      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("data-speed") || "0");
        layer.style.transform = `translateY(${scrollTop * speed}px)`;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box ref={parallaxRef} h="200vh" position="relative" overflow="hidden">
      <Box data-speed="0.5" position="absolute" top="10%" left="10%">
        <Text fontSize="4xl" color="white">
          Parallax Layer 1
        </Text>
      </Box>
      <Box data-speed="0.3" position="absolute" top="30%" left="30%">
        <Image src="https://via.placeholder.com/300" alt="Parallax Layer 2" />
      </Box>
      <Box data-speed="0.1" position="absolute" top="50%" left="50%">
        <Text fontSize="4xl" color="white">
          Parallax Layer 3
        </Text>
      </Box>
      <Box data-speed="0.7" position="absolute" top="70%" left="70%">
        <Image src="https://via.placeholder.com/200" alt="Parallax Layer 4" />
      </Box>
    </Box>
  );
}
