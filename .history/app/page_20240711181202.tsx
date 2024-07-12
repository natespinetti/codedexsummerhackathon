"use client";
import HomeHero from "./components/HomeHero";
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
          <Box
            display="flex"
            flexDir="row"
            justifyContent="space-between"
            mb="2rem"
          >
            <Text
              as="h2"
              fontSize={["2rem", "2.5rem"]}
              fontFamily="heading"
              fontWeight={700}
              textAlign="left"
              mb="1rem"
            >
              What's happening?
            </Text>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              href={"/"}
              _hover={{
                bg: "pink.300",
              }}
            >
              See more
            </Button>
          </Box>
          <Box display="flex" flexDir={["column", "row"]} gridGap="4rem">
            <Box
              w={["100%", "60%"]}
              display="flex"
              flexDir="column"
              gridGap="2rem"
              borderRadius="12px"
              overflow="hidden"
            >
              <Box maxH="350px" w="100%" overflow="hidden" borderRadius="12px">
                <Image
                  src="./images/bloomburrow4.webp"
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
                  Continuing with Monday nights as everyone really enjoyed the
                  extra day if the weekend ended up being busy. Enjoy the cutest
                  set of the year!
                </Text>
                <UnorderedList spacing={2}>
                  <ListItem>
                    <Text
                      textDecoration="underline"
                      as="a"
                      target="_blank"
                      href="https://square.link/u/vYewrAQG"
                    >
                      7/26 Bloomburrow Pre-release 6pm
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text
                      textDecoration="underline"
                      as="a"
                      target="_blank"
                      href="https://square.link/u/v0AzfRyj"
                    >
                      7/27 Bloomburrow Pre-release 11am
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text
                      textDecoration="underline"
                      as="a"
                      target="_blank"
                      href="https://square.link/u/pIcxnxZO"
                    >
                      7/27 Bloomburrow Pre-release 5pm
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text
                      textDecoration="underline"
                      as="a"
                      target="_blank"
                      href="https://square.link/u/yXIMpJzp"
                    >
                      7/29 Bloomburrow Pre-release 6pm
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Box
              w={["100%", "40%"]}
              display="flex"
              flexDir="column"
              gridGap="2rem"
              borderRadius="12px"
              overflow="hidden"
            >
              <Box maxH="350px" w="100%" overflow="hidden" borderRadius="12px">
                <Image
                  src="./images/lorcana.webp"
                  alt="Lorcana cover art"
                  w="100%"
                />
              </Box>
              <Box>
                <Text
                  as="h3"
                  fontWeight="700"
                  fontSize="1.75rem"
                  fontFamily="heading"
                  mb="1rem"
                >
                  Want to play the new Disney trading card game?
                </Text>
                <Text mb="1rem">
                  We're hosting a Lorcana learn to play event on July 22nd 6pm!
                  Just grab a starter deck at Sip & Play and we'll have players
                  on hand to teach you.
                </Text>
                <Text mb="1rem">Excited to see you there!</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
