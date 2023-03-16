import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Platform = () => {
  return (
    <Container minW={{ md: "2xl", lg: "3xl", xl: "5xl", "3xl": "6xl" }} py={44}>
      <Flex
        direction={{ base: "column", xl: "row" }}
        justify="space-between"
        align="center"
        width="100%"
      >
        <VStack width={{ base: "100%", xl: "43%" }} align="left" spacing={10}>
          <Heading as="h3" fontSize={{ base: "3xl", xl: "4xl" }}>
            One Platform For Engineering Needs
          </Heading>
          <Box>
            <Flex fontWeight={500}>
              <Image src="/images/svg/dash.svg" alt="dash symbol" />
              <Heading as="h4" fontSize="2xl" ml={2}>
                {" "}
                Evidence-based vetting
              </Heading>
            </Flex>
            <Text color="#040406" mt={3}>
              We bring together everything that&apos;s required to source and
              deploy a high-performing engineering team to supplement in-house
              teams on a full-time or project basis
            </Text>
          </Box>
          <Box>
            <Flex fontWeight={500}>
              <Image src="/images/svg/dash.svg" alt="dash symbol" />
              <Heading as="h4" fontSize="2xl" ml={2}>
                {" "}
                Tracking
              </Heading>
            </Flex>
            <Text color="#040406" mt={3}>
              Natterbase helps companies monitor work performance, gain insights
              and analytics to control engineering speed, and everything in
              between,{" "}
              <Box as="span" fontWeight={700}>
                You pay for exactly what you get
              </Box>{" "}
            </Text>
          </Box>
        </VStack>
        <Image
          src="/images/svg/platform.svg"
          alt="platform analytics"
          mt={{ base: 10, xl: 0 }}
        />
      </Flex>
    </Container>
  );
};

export default Platform;
