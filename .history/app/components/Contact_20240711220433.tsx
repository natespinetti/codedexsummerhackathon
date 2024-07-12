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
export default function Contact() {
  return (
    <Container
      bg="white"
      bgImg="./bg/bg1.svg"
      bgPos="0 100%"
      bgRepeat="no-repeat"
      maxW="full"
      pos="relative"
      id="contact"
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
          w="60%"
          color="#94B973"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Box display="flex" flexDir={["column", "row"]} gridGap="1rem">
              <Box>
                <Box>
                  <Text
                    as="h2"
                    fontFamily="heading"
                    fontSize={["2rem", "2.5rem"]}
                    fontWeight={700}
                  >
                    Contact
                  </Text>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#243E36">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="fit-content"
                        variant="ghost"
                        color="#243E36"
                        as="a"
                        href={"tel:718-971-1684"}
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#243E36" size="20px" />}
                      >
                        +1-718-971-1684
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="fit-content"
                        variant="ghost"
                        color="#243E36"
                        as="a"
                        href={"mailto:sipnplaynyc@gmail.com"}
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#243E36" size="20px" />}
                      >
                        sipnplaynyc@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="fit-content"
                        variant="ghost"
                        color="#243E36"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        as="a"
                        href="https://www.google.com/maps/dir//471+5th+Ave,+Brooklyn,+NY+11215/@40.6680993,-74.0693463,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25b963c296a77:0x33cab105836ef465!2m2!1d-73.9869454!2d40.6681286?entry=ttu"
                        target="_blank"
                        leftIcon={<MdLocationOn color="#243E36" size="20px" />}
                      >
                        471 5th Ave. Brooklyn, NY 11215
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </Box>
              <Box w="100%">
                <Box bg="white" borderRadius="lg" w="100%" p="1rem">
                  <Box m={8} color="#0B0E3F">
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
