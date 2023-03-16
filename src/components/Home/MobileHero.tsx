import Help from "@/src/modals/help";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  Icon,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { scroller } from "react-scroll";
import Header from "../Layout/Header";

const MobileHero = ({
  hasScroll,
  title,
  spanText,
  subTitle,
}: {
  hasScroll?: boolean;
  subTitle: string;
  title: string;
  spanText?: string;
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
    <Flex direction="column">
      <Header />
      <Container maxWidth={{ base: "3xl" }}>
        <VStack align="left" spacing={5} pt="5rem" pb="10rem">
          <Flex justify="space-between">
            <Heading as="h2" fontSize="3xl">
              {title}
              <Box as="span" display="block">
                {spanText}
              </Box>
            </Heading>
            <Box cursor="pointer" mt={9} onClick={() => onOpen()}>
              <Icon as={IoIosHelpCircleOutline} boxSize={10} />
            </Box>
          </Flex>

          <Text pr={8}>{subTitle}</Text>
        </VStack>
      </Container>
      <Box position="relative">
        <Box borderBottom="1px solid rgba(0, 0, 0, .05)" />
        {hasScroll && (
          <VStack onClick={scrollDown} cursor='pointer'>
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
              position="absolute"
              bottom={-20}
            >
              <Text>scroll down</Text>
              <Icon as={BsArrowDown} mt={2} mr={1} />
            </Flex>
          </VStack>
        )}
      </Box>
      <Help isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default MobileHero;
