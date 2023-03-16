import { howItWorks } from "@/src/utils/constants";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import MotionBox from "../Motion/Box";
import HowItWorksCard from "./Cards/HowItWorksCard";

const HowItWorks = () => {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState(
    <Icon as={FaPlus} boxSize={10} color="#BDBDBD" />
  );
  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: "50vh", transition: { duration: 0.5 } },
  };

  const handleToggle = () => {
    setShow(!show);

    setIcon(
      show ? (
        <Icon as={FaPlus} boxSize={10} color="#BDBDBD"  />
      ) : (
        <Icon as={FaMinus} boxSize={10} color="#BDBDBD"  />
      )
    );
  };

  return (
    <Container
      minW={{ md: "2xl", lg: "3xl", xl: "5xl", "3xl": "6xl" }}
      my={{ base: 6, xl: 20 }}
    >
      <Flex direction={{ base: "column", xl: "row" }} justify="space-between">
        <Box cursor="pointer" onClick={handleToggle}>
          <Flex>
            <Box >
              {icon}
            </Box>
            <Box ml={3}>
              <Heading as="h4" fontSize={{ base: "2xl", xl: "4xl" }}>
                How it Works
              </Heading>
              <Text fontWeight={700} mt={{ base: 2, xl: 6 }}>
                NATTERBASE REMOTE TEAM
              </Text>
            </Box>
          </Flex>
        </Box>
        {show && (
          <MotionBox
            variants={variants}
            initial={{ opacity: 0, x: "-50vh" }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            exit={{
              opacity: 0,
              x: "50vh",
              scale: 0.5,
              rotate: 360,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <VStack spacing={10} mt={{ base: 10, xl: 0 }}>
              {howItWorks?.map((item) => (
                <HowItWorksCard
                  key={item?.heading}
                  icon={item?.icon}
                  title={item?.heading}
                  text={item?.text}
                  hasSpan={item?.span ? true : false}
                  span={item?.span}
                />
              ))}
            </VStack>
          </MotionBox>
        )}
      </Flex>
    </Container>
  );
};

export default HowItWorks;
