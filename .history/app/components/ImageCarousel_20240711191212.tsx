import React from "react";
import { Box, Image } from "@chakra-ui/react";

const images = [
  "https://via.placeholder.com/1200x300.png?text=Image+1",
  "https://via.placeholder.com/1200x300.png?text=Image+2",
  "https://via.placeholder.com/1200x300.png?text=Image+3",
  // Add more image URLs as needed
];

export default function ImageBanner() {
  return (
    <Box>
      {images.map((src, index) => (
        <Image key={index} src={src} alt={`Banner ${index + 1}`} />
      ))}
    </Box>
  );
}
