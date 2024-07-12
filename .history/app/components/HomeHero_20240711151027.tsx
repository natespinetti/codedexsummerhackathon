import { Box, Text, Button } from "@chakra-ui/react";

export default function HomeHero() {
  return (
    <>
      <Box
        w="100vw"
        p="2rem"
        display="flex"
        flexDir="column"
        justifyItems="center"
        alignItems="center"
      >
        <Text
          as="h1"
          fontFamily="body"
          fontWeight="900"
          fontSize="2rem"
          color="#243E36"
          textAlign="center"
        >
          <Text
            as="span"
            color="#95b878"
            fontWeight="900"
            fontFamily="heading"
            fontSize="2rem"
          >
            Sip & Play:
            <br />
          </Text>
          Your Ultimate Board Game Cafe
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
        <Text fontSize="14px">
          For large parties (9+ or more people), please email us at
          sipnplaynyc@gmail.com to inquire about a reservation.
        </Text>
      </Box>
    </>
  );
}
