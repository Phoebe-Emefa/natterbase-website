import HowItWorks from "@/src/components/HireRemoteTeam/HowItWorks";
import MotivatedTeams from "@/src/components/HireRemoteTeam/MotivatedTeams";
import Platform from "@/src/components/HireRemoteTeam/Platform";
import Hero from "@/src/components/Home/Hero";
import MobileHero from "@/src/components/Home/MobileHero";
import Layout from "@/src/components/Layout";
import { breakpoints } from "@/src/utils/constants";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { useMediaQuery } from "react-responsive";

const HireRemoteTeam = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.MOBILE });

  return (
    <>
      <Head>
        <title>Hire Remote Teams</title>
        <meta
          name="description"
          content="Hire world-class engineers to build your products!"
        />
        <meta
          property="og:title"
          content="Hire Remote Team - Natterbase Website"
        />
        <meta
          property="og:description"
          content="Hire world-class engineers to build your products!"
        />
        <meta
          property="og:url"
          content="https://natterbase.com/hire-remote-team"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {isMobile ? (
          <MobileHero
            hasScroll={true}
            title="Customize & Manage a Team"
            subTitle="Find the perfect developers carefully selected for speed of execution, the accuracy of development, and optimal skill set – all within your budget"
          />
        ) : (
          <Hero
            title="Customize & Manage a Team"
            subTitle="Find the perfect developers carefully selected for speed of execution, the accuracy of development, and optimal skill set – all within your budget"
          />
        )}
       <Box id='scroll-down'>
       <Platform />
        <HowItWorks />
        <MotivatedTeams />
       </Box>
      </Layout>
    </>
  );
};

export default HireRemoteTeam;
