import { Box, Text } from "@chakra-ui/react";

export default function HomeHero() {
  return (
    <>
      <Box w="100vw" p="2rem" display="flex" flexDir="column">
        <Text as="h1">
          <Text as="span" color="#95b878" fontWeight="900">
            Sip & Play
          </Text>
          Your Ultimate Board Game Cafe
        </Text>
      </Box>
    </>
  );
}
