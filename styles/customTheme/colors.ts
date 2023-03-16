import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors = {
  primary: "#000000",
  gray: {
    1: "#4F4F4F",
    2: "#BDBDBD",
    bg: "#F2F2F2",
    800: "rgba(23, 23, 23, 0.8)",
    900: "#171717",
  },
};

/** override chakra colors here */
const overriddenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overriddenChakraColors,
  ...extendedColors,
};

export default colors;
