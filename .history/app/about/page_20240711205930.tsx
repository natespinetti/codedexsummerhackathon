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
              <Box w="40%" overflow="hidden" borderRadius="12px">
                <Image
                  src="./images/sipnplayabout.webp"
                  alt="Bloomburrow cover art"
                />
              </Box>
              <Box w="60%">
                <Text
                  as="h3"
                  fontWeight="700"
                  fontSize={["1.5rem", "1.75rem"]}
                  fontFamily="heading"
                  mb="1rem"
                  color="#243E36"
                >
                  Park Slope’s first board game cafe!
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
              mt="4rem"
            >
              <Box w="60%">
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
                  border="#ED64A6 solid 1px"
                  href={"https://www.exploretock.com/sipnplay/"}
                  _hover={{
                    bg: "pink.300",
                  }}
                >
                  Press releases
                </Button>
              </Box>
              <Box w="40%" overflow="hidden" borderRadius="12px">
                <Image
                  src="./images/sipnplayabout.webp"
                  alt="Bloomburrow cover art"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
