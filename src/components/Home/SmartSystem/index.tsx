import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React, { lazy } from "react";
import { useMediaQuery } from "react-responsive";
import DesktopView from "./DesktopView";
import MobileAndTabletView from "./MobileAndTabletView";

// const DesktopView = lazy(()=> import('./DesktopView'))
// const MobileAndTabletView = lazy(() => import('./MobileAndTabletView'))

const SmartSystem = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1279 });

  return (
    <Box
      bg="#F8F8F8"
      pt={{ base: 24, xl: 36 }}
      pb={{ base: 24, xl: 52 }}
      mt={12}
    >
      <Container minW={{ md: "2xl", lg: "3xl", xl: "6xl", "3xl": "7xl" }}>
        <Box width={{ base: "100%", xl: "33rem" }}>
          <Heading
            as="h3"
            fontSize={{ base: "3xl", xl: "6xl" }}
            fontWeight={{ base: 600, xl: 400 }}
          >
            Experience a smart system
          </Heading>
          <Text fontSize={{ base: "lg", xl: "2xl" }} mt={{ base: 5, xl: 10 }}>
            Our preferred management tool keeps your project on track with your
            timeline.
          </Text>
        </Box>
        <>
          {isTabletOrMobile ? (
            <Box mt={20}>
              <MobileAndTabletView />
            </Box>
          ) : (
            <DesktopView />
          )}
        </>
      </Container>
    </Box>
  );
};

export default SmartSystem;
