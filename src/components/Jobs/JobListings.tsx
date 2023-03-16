import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const JobListings = () => {
  return (
    <Container minW={{ md: "2xl", lg: "3xl", xl: "5xl", "3xl": "6xl" }}  py={44}>
      <VStack spacing={6}>
        <Heading as="h3" fontSize={{base: '2xl', 'xl': "4xl"}}>
          Available Jobs
        </Heading>
        <Text fontSize={{base: 'md', 'xl': "xl"}} textAlign='center'>Sorry, there are currently no jobs available</Text>
      </VStack>
    
    </Container>
  );
};

export default JobListings;
