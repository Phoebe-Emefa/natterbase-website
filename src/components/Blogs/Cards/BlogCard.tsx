import { Flex, Heading, Image, Text, VStack, Icon, Box } from '@chakra-ui/react'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const BlogCard = () => {
  return (
  <Flex justify='space-between' bg='#F8F8F8' width='100%' p={16}>
    <Box width='40%'>
    <Image src='/images/svg/discussion.svg' alt='table discussion' />
    </Box>
    <VStack align='left' spacing={7}  width='40%' rounded='md'  >
        <Heading as='h3' fontSize='2xl'>Landor X: Man vs. Robot panel discusses tech with a human touch</Heading>
        <Text fontWeight={500}>25 August 2019 — At our recent Landor X: Man vs. Robot event, experts from across the marketing, branding, and consulting spaces weighed in on how technology could impact creativity, design, and marketing in the future.</Text>
        <Flex align='center' fontWeight={700} cursor='pointer'>
          <Text>Read more</Text>
          <Icon as={BsArrowRight} ml={2}  />
        </Flex>
    </VStack>
  </Flex>
  )
}

export default BlogCard