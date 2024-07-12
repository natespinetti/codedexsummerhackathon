"use client";
import HomeHero from "../components/HomeHero";
import {
  Box,
  Text,
  Button,
  keyframes,
  Image,
  List,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import HowItWorks from "../components/HowItWorks";
import { useRouter } from "next/navigation";
import Hero from "../components/Hero";

export default function About() {
  const router = useRouter();
  return (
    <>
      <Hero headline={"About"} anchor={"our-story"} />
      <Box bg="var(--chakra-colors-gray-50)" id="our-story">
        <Box maxW="90%" m="auto" p="2.5rem 0">
          <Box
            display="flex"
            flexDir="row"
            justifyContent="space-between"
            mb="2rem"
            alignItems="center"
          >
            <Text
              as="h2"
              fontSize={["2rem", "2.5rem"]}
              fontFamily="heading"
              fontWeight={700}
              textAlign="left"
              mb="1rem"
            >
              Our story
            </Text>
          </Box>
          <Box display="flex" flexDir={["column", "row"]} gridGap="4rem">
            <Box
              w={["100%"]}
              display="flex"
              flexDir={["column", "row"]}
              gridGap="2rem"
              borderRadius="12px"
              overflow="hidden"
            >
              <Box maxH="350px" w="100%" overflow="hidden" borderRadius="12px">
                <Image
                  src="./images/sipnplayabout.webp"
                  alt="Bloomburrow cover art"
                />
              </Box>
              <Box>
                <Text
                  as="h3"
                  fontWeight="700"
                  fontSize={["1.5rem", "1.75rem"]}
                  fontFamily="heading"
                  mb="1rem"
                >
                  Bloomburrow Pre-release is coming soon!
                </Text>
                <Text mb="1rem">
                  Founder, Jonathan Li, shares a passion for board games, boba,
                  and delicious food, so he combined them all to become Sip &
                  Play, Park Slope’s first board game cafe. It is a
                  straightforward concept, come in with your friends and family
                  to play any board game from our library of 300+ games! We hope
                  when you visit, you also enjoy our coffee, espresso, boba,
                  sandwiches, and snacks!
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
