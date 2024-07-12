"use client";
import { Box, Text } from "@chakra-ui/react";
import Hero from "../components/Hero";
import { Search } from "../components/Search";

export default function BoardGames() {
  return (
    <>
      <Hero headline={"Board games"} anchor={"board-games"} />
      <Box
        bg="var(--chakra-colors-gray-50)"
        id="board-games"
        bgImg="./bg/bg2.svg"
        bgPos="0 85%"
        bgSize="contain"
        scrollMarginTop="96px"
      >
        <Box maxW="90%" m="auto" p="3.5rem 0" minH="500px" w="100vw">
          {/* Heading */}
          <Box
            display="flex"
            flexDir="row"
            justifyContent="center"
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
              Search through the games we have to offer
            </Text>
          </Box>
          {/* Search box and results */}
          <Search />
        </Box>
      </Box>
    </>
  );
}
