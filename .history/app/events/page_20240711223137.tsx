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
              Upcoming events
            </Text>
          </Box>
          <Box
            w="50%"
            m="auto"
            display="flex"
            flexDir="column"
            alignItems="center"
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
