import type { HTMLChakraProps } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

import type { Merge } from "./types";

type MotionTextProps = Merge<HTMLChakraProps<"p">, HTMLMotionProps<"p">>;

const MotionText: React.FC<MotionTextProps> = motion(chakra.p);

export default MotionText;
