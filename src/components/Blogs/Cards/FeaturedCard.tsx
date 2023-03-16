import { Box, Flex, Heading, Icon,Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const FeaturedCard = () => {
  return (
    <Box bgImage="url(/images/svg/coke.svg)" width='100%' height='40rem' rounded='md' position='relative' textAlign='left'>
    <VStack align='left' spacing={7} bgColor='white' position='absolute' top='8rem' left={20} width='26rem' rounded='md' px={8} py={12} >
        <Heading as='h3' fontSize='2xl'>Natterbase helps Coca Cola to cool down Australia’s summer with a frozen rebrand</Heading>
        <Text fontWeight={500}>5 June 2019 — Australian summers are iconic, but they’re also absolute scorchers. That’s why since the 1990s, Australians have been enjoying the icier side of their favorite soft drinks to get them through the warmer months.</Text>
        <Flex align='center' fontWeight={700} cursor='pointer'>
          <Text>Read more</Text>
          <Icon as={BsArrowRight} ml={2}  />
        </Flex>
    </VStack>
</Box>
  )
}

export default FeaturedCard