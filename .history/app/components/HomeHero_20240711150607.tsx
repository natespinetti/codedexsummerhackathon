import { Box, Text } from "@chakra-ui/react";

export default function HomeHero() {
  return (
    <>
      <Box
        w="100vw"
        p="2rem"
        display="flex"
        fontFamily="heading"
        flexDir="column"
      >
        <Text
          as="h1"
          fontFamily="body"
          fontWeight="900"
          fontSize="2rem"
          color="#212121"
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
      </Box>
    </>
  );
}
