import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const WavyBorderComponent = () => {
  return (
    <Box pos="absolute" zIndex="1">
      <Box
        height="20vh"
        textAlign="center"
        bg="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontFamily="'Lato', sans-serif"
        fontSize="14px"
        color="#333333"
      ></Box>
    </Box>
  );
};

export default WavyBorderComponent;
