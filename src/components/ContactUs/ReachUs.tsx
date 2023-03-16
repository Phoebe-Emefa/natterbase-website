import { breakpoints, contactInfo } from "@/src/utils/constants";
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
import InfoCard from "./Cards/InfoCard";
import {useMediaQuery} from "react-responsive"


const ReachUs = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.MOBILE });

  return (
    <Container minW={{ md: "2xl", lg: "3xl", xl: "5xl", "3xl": "6xl" }} pt={44} pb={{base: 20, 'xl': 32}}>
      <Heading as="h2" fontSize={{base: '3xl', 'xl': "6xl"}}>
        Reach us now
      </Heading>
      <Text width={{ base: "100%", xl: "32rem" }} mt={{base: 2, 'xl': 4}} fontSize={{base: 'lg', 'xl': "2xl"}}>
      Our management tool keeps your project on track and on schedule.
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }}
        columnGap={{base: 5, 'xl': 20}}
        rowGap={{base: 5, 'xl': 16}}
        ml={{base: 0, 'xl': 60}}
        mt={{base: 10, 'xl': 20}}
      >
        {contactInfo?.map((info) => (
          <GridItem key={info?.email}>
            <InfoCard title={info?.title} email={info?.email} />
          </GridItem>
        ))}
      </Grid>
    {
      !isMobile && (
        <Flex justify="flex-end" mt={-20}>
        <Image src="/images/svg/hand.svg" alt="hand reach out" />
      </Flex>
      )
    }
    </Container>
  );
};

export default ReachUs;
