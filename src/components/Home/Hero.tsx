import {
  Flex,
  Heading,
  Text,
  VStack,
  Icon,
  Box,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { BsArrowDown } from "react-icons/bs";
import React from "react";
import Header from "../Layout/Header";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Help from "@/src/modals/help";
import { scroller } from "react-scroll";


const Hero = ({
  title,
  subTitle,
  otherTitle,
  color,
  headerFontSize,
  subTitleFontSize,
  hasScroll = true,
}: {
  title: string;
  subTitle: string;
  otherTitle?: string;
  color?: string;
  headerFontSize?: string;
  subTitleFontSize?: string;
  hasScroll?: boolean;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const scrollDown = () => {
    scroller.scrollTo("scroll-down", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Box
      bgImage="url(/images/svg/hero-bg.svg)"
      position="relative"
      minH="50.8rem"
    >
      <Header />
   <VStack>
   <VStack bg="white" spacing={5} pt={52}>
        <Box textAlign="center">
          <Heading as="h1" fontSize={headerFontSize || "7xl"} fontWeight={400}>
            {title}
          </Heading>
          {otherTitle && (
            <Heading as="h1" fontSize="7xl" fontWeight={400} mt={-3}>
              {otherTitle}
            </Heading>
          )}
        </Box>
        <Text
          fontSize={subTitleFontSize || "2xl"}
          width="50rem"
          textAlign="center"
          color={color}
        >
          {subTitle}{" "}
        </Text>
      </VStack>
      {hasScroll && (
        <Box pt='11rem' onClick={scrollDown} cursor='pointer'>
          <Flex
            className="scroll-down"
            justify="center"
            align="center"
            border="1px solid #000000"
            rounded="3xl"
            color="rgba(0, 0, 0, .5)"
            fontWeight={500}
            height={36}
            width={10}
          >
            <Text>scroll down</Text>
            <Icon as={BsArrowDown} mt={2} mr={1} />
          </Flex>
        </Box>
      )}
   </VStack>
      <Box
        position="absolute"
        bottom={60}
        left={10}
        cursor="pointer"
        onClick={() => onOpen()}
      >
        <Icon as={IoIosHelpCircleOutline} boxSize={10} />
      </Box>
      <Help isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Hero;
