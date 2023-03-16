import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";

import { socials } from "@/src/utils/constants";
import NewsLetterSubscribe from "./NewsLetterSubscribe";
import Link from "next/link";

const Footer = () => {

  return (
    <Box w="full" as="footer">
      <Box position="relative" width="100%" height="100%">
        <Box borderTop="1px solid #C4C4C4" />
        <Container minW={{ md: "2xl", lg: "4xl", xl: "6xl", "3xl": "7xl" }}>
          <Text
            fontSize={{ base: "3xl", xl: "6xl" }}
            fontWeight={500}
            bg="white"
            zIndex={10}
            position="absolute"
            top={{ base: -5, xl: -10 }}
          >
            Start a Project
          </Text>
        </Container>
      </Box>
      <Container minW={{ md: "2xl", lg: "4xl", xl: "6xl", "3xl": "7xl" }}>
        <Box>
          <Flex
            direction={{ base: "column", xl: "row" }}
            fontWeight={700}
            fontSize="lg"
            justify="space-between"
            align={{ base: "left", xl: "center" }}
            mt={{ base: "4rem", "4xl": "9rem" }}
            width="100%"
          >
            <Flex
              direction={{ base: "column", xl: "row" }}
              w={{ base: "100%", xl: "30%" }}
              justify="space-between"
              gap={5}
            >
              <Link href="/contact-us/" rel="noreferrer">
                Contact Us
              </Link>
              <Link href="/privacy-policy/" rel="noreferrer">
                Our Privacy Policy
              </Link>
            </Flex>

            <NewsLetterSubscribe />
          </Flex>
          <Flex
            direction={{ base: "column", xl: "row" }}
            mt={{ base: 16, xl: 20 }}
            mb={20}
            justify="space-between"
            align="center"
            width="100%"
          >
            <Flex justify="space-between" align="center" width='100%'>
              <Text
                fontSize={{ base: "md", xl: "lg" }}
                fontWeight={500}
              >
                &copy; {new Date().getFullYear()} Natterbase In’c
              </Text>
              <Link href="/we-are-hiring" rel="noreferrer">
                <Button
                  bg="rgba(0, 0, 0, 0.02)"
                  border="2px solid rgba(0, 0, 0, 0.5)"
                  h={12}
                  color="rgba(0, 0, 0, .5)"
                  fontSize={{ base: "sm", xl: "md" }}
                >
                  WE&apos;RE HIRING
                </Button>
              </Link>
            </Flex>
            <Flex
              justify={{ base: "center", xl: "inherit" }}
              mt={{ base: 12, xl: 0 }}
            >
              {socials.map((social) => (
                <a key={social.link} href={social.link} target="_blank" rel="noopener noreferrer">
                  <Flex
                    w={8}
                    h={8}
                    mr={2}
                    bg="white"
                    rounded="full"
                    align="center"
                    justify="center"
                  >
                    <Icon as={social.icon} color="rgba(0, 0, 0, .4)" />
                  </Flex>
                </a>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
