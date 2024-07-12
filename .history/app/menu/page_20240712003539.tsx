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
import Contact from "../components/Contact";
import { Search } from "../components/Search";

export default function Menu() {
  const router = useRouter();
  return (
    <>
      <Hero
        headline={"Menu"}
        anchor={"menu"}
        sub={"Our kitchen closes 2.5-3 hours before close!"}
      />
      <Box
        bg="var(--chakra-colors-gray-50)"
        id="menu"
        bgImg="./bg/bg2.svg"
        bgPos="0 85%"
        bgSize="cover"
        scrollMarginTop="96px"
      >
        <Box maxW="90%" m="auto" p="3.5rem 0" minH="500px" w="100vw">
          <Box w="50%" m="auto">
            <Box
              display="flex"
              flexDir="row"
              justifyContent="left"
              mb="2rem"
              alignItems="left"
            >
              <Text
                as="h2"
                fontSize={["2rem", "2.5rem"]}
                fontFamily="heading"
                fontWeight={700}
                textAlign="left"
                mb="1rem"
              >
                COFFEE
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir="row"
              justifyContent="left"
              mb="2rem"
              alignItems="left"
            >
              <Text
                as="h2"
                fontSize={["2rem", "2.5rem"]}
                fontFamily="heading"
                fontWeight={700}
                textAlign="left"
                mb="1rem"
              >
                SPECIALTY DRINKS
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir="row"
              justifyContent="left"
              mb="2rem"
              alignItems="left"
            >
              <Text
                as="h2"
                fontSize={["2rem", "2.5rem"]}
                fontFamily="heading"
                fontWeight={700}
                textAlign="left"
                mb="1rem"
              >
                BOBA
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir="row"
              justifyContent="left"
              mb="2rem"
              alignItems="left"
            >
              <Text
                as="h2"
                fontSize={["2rem", "2.5rem"]}
                fontFamily="heading"
                fontWeight={700}
                textAlign="left"
                mb="1rem"
              >
                HOT BITES
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir="row"
              justifyContent="left"
              mb="2rem"
              alignItems="left"
            >
              <Text
                as="h2"
                fontSize={["2rem", "2.5rem"]}
                fontFamily="heading"
                fontWeight={700}
                textAlign="left"
                mb="1rem"
              >
                SANDWICHES & SALADS
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir="row"
              justifyContent="left"
              mb="2rem"
              alignItems="left"
            >
              <Text
                as="h2"
                fontSize={["2rem", "2.5rem"]}
                fontFamily="heading"
                fontWeight={700}
                textAlign="left"
                mb="1rem"
              >
                SEASONAL MENU
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir="row"
              justifyContent="left"
              mb="2rem"
              alignItems="left"
            >
              <Text
                as="h2"
                fontSize={["2rem", "2.5rem"]}
                fontFamily="heading"
                fontWeight={700}
                textAlign="left"
                mb="1rem"
              >
                BEER/WINE
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
