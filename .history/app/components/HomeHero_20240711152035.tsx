"use client";
import { Box, Text, Button, keyframes } from "@chakra-ui/react";

const bubbleAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) scale(1.5);
    opacity: 0;
  }
`;

const bubbles = new Array(20).fill(0).map((_, index) => ({
  id: index,
  size: Math.random() * 3 + 1,
  left: Math.random() * 100,
  animationDuration: Math.random() * 20 + 10,
  animationDelay: Math.random() * 10,
}));

export default function HomeHero() {
  return (
    <>
      <Box position="relative" overflow="hidden">
        {bubbles.map((bubble) => (
          <Box
            key={bubble.id}
            position="absolute"
            bottom="0"
            left={`${bubble.left}%`}
            width={`${bubble.size}rem`}
            height={`${bubble.size}rem`}
            bg="rgba(255, 255, 255, 0.2)"
            borderRadius="50%"
            animation={`${bubbleAnimation} ${bubble.animationDuration}s linear infinite`}
            transitionDelay={`${bubble.animationDelay}s`}
          />
        ))}
        <Box
          position="relative"
          w="100vw"
          p="2rem"
          display="flex"
          flexDir="column"
          justifyItems="center"
          alignItems="center"
          gridGap="1rem"
        >
          <Text
            as="h1"
            fontFamily="body"
            fontWeight="900"
            fontSize="2rem"
            color="white"
            textAlign="center"
          >
            <Text
              as="span"
              color="#95b878"
              fontWeight="900"
              fontFamily="heading"
              fontSize="2rem"
            >
              Sip & Play:
              <br />
            </Text>
            Your Ultimate Board Game Cafe
          </Text>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"https://www.exploretock.com/sipnplay/"}
            target="_blank"
            _hover={{
              bg: "pink.300",
            }}
          >
            Make a reservation
          </Button>
          <Text
            fontSize="12px"
            w={{ base: "100%", md: "30%" }}
            textAlign="center"
            color="white"
          >
            For large parties (9+ or more people), please email us at
            sipnplaynyc@gmail.com to inquire about a reservation.
          </Text>
        </Box>
      </Box>
    </>
  );
}
