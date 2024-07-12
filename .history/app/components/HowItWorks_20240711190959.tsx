"use client";
import {
  Box,
  Text,
  Button,
  keyframes,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import CurrentDayHours from "./CurrentDaysHours";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ArrowDownIcon,
} from "@chakra-ui/icons";

export default function HowItWorks() {
  return (
    <>
      <Box
        bg="var(--chakra-colors-gray-50)"
        id="how-it-works"
        scrollMarginTop="96px"
      >
        <Box maxW="90%" m="auto" p="2.5rem 0">
          <Text
            as="h2"
            fontSize={["2rem", "2.5rem"]}
            fontFamily="heading"
            fontWeight={700}
            textAlign="center"
            mb="1rem"
          >
            How it works
          </Text>
          <UnorderedList
            spacing={2}
            fontSize={["1rem", "1.25rem"]}
            w={["90%", "60%"]}
            m="auto"
          >
            <ListItem>
              Pay $10 per person for 3 hours during the week ($12 on weekends
              and holidays)
            </ListItem>
            <ListItem>Enjoy over 500+ board games</ListItem>
            <ListItem>
              Indulge in bubble tea, coffee, beer, sandwiches, or salads while
              you play.
            </ListItem>
            <ListItem>
              Want to secure a table?{" "}
              <Text
                as="a"
                href="https://www.exploretock.com/sipnplay/"
                target="_blank"
                textDecoration="underline"
              >
                Make a reservation
              </Text>{" "}
              for $15 per person for 3 hours.
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </>
  );
}
