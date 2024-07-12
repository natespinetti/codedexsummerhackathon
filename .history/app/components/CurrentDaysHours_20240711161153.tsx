import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  PopoverAnchor,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const openingHours: { [key: number]: string } = {
  0: "10am-11pm", //Sunday
  1: "11am-11pm", // Monday
  2: "11am-11pm", // Tuesday
  3: "11am-11pm", // Wednesday
  4: "11am-11pm", // Thursday
  5: "11am-12am", // Friday
  6: "10am-12am", // Saturday
};

export default function CurrentDayHours() {
  const currentDay = new Date().getDay();
  const hours = openingHours[currentDay];
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Box textAlign="center" fontSize="16px">
      <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>
          <Box
            p={2}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            <Text fontWeight="bold">
              Today's Hours:{" "}
              <Text color="#95b878" as="span">
                {hours}
              </Text>
            </Text>
            <ChevronDownIcon />
          </Box>
        </PopoverTrigger>

        <PopoverContent
          border={0}
          boxShadow={"xl"}
          bg={popoverContentBgColor}
          p={4}
          rounded={"xl"}
          minW={"sm"}
        >
          <Box display="flex" flexDir="column" textAlign="left">
            <Text fontWeight="bold">
              Sunday:{" "}
              <Text color="#95b878" as="span">
                10am-11pm
              </Text>
            </Text>
            <Text fontWeight="bold">
              Monday:{" "}
              <Text color="#95b878" as="span">
                11am-11pm
              </Text>
            </Text>
            <Text fontWeight="bold">
              Tuesday:{" "}
              <Text color="#95b878" as="span">
                11am-11pm
              </Text>
            </Text>
            <Text fontWeight="bold">
              Wednesday:{" "}
              <Text color="#95b878" as="span">
                11am-11pm
              </Text>
            </Text>
            <Text fontWeight="bold">
              Thursday:{" "}
              <Text color="#95b878" as="span">
                11am-11pm
              </Text>
            </Text>
            <Text fontWeight="bold">
              Friday:{" "}
              <Text color="#95b878" as="span">
                11am-12am
              </Text>
            </Text>
            <Text fontWeight="bold">
              Saturday:{" "}
              <Text color="#95b878" as="span">
                10am-12am
              </Text>
            </Text>
          </Box>
        </PopoverContent>
      </Popover>
    </Box>
  );
}
