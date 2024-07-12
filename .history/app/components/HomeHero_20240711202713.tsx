"use client";
import { Box, Text, Button, keyframes } from "@chakra-ui/react";
import CurrentDayHours from "./CurrentDaysHours";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ArrowDownIcon,
} from "@chakra-ui/icons";

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

export default function HomeHero() {
  return (
    <>
      <Box position="relative" overflow="hidden" h="100%" w="100%">
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
        <Box
          position="relative"
          w="100vw"
          p="2.5rem"
          display="flex"
          flexDir="column"
          justifyItems="center"
          alignItems="center"
          gridGap="1rem"
          bg="var(--chakra-colors-gray-50)"
          pb="4rem"
        >
          <Text
            as="h1"
            fontFamily="body"
            fontWeight="900"
            fontSize={["2.5rem", "3rem"]}
            color="#243E36"
            textAlign="center"
          >
            <Text
              as="span"
              color="#95b878"
              fontWeight="900"
              fontFamily="heading"
              fontSize={["2.5rem", "3rem"]}
            >
              Sip & Play:
              <br />
            </Text>
            Your Ultimate Board Game Cafe
          </Text>
          <CurrentDayHours />
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
          >
            For large parties (9+ or more people), please email us at{" "}
            <Text as="a" href="mailto:sipnplaynyc@gmail.com">
              sipnplaynyc@gmail.com
            </Text>{" "}
            to inquire about a reservation.
          </Text>
          <Box
            as="a"
            bg="rgba(246, 232, 234, 0.5)"
            p=".5rem"
            borderRadius="50%"
            href="#how-it-works"
            transition="0.3s ease-in-out"
            animation={`${upDownAnimation} 4s ease-in-out infinite`}
          >
            <ArrowDownIcon color="#243E36" fontSize="1.5rem" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
