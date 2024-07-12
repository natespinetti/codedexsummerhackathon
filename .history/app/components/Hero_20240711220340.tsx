"use client";
import { Box, Text, Button, keyframes } from "@chakra-ui/react";
import CurrentDayHours from "./CurrentDaysHours";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ArrowDownIcon,
} from "@chakra-ui/icons";
import { string } from "three/examples/jsm/nodes/Nodes.js";

const bubbleAnimation = keyframes`
  0% {
    transform: translateY(100px) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) scale(1.5);
    opacity: 0;
  }
`;

const upDownAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const bubbles = new Array(20).fill(0).map((_, index) => ({
  id: index,
  size: Math.random() * 3 + 1,
  left: Math.random() * 100,
  animationDuration: Math.random() * 20 + 10,
  animationDelay: Math.random() * 100,
}));

const onArrowClick = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId || "");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

interface HeroProps {
  headline: string;
  anchor: string;
}
const Hero: React.FC<HeroProps> = ({ headline, anchor }) => {
  return (
    <>
      <Box position="relative" h="100%" w="100%">
        <Box
          position="relative"
          w="100vw"
          p="2.5rem"
          display="flex"
          flexDir="column"
          justifyItems="center"
          alignItems="center"
          gridGap="1rem"
          bg="rgba(255, 255, 255, 0.5)"
        >
          <Text
            as="h1"
            fontFamily="body"
            fontWeight="900"
            fontSize={["2.5rem", "3rem"]}
            color="#243E36"
            textAlign="center"
          >
            {headline}
          </Text>
          <CurrentDayHours />
          <Box
            as="a"
            bg="rgba(246, 232, 234, 0.5)"
            p=".5rem"
            borderRadius="50%"
            href={`#${anchor}`}
            transition="0.3s ease-in-out"
            animation={`${upDownAnimation} 4s ease-in-out infinite`}
          >
            <ArrowDownIcon color="#243E36" fontSize="1.5rem" />
          </Box>
        </Box>
        <Box
          position="absolute"
          overflow="hidden"
          h="100%"
          w="100%"
          bottom="0"
          zIndex="-1"
        >
          {bubbles.map((bubble, index) => (
            <Box
              key={bubble.id}
              position="absolute"
              bottom="0"
              left={`${bubble.left}%`}
              width={`${bubble.size}rem`}
              height={`${bubble.size}rem`}
              bg={
                index % 3 === 0
                  ? "rgba(148, 185, 115, 0.3)"
                  : index % 3 === 1
                  ? "rgba(36, 62, 54, 0.3)"
                  : "rgba(237, 100, 166, 0.3)"
              }
              borderRadius="50%"
              animation={`${bubbleAnimation} ${bubble.animationDuration}s linear infinite`}
              transitionDelay={`${bubble.animationDelay}s`}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Hero;
