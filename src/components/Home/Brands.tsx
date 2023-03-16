import { brands } from "@/src/utils/constants";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";


const Brands = () => {


  return (
    <Box py={44} px={4}>
    <Container minW={{ md: "2xl", lg: "3xl", xl: "5xl", "3xl": "6xl" }} >
    <VStack>
        <Text
          fontSize={{ base: "2xl", xl: "4xl" }}
          textAlign={{ base: "left", xl: "center" }}
        >
          We provide a community of tested world-class software developers,
          working as a unit on your single product to deliver at
          <Box as="span" textDecoration="underline" ml={2}>
            record speed and with 100% transparency.
          </Box>
        </Text>
      </VStack>
    </Container>
      <Box mt={28}>
        <Heading
          as="h5"
          fontSize="3xl"
          mb={{base: 2, 'xl': 8}}
          fontWeight={400}
          textAlign="center"
        >
          Brands we have worked with
        </Heading>
        <Marquee
          speed={50}
          // @ts-ignore
          continuous={true}
      
        >
          {brands?.map((brand, index) => (
            <Flex
              key={((i) => i)(index)}
              justify="center"
              align="center"
              mr={10}
            >
              <Link href={brand?.website} isExternal>
                <Image
                  src={brand?.logo}
                  alt={brand?.alt}
                
                />
              </Link>
            </Flex>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default Brands;
