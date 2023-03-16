import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const HowItWorksCard = ({
  icon,
  title,
  text,
  span,
  hasSpan,
}: {
  icon: string;
  title: string;
  text: string;
  span?: string;
  hasSpan?: boolean;
}) => {
  return (
    <Flex
      direction={{ base: "column", xl: "row" }}
      bg="#FFFFFF"
      boxShadow="0px 14px 35px rgba(0, 0, 0, 0.08)"
      rounded="md"
      p={{ base: 4, xl: 12 }}
    >
      <Box width={{ base: 10 }} height={{ base: 10 }}>
        <Image src={icon} alt="talent" width="100%" height="100%" />
      </Box>
      <VStack align="left" ml={10}>
        <Heading as="h5" fontSize="lg">
          {title}
        </Heading>
        <Text fontSize="15px" width={{ base: "100%", xl: "32rem" }}>
          {text}{" "}
          {hasSpan && (
            <Box as="span" fontWeight={700}>
              {span}{" "}
            </Box>
          )}{" "}
        </Text>
      </VStack>
    </Flex>
  );
};

export default HowItWorksCard;
