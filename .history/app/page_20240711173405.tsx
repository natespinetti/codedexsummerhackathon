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
          <Box display="flex" flexDir="row" justifyContent="space-between">
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
          <Box>
            <Box w="60%" display="flex" flexDir="row" gridGap="1rem">
              <Box bgImg="./images/bloomburrow.webp" bgSize="cover" w="40%" />
              <Text>
                Bloomburrow Pre-release is coming soon! Continuing with Monday
                nights as everyone really enjoyed the extra day if the weekend
                ended up being busy. Enjoy the cutest set of the year! 7/26
                Bloomburrow Pre-release 6pm https://square.link/u/vYewrAQG 7/27
                Bloomburrow Pre-release 11am https://square.link/u/v0AzfRyj 7/27
                Bloomburrow Pre-release 5pm https://square.link/u/pIcxnxZO 7/29
                Bloomburrow Pre-release 6pm https://square.link/u/yXIMpJzp
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
