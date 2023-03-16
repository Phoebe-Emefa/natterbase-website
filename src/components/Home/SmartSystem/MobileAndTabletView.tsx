import { useInView } from "react-intersection-observer";
import React, { useState } from "react";
import { Variants } from "framer-motion";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import MotionBox from "../../Motion/Box";
import MotionText from "../../Motion/Text";
import MotionImage from "../../Motion/Image";
import { smartSystem } from "@/src/utils/constants";

type Item = {
  title: string;
  text: string;
  mobileImage: string;
  imageAlt: string;
  subText?: string;
};

type ItemProps = {
  item: Item;
  isSelected: boolean;
  onSelect: () => void;
};

const Item = ({ item, onSelect }: ItemProps) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Box ref={ref} mt={20}>
      <MotionBox
        className="reveal"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.7 }}
      >
        <Flex>
          <MotionImage
            src={item.mobileImage}
            alt={item?.imageAlt}
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
          />
          <Heading as="h3" fontSize="3xl" fontWeight={500} ml={6}>
            {item.title}
          </Heading>
        </Flex>
        <MotionBox mt={4}>
          <Text fontSize="lg">{item.text}</Text>
          {item?.subText && (
            <Text fontSize="lg" mt={3}>
              {item.subText}
            </Text>
          )}
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

const MobileAndTabletView = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  return (
    <Box>
      {smartSystem?.map((item, index) => (
        <Item
          key={item.title}
          item={item}
          isSelected={selectedItem === index}
          onSelect={() => setSelectedItem(index)}
        />
      ))}
    </Box>
  );
};

export default MobileAndTabletView;
