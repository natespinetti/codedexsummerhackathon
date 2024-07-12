"use client";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  keyframes,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

const bubbleAnimation = keyframes`
  0% {
    transform: translateY(100px) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) scale(1.5);
    opacity: 0;
  }
`;

const bubbles = new Array(20).fill(0).map((_, index) => ({
  id: index,
  size: Math.random() * 3 + 1,
  left: Math.random() * 100,
  animationDuration: Math.random() * 20 + 10,
  animationDelay: Math.random() * 100,
}));
export default function Specials() {
  return (
    <Container
      bg="white"
      bgImg="./bg/bg1.svg"
      bgPos="0 100%"
      bgRepeat="no-repeat"
      maxW="full"
      pos="relative"
      id="specials"
      scrollMarginTop="96px"
      mt={0}
      centerContent
      overflow="hidden"
    >
      {bubbles.map((bubble, index) => (
        <Box
          key={bubble.id}
          position="absolute"
          bottom="0"
          zIndex={0}
          left={`${bubble.left}%`}
          width={`${bubble.size}rem`}
          height={`${bubble.size}rem`}
          bg={
            index % 3 === 0
              ? "rgba(148, 185, 115, 0.3)"
              : index % 3 === 1
              ? "rgba(36, 62, 54, 0.3)"
              : "rgba(237, 100, 166, 0.3)"
          }
          borderRadius="50%"
          animation={`${bubbleAnimation} ${bubble.animationDuration}s linear infinite`}
          transitionDelay={`${bubble.animationDelay}s`}
        />
      ))}
      <Flex zIndex="2" w="100%" justifyContent="center">
        <Box
          bg="#243E36"
          w={["100%", "70%"]}
          color="#94B973"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Box display="flex" flexDir={["column", "row"]} gridGap="4rem">
              <Box>
                <Box>
                  <Text
                    as="h2"
                    fontFamily="heading"
                    fontSize={["2rem", "2.5rem"]}
                    fontWeight={700}
                  >
                    Birthday packages
                  </Text>

                  <Text
                    color="#94B973"
                    fontWeight="600"
                    mt={{ sm: 3, md: 3, lg: 5 }}
                  >
                    $350 for entire backroom
                  </Text>
                  <Text>
                    You get the entire backroom for 3 hours of game time for
                    your party!
                  </Text>
                  <Text
                    color="#94B973"
                    fontWeight="600"
                    mt={{ sm: 10, md: 3, lg: 5 }}
                  >
                    $550 basic package
                  </Text>
                  <Text>
                    Have the entire backroom to yourselves and get pizza and
                    soda for the whole party! For ten people, each additional
                    person is +$30
                  </Text>
                  <Text
                    color="#94B973"
                    fontWeight="600"
                    mt={{ sm: 3, md: 3, lg: 5 }}
                  >
                    $700 premium package
                  </Text>
                  <Text>
                    Have the entire backroom to yourselves with pizza, soda,
                    unlimited bubble tea, unlimited appetizers and each
                    participant gets a Sip & Play goodie bag! For ten people,
                    each additional person is +$45
                  </Text>
                  <Text
                    color="#94B973"
                    fontWeight="600"
                    mt={{ sm: 3, md: 3, lg: 5 }}
                  >
                    For any other large party inquiries, do fill out the form!
                  </Text>
                </Box>
              </Box>
              <Box w="100%" minW={["auto", "350px"]}>
                <Box bg="white" borderRadius="6px" w="100%" p="1rem">
                  <Box m={[2, 8]} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg={"pink.400"}
                          color="white"
                          _hover={{
                            bg: "pink.300",
                          }}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
