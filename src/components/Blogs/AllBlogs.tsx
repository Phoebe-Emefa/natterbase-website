import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import GroupedBlogs from './GroupedBlogs'

const AllBlogs = () => {
  return (
   <Container maxWidth={{'3xl': '82rem'}} px={{xl: 20, '4xl': 12}} mb={60} >
       <GroupedBlogs heading='August 2019' showFilter={true} />
       <GroupedBlogs heading='September 2019'  />
       <Box mt={40} textAlign='center' fontSize='xl' cursor='pointer' textDecoration='underline'fontWeight={500} >
 <Text>View them all</Text>
</Box>
   </Container>
  )
}

export default AllBlogs