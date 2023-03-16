import Brands from "@/src/components/Home/Brands";
// import Clients from "@/src/components/Home/Clients";
import GoLive from "@/src/components/Home/GoLive";
import Hero from "@/src/components/Home/Hero";
import MobileHero from "@/src/components/Home/MobileHero";
import Partnerships from "@/src/components/Home/Partnerships";
import SmartSystem from "@/src/components/Home/SmartSystem";
import Layout from "@/src/components/Layout";
import { breakpoints } from "@/src/utils/constants";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.MOBILE });

  return (
    <>
      <Head>
        <title>Natterbasse Website</title>
        <meta
          name="description"
          content="Building Projects 10x Faster, Giving rise to management-level engineers accross the globe, and providing world-class solutions to everyday tasks"
        />
        <meta property="og:title" content="Home - Natterbase Website" />
        <meta
          property="og:description"
          content="Building Projects 10x Faster, Giving rise to management-level engineers accross the globe, and providing world-class solutions to everyday tasks"
        />
        <meta property="og:url" content="https://natterbase.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {isMobile ? (
          <MobileHero
            hasScroll={true}
            title="We Build"
            spanText="Products 10x Faster"
            subTitle="Accuracy is in detail, and Speed is in our delivery. Our ability to work with multiple distributed talents gives us a 10x advantage"
          />
        ) : (
          <Hero
            title="We Build Products 10x Faster"
            subTitle="Accuracy is in detail, and Speed is in our delivery. Our ability to work with multiple distributed talents gives us a 10x advantage"
          />
        )}
        <Box id="scroll-down">
          <Brands />
          <GoLive />
          <SmartSystem />
          <Partnerships />
          {/* <Clients /> */}
        </Box>
      </Layout>
    </>
  );
};

export default Home;
