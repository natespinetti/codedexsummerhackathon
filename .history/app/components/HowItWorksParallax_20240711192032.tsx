import React, { useEffect, useRef } from "react";
import { Box, Text, Image, ListItem, UnorderedList } from "@chakra-ui/react";

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
    <>
      <Box
        bg="var(--chakra-colors-gray-50)"
        id="how-it-works"
        scrollMarginTop="96px"
      >
        <Box maxW="90%" m="auto" p="2.5rem 0">
          <Text
            as="h2"
            fontSize={["2rem", "2.5rem"]}
            fontFamily="heading"
            fontWeight={700}
            textAlign="center"
            mb="1rem"
          >
            How it works
          </Text>

          <Box w="50%" m="auto" mt="2rem">
            <Text
              as="h3"
              fontSize={["1.5rem", "2rem"]}
              fontFamily="heading"
              textAlign="center"
            >
              Pay $10 per person for 3 hours during the week ($12 on weekends
              and holidays)
            </Text>
          </Box>
          <Text>Enjoy over 500+ board games</Text>
          <Text>
            Indulge in bubble tea, coffee, beer, sandwiches, or salads while you
            play.
          </Text>
          <Text>
            Want to secure a table?{" "}
            <Text
              as="a"
              href="https://www.exploretock.com/sipnplay/"
              target="_blank"
              textDecoration="underline"
            >
              Make a reservation
            </Text>{" "}
            for $15 per person for 3 hours.
          </Text>
        </Box>
      </Box>
      <Box ref={parallaxRef} h="200vh" position="relative" overflow="hidden">
        <Box data-speed="0.5" position="absolute" top="20%" left="15%">
          <Image src="https://via.placeholder.com/300" alt="Parallax Image 1" />
        </Box>
        <Box data-speed="0.3" position="absolute" top="40%" left="40%">
          <Image src="https://via.placeholder.com/300" alt="Parallax Image 2" />
        </Box>
        <Box data-speed="0.1" position="absolute" top="60%" left="60%">
          <Image src="https://via.placeholder.com/300" alt="Parallax Image 3" />
        </Box>
      </Box>
    </>
  );
}
