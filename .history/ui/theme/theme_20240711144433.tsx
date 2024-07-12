import { extendTheme } from "@chakra-ui/react";
import { fonts } from "./fonts";

const overrides = {
  fonts,
};

export const SPTheme = extendTheme(overrides);
