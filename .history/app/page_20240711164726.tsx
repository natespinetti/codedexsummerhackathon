import Image from "next/image";
import HomeHero from "./components/HomeHero";
import { Box, Text, Button, keyframes } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Box bg="var(--chakra-colors-gray-50)">
        <Box maxW="90%" m="auto" p="3.5rem 0">
          <Text
            as="h2"
            fontSize="2rem"
            fontFamily="heading"
            fontWeight={700}
            textAlign="center"
          >
            How it works
          </Text>
        </Box>
      </Box>
    </>
  );
}
