"use client";
import { Box, Text } from "@chakra-ui/react";

export default function HowItWorks() {
  return (
    <>
      <Box
        bg="var(--chakra-colors-gray-50)"
        bgImg="./bg/AURAGLOW.svg"
        bgSize="cover"
        id="how-it-works"
        scrollMarginTop="96px"
        position="relative"
      >
        <Box maxW="90%" m="auto" p="3.5rem 0">
          <Text
            as="h2"
            fontSize={["2rem", "2.5rem"]}
            fontFamily="heading"
            fontWeight={700}
            textAlign={["left", "center"]}
            mb="1rem"
          >
            How it works
          </Text>

          <Box
            w={["100%", "60%"]}
            m="auto"
            mt="4rem"
            borderLeft={"6px solid #ED64A6"}
            pl="3rem"
          >
            <Box display="flex">
              <Box display="flex" flexDir="column" w="100%">
                <Text
                  fontWeight="700"
                  fontFamily="heading"
                  fontSize={["1.5rem", "2rem"]}
                  mb="1rem"
                >
                  Step 1
                </Text>

                <Text
                  as="h3"
                  fontSize={["1.25rem", "1.75rem"]}
                  fontFamily="body"
                  textAlign="left"
                >
                  Pay $10 per person for 3 hours during the week ($12 on
                  weekends and holidays)
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            w={["100%", "60%"]}
            m="auto"
            mt="4rem"
            borderLeft={"6px solid #ED64A6"}
            pl="3rem"
          >
            <Box display="flex">
              <Box display="flex" flexDir="column" w="100%">
                <Text
                  fontWeight="700"
                  fontFamily="heading"
                  fontSize={["1.5rem", "2rem"]}
                  mb="1rem"
                >
                  Step 2
                </Text>

                <Text
                  as="h3"
                  fontSize={["1.25rem", "1.75rem"]}
                  fontFamily="body"
                  textAlign="left"
                >
                  Enjoy over 500+ board games
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            w={["100%", "60%"]}
            m="auto"
            mt="4rem"
            borderLeft={"6px solid #ED64A6"}
            pl="3rem"
          >
            <Box display="flex">
              <Box display="flex" flexDir="column" w="100%">
                <Text
                  fontWeight="700"
                  fontFamily="heading"
                  fontSize={["1.5rem", "2rem"]}
                  mb="1rem"
                >
                  Step 3
                </Text>

                <Text
                  as="h3"
                  fontSize={["1.25rem", "1.75rem"]}
                  fontFamily="body"
                  textAlign="left"
                >
                  Indulge in bubble tea, coffee, beer, sandwiches, or salads
                  while you play.
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            w={["100%", "60%"]}
            m="auto"
            mt="4rem"
            borderLeft={"6px solid #ED64A6"}
            pl="3rem"
          >
            <Box display="flex">
              <Box display="flex" flexDir="column" w="100%">
                <Text
                  fontWeight="700"
                  fontFamily="heading"
                  fontSize={["1.5rem", "2rem"]}
                  mb="1rem"
                >
                  Step 4
                </Text>

                <Text
                  as="h3"
                  fontSize={["1.25rem", "1.75rem"]}
                  fontFamily="body"
                  textAlign="left"
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
      </Box>
    </>
  );
}
