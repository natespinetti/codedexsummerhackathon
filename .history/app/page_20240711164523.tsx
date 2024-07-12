import Image from "next/image";
import HomeHero from "./components/HomeHero";
import { Box, Text, Button, keyframes } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Box bg="rgba(246, 232, 234, 0.5)">
        <Text as="h2">How it works</Text>
      </Box>
    </>
  );
}
