import { partners } from "@/src/utils/constants";
import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Partnerships = () => {
  return (
    <Container
      minW={{ md: "2xl", lg: "3xl", xl: "6xl", "3xl": "7xl" }}
      py={{ base: 24, xl: 44 }}
    >
      <Heading
        as="h3"
        fontSize={{ base: "3xl", xl: "6xl" }}
        fontWeight={500}
        textAlign="left"
      >
        Partnerships
      </Heading>
      <Text fontSize={{ base: "lg", xl: "2xl" }} mt={4} width={{ base: "100%", xl: "33rem" }}>
        A powerful ecosystem of market leaders and innovators supports us.
      </Text>
      <Grid templateColumns={{base: "repeat(2, 1fr)", 'xl': "repeat(5, 1fr)"}} gap={6} mt={{base: 6, 'xl': 16}}>
        {partners?.map((partner) => (
          <Flex key={partner?.logo} justify='center' align='center' height='100%' width='100%'   >
            <Image src={partner?.logo} alt={partner?.logo} />
          </Flex>
        ))}
      </Grid>
    </Container>
  );
};

export default Partnerships;
