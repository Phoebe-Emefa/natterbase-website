import Layout from "@/src/components/Layout";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Read our privacy poloicy" />
        <meta property="og:title" content="Contact Us - Natterbase Website" />
        <meta property="og:description" content="Read our privacy poloicy" />
        <meta
          property="og:url"
          content="https://natterbase.com/privacy-policy"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout hasHeader={true}>
        <Container
          minW={{ md: "2xl", lg: "3xl", xl: "5xl", "3xl": "6xl" }}
          my={44}
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", xl: "6xl" }}
            textAlign="center"
          >
            Privacy at a Glance
          </Heading>
          <VStack
            align="left"
            mt={{ base: 10, xl: 32 }}
            spacing={{ base: 10, xl: 20 }}
          >
            <Box>
              <Text color="rgba(0, 0, 0, .4)" fontSize="lg">
                The Natterbase Privacy Statement is effective as of January 10,
                2023. We regularly review and update this policy to reflect
                changes in our data practices and applicable laws. Unless stated
                otherwise, this privacy statement applies to all of
                Natterbase&apos;s externally facing applications and data
                processing activities, including services, games, tools, and
                websites.
              </Text>
            </Box>

            <Box>
              <Heading as="h3" fontSize="2xl">
                How does Natterbase protect your data?
              </Heading>
              <Text
                color="rgba(0, 0, 0, .4)"
                mt={{ base: 2, xl: 6 }}
                fontSize="lg"
              >
                Natterbase is committed to protecting your privacy. We make
                every effort to process your data in accordance with applicable
                laws and our policies regarding privacy. In addition, Natterbase
                maintains the appropriate technical and organizational measures
                to protect your information against unauthorized or unlawful
                processing, accidental loss, alteration, or disclosure and/or
                access by unauthorized persons.
              </Text>
            </Box>

            <Box>
              <Heading as="h3" fontSize="2xl" mb={{ base: 2, xl: 6 }}>
                Which categories of personal data do we collect, and how do we
                process such personal data?
              </Heading>
              <ul>
                <li>
                  <Flex color="rgba(0, 0, 0, .4)" fontSize="lg" mt={6}>
                    We collect personal data from our employees, potential
                    employees, clients, suppliers, and business contacts. If the
                    data we collect is not listed in this privacy statement, we
                    will give individuals (when required by law) appropriate
                    notice of which other data will be collected and how they
                    will be used.
                  </Flex>
                </li>
                <li>
                  <Flex mt={6} color="rgba(0, 0, 0, .4)" fontSize="lg">
                
                    We collect only the necessary personal data from our
                    employees, potential employees, clients, suppliers, and
                    business contacts for our services. We use secure methods to
                    collect and store personal data, protecting against
                    unauthorized access, disclosure, or use.
                  </Flex>
                </li>
                <li>
                  <Flex mt={6} color="rgba(0, 0, 0, .4)" fontSize="lg">
                 
                    At Natterbase, we retain personal data for a limited period
                    only as long as it is necessary for the purposes for which
                    it was collected. We regularly and securely dispose of
                    personal data when it is no longer needed.
                  </Flex>
                </li>
                <li>
                  <Flex mt={6} color="rgba(0, 0, 0, .4)" fontSize="lg">
                  
                    We provide clients access to their personal data to correct
                    any inaccurate or incomplete personal data upon request.
                  </Flex>
                </li>
                <li>
                  <Flex mt={6} color="rgba(0, 0, 0, .4)" fontSize="lg">
                   
                    All of these are done while complying with all applicable
                    laws and regulations governing the collection and processing
                    of personal data. This may include laws on data protection,
                    privacy, and confidentiality.
                  </Flex>
                </li>
              </ul>
            </Box>
       
          </VStack>
        </Container>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
