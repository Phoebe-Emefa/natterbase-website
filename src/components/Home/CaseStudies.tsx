import { caseStudy } from '@/src/utils/constants'
import { Box, Button, Container, Flex,  Grid,  GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CaseStudyCard from './Cards/CaseStudyCard'

const CaseStudies = () => {
  return (
    <Container maxWidth={{'3xl': '82rem'}}  pt={36} pb={52} px={{xl: 20, '4xl': 12}} >
    <Box >
    <Heading as='h3' fontSize='6xl' fontWeight={400}>Case Studies</Heading>
    <Text fontSize='2xl' mt={10}>We make better products and make products better. From design and innovation sprints to UX design sprints and marathons, 
    we create things that work for users and brands. Our approach was agile before they called it agile, 
    finding innovation through structured ideation, prototyping and user-testing. </Text>
    </Box>
   <Grid mt={52} templateColumns='repeat(2, 1fr)' justifyContent='space-between' columnGap={10} rowGap={32}   >
   {
        caseStudy?.map((study, index) => (
            <GridItem key={study?.heading} mt={index % 2 === 0 ? 0 : 20}>
                <CaseStudyCard heading={study?.heading} text={study?.text} image={study?.image} />
            </GridItem>
        ))
       }
   </Grid>
<Box mt={40} textAlign='center' fontSize='xl' cursor='pointer' textDecoration='underline'fontWeight={500} >
 <Text>View them all</Text>
</Box>
    </Container>
  )
}

export default CaseStudies