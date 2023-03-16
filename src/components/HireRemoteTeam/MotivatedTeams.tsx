import StartProject from "@/src/modals/StartProject";
import { motivatedTeams } from "@/src/utils/constants";
import {
  Box,
  ChakraProps,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CustomButton from "../Form/CustomButton";

const Item = ({
  image,
  imageAlt,
  heading,
  text,
  hasSpan,
  span,
  direction,
}: {
  image: string;
  imageAlt: string;
  heading: string;
  text: string;
  hasSpan?: boolean;
  span?: string;
  direction?: ChakraProps["flexDirection"];
}) => {
  return (
    <Flex direction={direction} justify="space-between" align="center">
      <Image src={image} alt={imageAlt} mt={{ base: 10, xl: 0 }} />
      <VStack align="left">
        <Heading as="h4" fontSize={{ base: "3xl", xl: "5xl" }}>
          {heading}
        </Heading>
        <Text fontSize="lg" width={{ base: "100%", xl: "35rem" }}>
          {text}{" "}
          {hasSpan && (
            <Box as="span" fontWeight={700} ml={1}>
              {span}
            </Box>
          )}{" "}
        </Text>
      </VStack>
    </Flex>
  );
};

const MotivatedTeams = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="#F9F9F9" my={44} py={{ base: 20, xl: 40 }}>
      <Container minW={{ md: "2xl", lg: "3xl", xl: "5xl", "3xl": "6xl" }}>
        <Box>
          <VStack align="left" spacing={40}>
            {motivatedTeams?.map((item, index) => (
              <Item
                key={item?.heading}
                image={item?.image}
                imageAlt={item?.imageAlt}
                heading={item?.heading}
                text={item?.text}
                hasSpan={item?.span ? true : false}
                span={item?.span}
                direction={{
                  base: "column-reverse",
                  xl: index === 1 ? "row-reverse" : "row",
                }}
              />
            ))}
          </VStack>
          <Flex mt={16} width={{base: '100%', 'xl': "40%"}} justify="center" align="center">
            <CustomButton
              title="Hire Remote Team"
              width="100%"
              onClick={() => onOpen()}
            />
          </Flex>
        </Box>
      </Container>
      <StartProject isOpen={isOpen} onClose={onClose} isHireTeam={true} />
    </Box>
  );
};

export default MotivatedTeams;
