import {
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const OurOffice = () => {
  return (
    <Container minW={{ md: "2xl", lg: "3xl", xl: "5xl", "3xl": "6xl" }} mb={44}>
      <Heading as="h2" fontSize={{ base: "3xl", xl: "6xl" }}>
        Our Office
      </Heading>
      <Text
        width={{ base: "100%", xl: "32rem" }}
        mt={4}
        fontSize={{ base: "lg", xl: "2xl" }}
      >
        Our management tool keeps your project on track and on schedule.
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }}
        columnGap={{ base: 5, xl: 20 }}
        rowGap={{ base: 10, xl: 16 }}
        ml={{ base: 0, xl: 60 }}
        mt={{ base: 10, xl: 20 }}
      >
        <GridItem>
          <VStack align="left" spacing={{base: 2, xl: 5}}>
            <Heading as="h4" fontSize={{ base: "xl", xl: "2xl" }}>
              North American Office
            </Heading>
            <Text
              fontSize={{ base: "lg", xl: "2xl" }}
              width={{ base: "100%", xl: "22rem" }}
              color="#828282"
            >
              2 Collins Ave, Bloomfield, New Jersey, USA.
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack align="left" spacing={{base: 2, xl: 5}}>
            <Heading as="h4" fontSize={{ base: "xl", xl: "2xl" }}>
              African Office
            </Heading>
            <Text
              fontSize={{ base: "lg", xl: "2xl" }}
              width={{ base: "100%", xl: "22rem" }}
              color="#828282"
            >
             10 Hughes Ave, Alagomeji, Lagos Nigeria.
            </Text>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default OurOffice;
