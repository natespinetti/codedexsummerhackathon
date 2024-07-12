import React, { useState } from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
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

export default function MenuNav() {
  return (
    <Box pos="fixed" zIndex={10} w="100%">
      <Menu>
        <MenuButton
          w="100%"
          borderRadius="0"
          bg="#F6E8EA"
          pl="0"
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          View menu
        </MenuButton>
        <MenuList>
          <MenuItem as="a" href="#coffee">
            Coffee
          </MenuItem>
          <MenuItem as="a" href="#specialty">
            Specialty drinks
          </MenuItem>
          <MenuItem as="a" href="#boba">
            Boba
          </MenuItem>
          <MenuItem as="a" href="#hot-bites">
            Hot bites
          </MenuItem>
          <MenuItem as="a" href="#sandwiches">
            Sandwiches & salads
          </MenuItem>
          <MenuItem as="a" href="#seasonal">
            Seasonal specials
          </MenuItem>
          <MenuItem as="a" href="#beer-wine">
            Beer/wine
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
