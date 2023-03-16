import type { HTMLChakraProps } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

import type { Merge } from "./types";

type MotionHeadingProps = Merge<HTMLChakraProps<"h2">, HTMLMotionProps<"h2">>;

const MotionHeading: React.FC<MotionHeadingProps> = motion(chakra.h2);

export default MotionHeading;
