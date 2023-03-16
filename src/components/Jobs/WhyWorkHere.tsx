import { breakpoints, whyWork } from "@/src/utils/constants";
import { Box, Container, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
import WorkCard from "./WorkCard";

const WhyWorkHere = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.MOBILE });
  const responsive = {
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    },
  };
  return (
    <Box bg="black" color="white" pt={24} pb={{ base: 32, xl: 52 }} mb={{base: 36, 'xl': 40}}>
      <Container minW={{ md: "2xl", lg: "3xl", xl: "6xl", "3xl": "7xl" }}>
        <Box w="full">
          <Heading as="h4" fontSize={{ base: "2xl", xl: "4xl" }}>
            Why you should work at Natterbase
          </Heading>
          <>
            {isMobile ? (
              <Grid gap={6} w="full" height='100%' pb={4} mt={6}>
                <Carousel
                  partialVisible
                  responsive={responsive}
                  arrows={false}
                  autoPlay
                  autoPlaySpeed={6000}
                  infinite
                >
                  {whyWork?.map((item) => (
                  <Box  key={item?.title} mr={4} >
                      <WorkCard
                      title={item?.title}
                      text={item?.text}
                      icon={item?.icon}
                    />
                  </Box>
                  ))}
                </Carousel>
              </Grid>
            ) : (
              <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={12}>
                {whyWork?.map((item) => (
                  <WorkCard
                    key={item?.title}
                    title={item?.title}
                    text={item?.text}
                    icon={item?.icon}
                  />
                ))}
              </Grid>
            )}
          </>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyWorkHere;
