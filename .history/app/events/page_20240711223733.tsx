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
import EventsCalendar from "../components/Events";

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
        <Box maxW="90%" m="auto" p="3.5rem 0" minH="500px">
          <Box
            display="flex"
            flexDir="row"
            justifyContent="center"
            mb="1rem"
            alignItems="center"
          >
            <Text
              as="h2"
              fontSize={["2rem", "2.5rem"]}
              fontFamily="heading"
              fontWeight={700}
              textAlign="center"
            >
              Booster boxes
            </Text>
          </Box>
          <Box display="flex" flexDir={["column", "row"]}>
            <Box
              bg="white"
              borderRadius="12px"
              boxShadow="0 0 10px rgba(0,0,0,0.05)"
              display="flex"
              flexDir="column"
              p="2rem"
            >
              <Text
                fontSize={["1.5rem", "1.75rem"]}
                fontFamily="heading"
                fontWeight={600}
                mb=".5rem"
              >
                Collector booster boxes
              </Text>
              <Text fontSize={["1.25rem", "1.5rem"]} fontFamily="body">
                Members: $395
              </Text>
              <Text
                as="a"
                href="https://square.link/u/a6g387wk"
                textDecor="underline"
                target="_blank"
                fontSize={["1.25rem", "1.5rem"]}
                fontFamily="body"
              >
                Non-members: $420
              </Text>
            </Box>
            <Box
              bg="white"
              borderRadius="12px"
              boxShadow="0 0 10px rgba(0,0,0,0.05)"
              display="flex"
              flexDir="column"
              p="2rem"
            >
              <Text
                fontSize={["1.5rem", "1.75rem"]}
                fontFamily="heading"
                fontWeight={600}
                mb=".5rem"
              >
                Play booster boxes
              </Text>
              <Text fontSize={["1.25rem", "1.5rem"]} fontFamily="body">
                Members: $255
              </Text>
              <Text
                as="a"
                href="https://square.link/u/NnaDbp02"
                textDecor="underline"
                target="_blank"
                fontSize={["1.25rem", "1.5rem"]}
                fontFamily="body"
              >
                Non-members: $270
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDir="row"
            justifyContent="center"
            mb="1rem"
            alignItems="center"
          >
            <Text
              as="h2"
              fontSize={["2rem", "2.5rem"]}
              fontFamily="heading"
              fontWeight={700}
              textAlign="center"
            >
              Upcoming events
            </Text>
          </Box>
          <Box
            w="50%"
            m="auto"
            display="flex"
            flexDir="column"
            alignItems="center"
            gridGap="1rem"
            mb="1rem"
          >
            <Text>
              Want to join the Sip & Play community? All of the action is on
              Discord!
            </Text>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              href={"https://discord.gg/bdURvWC"}
              target="_blank"
              _hover={{
                bg: "pink.300",
              }}
            >
              Join the Discord
            </Button>
          </Box>
          <EventsCalendar />
        </Box>
      </Box>
    </>
  );
}
