import { smartSystem } from "@/src/utils/constants";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import MotionBox from "../../Motion/Box";
import MotionHeading from "../../Motion/Heading";
import MotionImage from "../../Motion/Image";

const DesktopView = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <Box>
      {smartSystem?.map((item, index) => (
        <Flex key={item?.title} justify="space-between" mt={16}>
          <Flex>
            {selectedItem === index && (
              <MotionImage
                src={item?.image}
                alt={item?.imageAlt}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}

            <MotionHeading
              as="h4"
              whileHover={{ scale: 1.1 }}
              fontSize="4xl"
              ml={8}
              color={selectedItem === index ? "black" : "rgba(0, 0, 0, .1)"}
              cursor="pointer"
              onClick={() => setSelectedItem(index)}
            >
              {item?.title}
            </MotionHeading>
          </Flex>

          {selectedItem === index && (
            <MotionBox
              initial={{ opacity: 0, x: "-50vw" }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, x: "50vw", transition: { duration: 0.5 } }}
              width="40rem"
            >
              <Text fontSize="2xl">{item?.text}</Text>
              {item?.subText && (
                <Text fontSize="2xl" mt={4}>
                  {item?.subText}
                </Text>
              )}
            </MotionBox>
          )}
        </Flex>
      ))}
    </Box>
  );
};

export default DesktopView;
