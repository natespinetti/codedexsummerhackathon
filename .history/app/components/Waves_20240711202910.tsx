import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const WavyBorderComponent = () => {
  return (
    <Box>
      <Box
        position="relative"
        textAlign="center"
        bgGradient="linear(to-r, rgba(84,58,183,1), rgba(0,172,193,1))"
        color="white"
      >
        <Box overflow="hidden" width="100%" height="15vh" position="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
            width="100%"
            height="100%"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </Box>
      </Box>
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
