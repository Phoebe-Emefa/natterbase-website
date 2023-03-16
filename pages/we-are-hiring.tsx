import Hero from '@/src/components/Home/Hero'
import MobileHero from '@/src/components/Home/MobileHero'
// import JobListings from '@/src/components/Jobs/JobListings'
import RequestForJob from '@/src/components/Jobs/RequestForJob'
import WhyWorkHere from '@/src/components/Jobs/WhyWorkHere'
import Layout from '@/src/components/Layout'
import { breakpoints } from '@/src/utils/constants'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { useMediaQuery } from "react-responsive";


const WeAreHiring = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.MOBILE });

  return (
    <>
        <Head>
        <title>We are Hiring!</title>
        <meta name="description" content="Need a job? Send us your application" />
        <meta property="og:title" content="Contact Us - Natterbase Website" />
        <meta property="og:description" content="Need a job? Send us your application" />
        <meta property="og:url" content="https://natterbase.com/we-are-hiring" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
        {isMobile ? (
        <MobileHero
          hasScroll={true}
          title="We are Hiring"
          subTitle="Full-time/Part-time | Remote"
        />
      ) : (
        <Hero title='We are Hiring!' subTitle='Full-time/Part-time | Remote' />

      )}
       <Box id='scroll-down'>
       {/* <JobListings /> */}
        <RequestForJob />
        <WhyWorkHere />
       </Box>
    </Layout>
    </>

  )
}

export default WeAreHiring