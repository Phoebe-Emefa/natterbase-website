import type { HTMLChakraProps } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

import type { Merge } from "./types";

type MotionImageProps = Merge<HTMLChakraProps<"img">, HTMLMotionProps<"img">>;

const MotionImage: React.FC<MotionImageProps> = motion(chakra.img);

export default MotionImage;
