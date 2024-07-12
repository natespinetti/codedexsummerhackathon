import React, { useState } from "react";
import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
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

export default function MenuNav() {
  return (
    <Box pos="fixed" zIndex={2} w="100%">
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
        <MenuList minWidth="100vw">
          <MenuItem pl="2rem" as="a" href="#coffee">
            <Stack direction={"row"} align={"center"}>
              <Box>
                <Text
                  transition={"all .3s ease"}
                  _groupHover={{ color: "pink.400" }}
                  fontWeight={500}
                >
                  Coffee
                </Text>
              </Box>
              <Flex
                transition={"all .3s ease"}
                transform={"translateX(-10px)"}
                opacity={0}
                _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
                justify={"flex-end"}
                align={"center"}
                flex={1}
              >
                <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
              </Flex>
            </Stack>
          </MenuItem>
          <MenuItem pl="2rem" as="a" href="#specialty">
            Specialty drinks
          </MenuItem>
          <MenuItem pl="2rem" as="a" href="#boba">
            Boba
          </MenuItem>
          <MenuItem pl="2rem" as="a" href="#hot-bites">
            Hot bites
          </MenuItem>
          <MenuItem pl="2rem" as="a" href="#sandwiches">
            Sandwiches & salads
          </MenuItem>
          <MenuItem pl="2rem" as="a" href="#seasonal">
            Seasonal specials
          </MenuItem>
          <MenuItem pl="2rem" as="a" href="#beer-wine">
            Beer/wine
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
