"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Button,
  Image,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d48423.28708097213!2d-73.98076851318362!3d40.66393288184943!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x89c25b963c296a77%3A0x33cab105836ef465!2sSip%20%26%20Play%2C%20471%205th%20Ave%2C%20Brooklyn%2C%20NY%2011215!3m2!1d40.668128599999996!2d-73.9869454!5e0!3m2!1sen!2sus!4v1720729656891!5m2!1sen!2sus"
        width="100%"
        height="200"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Box display="flex" flexDir="row" alignItems="center" gridGap="2rem">
            <Image
              maxW="100px"
              src="/logos/sipnplay2.png"
              alt="Sip & Play Logo"
            />
            <Box>
              <Text fontWeight={700} fontSize="20px" pb="1rem">
                Ready to play?
              </Text>
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"pink.400"}
                href={"https://www.exploretock.com/sipnplay/"}
                target="_blank"
                _hover={{
                  bg: "pink.300",
                }}
              >
                Make a reservation
              </Button>
            </Box>
          </Box>
          <Stack direction={"row"} spacing={6}>
            <Box as="a" href={"#"}>
              Home
            </Box>
            <Box as="a" href={"#"}>
              About
            </Box>
            <Box as="a" href={"#"}>
              Menu
            </Box>
            <Box as="a" href={"#"}>
              Board games
            </Box>
            <Box as="a" href={"#"}>
              Gift cards
            </Box>
          </Stack>
          <Box
            display="flex"
            flexDir="row"
            gridGap="2rem"
            fontSize="14px"
            mt="1rem"
          >
            <Text as="a" href={"mailto:sipnplaynyc@gmail.com"}>
              sipnplaynyc@gmail.com
            </Text>
            <Text as="a" href={"tel:718-971-1684"}>
              718-971-1684
            </Text>
            <Text
              as="a"
              target="_blank"
              href={
                "https://www.google.com/maps/dir//471+5th+Ave,+Brooklyn,+NY+11215/@40.6680993,-74.0693463,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25b963c296a77:0x33cab105836ef465!2m2!1d-73.9869454!2d40.6681286?entry=ttu"
              }
            >
              471 5th Ave. Brooklyn, NY 11215
            </Text>
          </Box>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text>© 2024 by Sip & Play. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Instagram"}
                href={"https://www.instagram.com/sipnplaynyc/?hl=en"}
              >
                <FaInstagram />
              </SocialButton>
              <SocialButton
                label={"Facebook"}
                href={"https://www.facebook.com/sipnplaynyc/"}
              >
                <FaFacebook />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
