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
        bgImg="./bg/AURAGLOW.svg"
        id="how-it-works"
        scrollMarginTop="96px"
        position="relative"
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

          <Box w="70%" mr="auto" mt="4rem">
            <Box display="grid" gridTemplateColumns="150px auto">
              <Box
                display="flex"
                justifyContent="normal"
                alignItems="center"
                alignSelf="center"
              >
                <Text
                  fontWeight="700"
                  fontFamily="heading"
                  fontSize={["1.5rem", "2rem"]}
                  transform="rotate(-90deg)"
                  transformOrigin="center"
                  color="gray"
                >
                  Step 1
                </Text>
              </Box>
              <Text
                as="h3"
                fontSize={["1.25rem", "1.75rem"]}
                fontFamily="body"
                textAlign="left"
              >
                Pay $10 per person for 3 hours during the week ($12 on weekends
                and holidays)
              </Text>
            </Box>
          </Box>
          <Box w="70%" mr="auto" mt="6rem">
            <Box display="grid" gridTemplateColumns="150px auto">
              <Box
                display="flex"
                justifyContent="normal"
                alignItems="center"
                alignSelf="center"
              >
                <Text
                  fontWeight="700"
                  fontFamily="heading"
                  fontSize={["1.5rem", "2rem"]}
                  transform="rotate(-90deg)"
                  transformOrigin="center"
                  color="gray"
                >
                  Step 2
                </Text>
              </Box>
              <Text
                as="h3"
                fontSize={["1.25rem", "1.75rem"]}
                fontFamily="body"
                textAlign="left"
                w="100%"
              >
                Enjoy over 500+ board games
              </Text>
            </Box>
          </Box>

          <Box w="70%" mr="auto" mt="6rem">
            <Box display="grid" gridTemplateColumns="150px auto">
              <Box
                display="flex"
                justifyContent="normal"
                alignItems="center"
                alignSelf="center"
              >
                <Text
                  fontWeight="700"
                  fontFamily="heading"
                  fontSize={["1.5rem", "2rem"]}
                  transform="rotate(-90deg)"
                  transformOrigin="center"
                  color="gray"
                >
                  Step 3
                </Text>
              </Box>
              <Text
                as="h3"
                fontSize={["1.25rem", "1.75rem"]}
                fontFamily="body"
                textAlign="left"
                w="100%"
              >
                Indulge in bubble tea, coffee, beer, sandwiches, or salads while
                you play.
              </Text>
            </Box>
          </Box>

          <Box w="70%" mr="auto" mt="6rem">
            <Box display="grid" gridTemplateColumns="150px auto">
              <Box
                display="flex"
                justifyContent="normal"
                alignItems="center"
                alignSelf="center"
              >
                <Text
                  fontWeight="700"
                  fontFamily="heading"
                  fontSize={["1.5rem", "2rem"]}
                  transform="rotate(-90deg)"
                  transformOrigin="center"
                  color="gray"
                >
                  Step 4
                </Text>
              </Box>
              <Text
                as="h3"
                fontSize={["1.25rem", "1.75rem"]}
                fontFamily="body"
                textAlign="left"
                w="100%"
              >
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
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
