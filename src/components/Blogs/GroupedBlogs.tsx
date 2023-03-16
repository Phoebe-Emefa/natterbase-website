import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import BlogCard from './Cards/BlogCard'

const GroupedBlogs = ({heading, showFilter} : {heading: string; showFilter?: boolean}) => {
  return (
   <Box mt={20}>
     <Flex justify='space-between' align='center' mb={10}  >
            <Heading as='h4' fontSize='3xl'>{heading} </Heading>
           {
            showFilter && (
                <Flex>
                <Text>All Year</Text>
                <Image src="/images/svg/arrow-down.svg" alt='down arrow' />
             </Flex>
            )
           }
        </Flex>
       <VStack spacing={7}>
       <BlogCard />
        <BlogCard />
       </VStack>
   </Box>
  )
}

export default GroupedBlogs