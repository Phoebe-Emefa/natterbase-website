import OurOffice from "@/src/components/ContactUs/OurOffice";
import ReachUs from "@/src/components/ContactUs/ReachUs";
import Hero from "@/src/components/Home/Hero";
import MobileHero from "@/src/components/Home/MobileHero";
import Layout from "@/src/components/Layout";
import { breakpoints } from "@/src/utils/constants";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { useMediaQuery } from "react-responsive";

const ContactUs = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.MOBILE });

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Need Help? Contact Us!" />
        <meta property="og:title" content="Contact Us - Natterbase Website" />
        <meta property="og:description" content="Need Help? Contact Us!" />
        <meta property="og:url" content="https://natterbase.com/contact-us" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {isMobile ? (
          <MobileHero
            hasScroll={true}
            title="Don’t be too formal;"
            spanText="Let’s talk about your Product"
            subTitle="Accuracy is in detail, and Speed is in our delivery. Our ability to work with multiple distributed talents gives us a 10x advantage."
          />
        ) : (
          <Hero
            title="Don’t be too formal;"
            otherTitle="Let’s talk about your product"
            subTitle="Accuracy is in detail, and Speed is in our delivery. Our ability to work with multiple distributed talents gives us a 10x advantage."
            color="#BDBDBD"
          />
        )}
        <Box id='scroll-down'>
        <ReachUs />
        <OurOffice />
        </Box>
      </Layout>
    </>
  );
};

export default ContactUs;
