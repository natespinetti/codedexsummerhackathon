import Image from "next/image";
import HomeHero from "./components/HomeHero";
import { Box, Text, Button, keyframes } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Box bg="var(--chakra-colors-gray-50)">
        <Box maxW="90%" m="auto" p="2.5rem 0">
          <Text
            as="h2"
            fontSize="2rem"
            fontFamily="heading"
            fontWeight={700}
            textAlign="center"
            mb="1rem"
          >
            How it works
          </Text>
          <Text>
            Bring your friends and family to enjoy over 500+ board games! It's
            just $10 per person for 3 hours of gameplay ($12 on weekends and
            holidays). Savor bubble tea, coffee, beer, sandwiches, or salads
            while you play. Want to secure a table? Make a reservation for $15
            per person for 3 hours.
          </Text>
        </Box>
      </Box>
    </>
  );
}
