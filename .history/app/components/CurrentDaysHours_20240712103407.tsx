import React from "react";
import { Box, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

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
  const { isOpen, onOpen, onClose } = useDisclosure();

  const currentDay = new Date().getDay(); // get day
  const hours = openingHours[currentDay]; // select which hours to display based on day
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  // handle open and close of popover
  const handleItemClick = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <Box textAlign="center" fontSize="16px" zIndex="2" overflow="inherit">
      <Popover
        trigger={"hover"}
        placement={"bottom-start"}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
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
            {/* This is whats displayed with no interaction */}
            <Box
              display="flex"
              flexDir="row"
              gridGap=".5rem"
              alignItems="center"
              onClick={handleItemClick}
            >
              <Text
                fontWeight="bold"
                fontSize={["1rem", "1.5rem"]}
                cursor="pointer"
              >
                Today&apos;s Hours:{" "}
                <Text color="#95b878" as="span">
                  {hours}
                </Text>
              </Text>
              <ChevronDownIcon
                fontSize={["1rem", "2rem"]}
                transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                transition="transform 0.2s"
              />
            </Box>
          </Box>
        </PopoverTrigger>

        {/* List all business hours in popover */}
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
