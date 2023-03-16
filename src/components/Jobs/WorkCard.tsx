import { Box, Flex, Heading, Image, Text, VStack, Icon, As } from '@chakra-ui/react';
import React from 'react'

const WorkCard = ({
    icon,
    title,
    text,
  }: {icon: As<any> | undefined; title: string; text: string;}) => {
    return (
        <Box
          p={6}
          pos="relative"
          rounded="xl"
          bg="rgba(255, 255, 255, 0.06) 0% 0% no-repeat padding-box;"
          height={{base: 80, 'xl': 'inherit'}}
        >
    
          <VStack align="flex-start" spacing={4}>
            <Flex p={2} bg='blue.500' rounded="full">
              <Icon as={icon} color='white' boxSize={{base: 4, 'xl': 6}} />
            </Flex>
            <Box>
              <Heading fontWeight="medium" fontSize={{ base: "sm", xl: "lg" }}>
                {title}
              </Heading>
              <Box h={1} w={20} rounded="full" bg='blue.500' />
            </Box>
    
            <Text color="white.700" fontSize={{ base: "xs", xl: "md" }}>
              {text}
            </Text>
          </VStack>
        </Box>
      );
}

export default WorkCard