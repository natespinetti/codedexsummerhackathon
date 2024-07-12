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
  OrderedList,
} from "@chakra-ui/react";
import HowItWorks from "../components/HowItWorks";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import { Search } from "../components/Search";
import EventsCalendar from "../components/Events";

export const metadata = {
  title: "Events | Sip & Play",
  description: "Your Ultimate Board Game Cafe",
  icons: {
    icon: "/logos/sipnplay.png",
  },
};

export default function Events() {
  return (
    <>
      <Hero headline={"Sip & Play events"} anchor={"events"} />
      <Box
        bg="var(--chakra-colors-gray-50)"
        bgImg="./bg/bg2.svg"
        bgPos="0 85%"
        bgSize="cover"
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
          <Box
            display="flex"
            flexDir={["column", "row"]}
            gridGap="2rem"
            w={["100%", "70%"]}
            m="auto"
            mb="3.5rem"
          >
            <Box
              bg="white"
              borderRadius="12px"
              boxShadow="0 0 10px rgba(0,0,0,0.05)"
              display="flex"
              flexDir="column"
              p="2rem"
              w="100%"
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
              w="100%"
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
            id="events"
            scrollMarginTop="96px"
          >
            <Text
              as="h2"
              fontSize={["2rem", "2.5rem"]}
              fontFamily="heading"
              fontWeight={700}
              textAlign={["left", "center"]}
            >
              Upcoming events
            </Text>
          </Box>
          <Box
            w={["100%", "50%"]}
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
          <Box
            p="3.5rem 2rem"
            bg="rgba(255,255,255,0.75)"
            borderRadius="12px"
            boxShadow="0 0 10px rgba(0,0,0,0.05)"
          >
            <Text mb="1rem">
              Players who make top 8 will receive prizes in store credit and
              promos, and the first 32 registrants will receive a Springleaf
              Drum participation promo! Specific prizing structure to be
              determined based on attendance.
            </Text>
            <Text mb="1rem">
              Join our Sip & Play Discord to stay up to date with all our MTG
              events. Join here
            </Text>
            <Text mb="1rem">
              This is a competitive REL event, and will be staffed by a level 2
              judge and a store tournament organizer. Decklists will be required
              for this event.
            </Text>
            <Text mb="1rem" fontWeight="600" fontFamily="heading">
              Example prizing for 32 attendees:
            </Text>
            <Box display="grid" gridTemplateColumns="60px auto" gridGap=".5rem">
              <Text fontWeight="600" display="flex" justifySelf="flex-end">
                1st)
              </Text>
              <Text>
                $250 Travel Stipend + foil Goblin Guide + non-foil Goblin Guide
                + Regional Championship invitation
              </Text>
            </Box>
            <Box display="grid" gridTemplateColumns="60px auto" gridGap=".5rem">
              <Text fontWeight="600" display="flex" justifySelf="flex-end">
                2nd)
              </Text>
              <Text>$200 store credit + non-foil Goblin Guide</Text>
            </Box>
            <Box display="grid" gridTemplateColumns="60px auto" gridGap=".5rem">
              <Text fontWeight="600" display="flex" justifySelf="flex-end">
                3rd-4th)
              </Text>
              <Text>$125 store credit + non-foil Goblin Guide</Text>
            </Box>
            <Box display="grid" gridTemplateColumns="60px auto" gridGap=".5rem">
              <Text fontWeight="600" display="flex" justifySelf="flex-end">
                5th-8th)
              </Text>
              <Text>$75 store credit + non-foil Goblin Guide</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
