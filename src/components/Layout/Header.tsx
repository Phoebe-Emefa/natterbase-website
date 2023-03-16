import React from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import CustomButton from "../Form/CustomButton";
import { useRouter } from "next/router";
import StartProject from "@/src/modals/StartProject";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "@/src/utils/constants";
import Link from "next/link";

const Header = () => {
  const { pathname } = useRouter();
  const path = "/hire-remote-team";
  const isActive = pathname === path;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useMediaQuery({ maxWidth: breakpoints.MOBILE });

  return (
    <Box
      h={{base: 20, 'xl': 28}}
      top={0}
      as="nav"
      w="full"
      zIndex={20}
      pos="fixed"
      bg="white"
      shadow={1000}
    >
      <Container
        display="flex"
        h="full"
        alignItems="center"
        justifyContent="space-between"
        minW={{md: "2xl", lg: "4xl", xl: "6xl", "3xl": "7xl" }}
      >
        <Link href="/"  rel="noreferrer">
          <Image
            src={
              isMobile ? "/images/svg/small-logo.svg" : "/images/svg/logo.svg"
            }
            alt="natterbase logo"
          />
        </Link>
        <Flex align="center"  justify="space-between" bg="white">
          <Link
            href={path}
            rel="noreferrer"
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              cursor="pointer"
            >
              <Text fontWeight={500} fontSize={{base: 'md', xl: "2xl"}}>
                {isMobile ? "Teams" : "Hire Remote Teams"}
              </Text>
              {isActive && <Box borderTop="2px solid black" width={{base: '100%', 'xl':32}} />}
            </Flex>
          </Link>
         <Box ml={{base: 2, xl: 8}}>
         <CustomButton
            title="Start Project"
            onClick={() => onOpen()}
            width={isMobile ? "10rem" : "12rem"}
          />
         </Box>
        </Flex>
      </Container>
      <StartProject isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Header;
