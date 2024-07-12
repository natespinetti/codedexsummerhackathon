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
        ref={parallaxRef}
        position="relative"
        overflow="hidden"
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

          <Box w="70%" mr="auto" mt="4rem">
            <Box display="grid" gridTemplateColumns="150px auto">
              <Box
                display="flex"
                justifyContent="normal"
                alignItems="center"
                alignSelf="center"
              >
                <Text
                  fontWeight="700"
                  fontFamily="heading"
                  fontSize={["1.5rem", "2rem"]}
                  transform="rotate(-90deg)"
                  transformOrigin="center"
                  color="gray"
                >
                  Step 1
                </Text>
              </Box>
              <Text
                as="h3"
                fontSize={["1.25rem", "1.75rem"]}
                fontFamily="body"
                textAlign="left"
              >
                Pay $10 per person for 3 hours during the week ($12 on weekends
                and holidays)
              </Text>
            </Box>
          </Box>
          <Box w="70%" mr="auto" mt="6rem">
            <Box display="grid" gridTemplateColumns="150px auto">
              <Box
                display="flex"
                justifyContent="normal"
                alignItems="center"
                alignSelf="center"
              >
                <Text
                  fontWeight="700"
                  fontFamily="heading"
                  fontSize={["1.5rem", "2rem"]}
                  transform="rotate(-90deg)"
                  transformOrigin="center"
                  color="gray"
                >
                  Step 2
                </Text>
              </Box>
              <Text
                as="h3"
                fontSize={["1.25rem", "1.75rem"]}
                fontFamily="body"
                textAlign="left"
                w="100%"
              >
                Enjoy over 500+ board games
              </Text>
            </Box>
          </Box>

          <Box w="70%" mr="auto" mt="6rem">
            <Box display="grid" gridTemplateColumns="150px auto">
              <Box
                display="flex"
                justifyContent="normal"
                alignItems="center"
                alignSelf="center"
              >
                <Text
                  fontWeight="700"
                  fontFamily="heading"
                  fontSize={["1.5rem", "2rem"]}
                  transform="rotate(-90deg)"
                  transformOrigin="center"
                  color="gray"
                >
                  Step 3
                </Text>
              </Box>
              <Text
                as="h3"
                fontSize={["1.25rem", "1.75rem"]}
                fontFamily="body"
                textAlign="left"
                w="100%"
              >
                Indulge in bubble tea, coffee, beer, sandwiches, or salads while
                you play.
              </Text>
            </Box>
          </Box>

          <Box w="70%" mr="auto" mt="6rem">
            <Box display="grid" gridTemplateColumns="150px auto">
              <Box
                display="flex"
                justifyContent="normal"
                alignItems="center"
                alignSelf="center"
              >
                <Text
                  fontWeight="700"
                  fontFamily="heading"
                  fontSize={["1.5rem", "2rem"]}
                  transform="rotate(-90deg)"
                  transformOrigin="center"
                  color="gray"
                >
                  Step 4
                </Text>
              </Box>
              <Text
                as="h3"
                fontSize={["1.25rem", "1.75rem"]}
                fontFamily="body"
                textAlign="left"
                w="100%"
              >
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
        </Box>
        <Box data-speed="0.05" position="absolute" top="12%" right="15%">
          <Image
            src="./images/dollarsign.png"
            maxW="100px"
            alt="Parallax Image 1"
          />
        </Box>
        <Box data-speed="0.1" position="absolute" top="14%" right="11%">
          <Image
            src="./images/dollarsign.png"
            maxW="100px"
            alt="Parallax Image 1"
          />
        </Box>
        <Box data-speed="0.3" position="absolute" top="22%" right="7%">
          <Image
            src="./images/board-games.png"
            maxW="300px"
            alt="Parallax Image 2"
          />
        </Box>
        <Box data-speed="0.1" position="absolute" top="60%" left="60%">
          <Image src="https://via.placeholder.com/300" alt="Parallax Image 3" />
        </Box>
      </Box>
    </>
  );
}
