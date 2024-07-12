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
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Hero headline={"About"} anchor={"our-story"} />
      <Box
        bg="var(--chakra-colors-gray-50)"
        id="our-story"
        scrollMarginTop="96px"
      >
        <Box maxW="90%" m="auto" p="3.5rem 0">
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
          <Box
            display="flex"
            flexDir={["column", "row"]}
            gridGap="4rem"
            alignItems="center"
          >
            <Box
              w={["100%"]}
              display="flex"
              flexDir={["column", "row"]}
              gridGap="2rem"
              borderRadius="12px"
              overflow="hidden"
            >
              <Box w={["100%", "40%"]} overflow="hidden" borderRadius="12px">
                <Image
                  src="./images/sipnplayabout.webp"
                  alt="Bloomburrow cover art"
                />
              </Box>
              <Box w={["100%", "60%"]}>
                <Text
                  as="h3"
                  fontWeight="700"
                  fontSize={["1.5rem", "1.75rem"]}
                  fontFamily="heading"
                  mb="1rem"
                  color="#243E36"
                >
                  Park Slope&apos;s first board game cafe!
                </Text>
                <Text mb="1rem">
                  Founder, Jonathan Li, shares a passion for board games, boba,
                  and delicious food, so he combined them all to become Sip &
                  Play, Park Slope&apos;s first board game cafe. It is a
                  straightforward concept, come in with your friends and family
                  to play any board game from our library of 300+ games! We hope
                  when you visit, you also enjoy our coffee, espresso, boba,
                  sandwiches, and snacks!
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDir={["column", "row"]}
            gridGap="4rem"
            alignItems="center"
          >
            <Box
              w={["100%"]}
              display="flex"
              flexDir={["column", "row"]}
              gridGap="2rem"
              borderRadius="12px"
              overflow="hidden"
              mt={["2rem", "6rem"]}
            >
              <Box w={["100%", "60%"]}>
                <Text
                  as="h3"
                  fontWeight="700"
                  fontSize={["1.5rem", "1.75rem"]}
                  fontFamily="heading"
                  mb="1rem"
                  color="#243E36"
                >
                  What other's have to say
                </Text>
                <Text mb="1rem">
                  The coffee shop-turned-gamer's-paradise will let customers
                  rent out time to play board games while sipping on drinks and
                  snacking on its menu. Gamers can choose from the cafe's
                  library of 200 board games — which owner Jonathan Li says is
                  still growing — or bring their own games from home.
                </Text>
                <Box display="flex" flexDir="row" gridGap="1rem">
                  <Button
                    as={"a"}
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"pink.400"}
                    href={
                      "https://patch.com/new-york/parkslope/board-game-cafe-opens-park-slopes-fifth-avenue"
                    }
                    target="_blank"
                    _hover={{
                      bg: "pink.300",
                    }}
                  >
                    Read the article
                  </Button>
                  <Button
                    as={"a"}
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    bg={"transparent"}
                    color="#243E36"
                    border="#ED64A6 solid 1px"
                    href={"https://www.exploretock.com/sipnplay/"}
                    _hover={{
                      bg: "pink.300",
                    }}
                  >
                    Press releases
                  </Button>
                </Box>
              </Box>
              <Box
                w={["100%", "40%"]}
                h="221px"
                overflow="hidden"
                borderRadius="12px"
              >
                <Image src="./images/about2.webp" alt="Bloomburrow cover art" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Contact />
    </>
  );
}
