"use client";
import Image from "next/image";
import HomeHero from "./components/HomeHero";
import {
  Box,
  Text,
  Button,
  keyframes,
  ListItem,
  List,
  UnorderedList,
} from "@chakra-ui/react";
import HowItWorks from "./components/HowItWorks";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <HomeHero />
      <HowItWorks />
      <Box bg="var(--chakra-colors-gray-50)">
        <Box maxW="90%" m="auto" p="2.5rem 0">
          <Box>
            <Text
              as="h2"
              fontSize="2.5rem"
              fontFamily="heading"
              fontWeight={700}
              textAlign="left"
              mb="1rem"
            >
              What's happening?
            </Text>
            <Button as="a" href="/">
              See more
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
