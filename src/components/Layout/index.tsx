import { Box } from "@chakra-ui/react";
import React from "react";
import NextNProgress from "nextjs-progressbar";
import Footer from "./Footer";
import Header from "./Header";
import { AnimatePresence } from "framer-motion";
import MotionBox from "../Motion/Box";
import { useRouter } from "next/router";


const Layout = ({
  children,
  hasHeader,
}: {
  children: React.ReactNode;
  hasHeader?: boolean;
}) => {
  const { pathname } = useRouter();
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };


  return (
    <Box>
      <NextNProgress color='black' />
      {hasHeader && <Header />}{" "}
      <Box
        as="main"
        role="main"
        minH="100vh"
        pos="relative"
        fontFamily="body"
        aria-labelledby="main"
        mt={32}
      >
        <AnimatePresence mode="wait">
          <MotionBox
            key={pathname}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: { opacity: 0, transition },
              pageAnimate: { opacity: 1, transition },
            }}
          >
            {children}
          </MotionBox>
        </AnimatePresence>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
