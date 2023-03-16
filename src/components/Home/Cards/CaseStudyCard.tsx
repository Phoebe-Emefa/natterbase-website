import { Box,  Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const CaseStudyCard = ({image, heading, text}: {image: string; heading: string; text: string}) => {
  return (
   <VStack align='left'>
    <Image src={image} alt={heading} ml={-4} />
        <Heading as='h3' fontSize='3xl'>{heading}</Heading>
        <Text fontSize='lg' width='26rem'>{text}</Text>
        <Text borderBottom=' 2px solid #000000' fontWeight={500} w={32}>View Case Study</Text>
   </VStack>
  )
}

export default CaseStudyCard