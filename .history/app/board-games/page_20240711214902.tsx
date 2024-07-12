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

export default function BoardGames() {
  const router = useRouter();
  return (
    <>
      <Hero headline={"Board games"} anchor={"board-games"} />
      <Box
        bg="var(--chakra-colors-gray-50)"
        id="board-games"
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
              textAlign="center"
              mb="1rem"
            >
              View what we have to offer
            </Text>
          </Box>
          <Search />
        </Box>
      </Box>
    </>
  );
}
