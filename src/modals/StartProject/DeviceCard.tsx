import { VStack, Icon, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { BsCheck2 } from "react-icons/bs";

const DeviceCard = ({
  active,
  title,
  icon,
  onClick,
}: {
  active?: boolean;
  title: string;
  icon: any;
  onClick: () => void;
}) => {
  return (
    <VStack
      border={active ? "none" : "3px solid #E0E0E0"}
      py={6}
      px={9}
      rounded="xl"
      color={active ? "white" : "#828282"}
      bg={active ? "primary" : "white"}
      cursor="pointer"
      pos="relative"
      onClick={onClick}
    >
      {active && (
        <Flex
          align="center"
          justify="center"
          w={3}
          h={3}
          bg="white"
          pos="absolute"
          left={2}
          top={2}
        >
          <Icon as={BsCheck2} color="black" boxSize={2} />
        </Flex>
      )}
      <Icon as={icon} boxSize={8} />
      <Text>{title}</Text>
    </VStack>
  );
};

export default DeviceCard;
