import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ClientCard = ({
  name,
  review,
  position,
  company,
}: {
  name: string;
  review: string;
  position: string;
  company: string;
}) => {
  return (
    <VStack
      justify="space-between"
      align="center"
      bg="#FFFFFF"
      rounded="md"
      boxShadow="0px 14px 35px rgba(0, 0, 0, 0.08)"
      px={{ base: 4, xl: 28 }}
      py={14}
      width="full"
      spacing={3}
    >
      <Box width={{base: '2rem', 'xl': "4rem"}} height={{base: '1.5rem', 'xl': "3rem"}}>
        <Image
          src="/images/svg/quote.svg"
          alt="quote"
          maxWidth="100%"
          height="100%"
        />
      </Box>
      <Flex
        justify="center"
        align="center"
        textAlign="center"
        color="#4F4F4F"
        width={{ base: "100%", xl: "45%" }}
      >
        {review}
      </Flex>
      <Box>
        <Text fontSize="xl">{name}</Text>
        <Text color="#BDBDBD" fontSize="lg">{`${position} of ${company}`}</Text>
      </Box>
    </VStack>
  );
};

export default ClientCard;
