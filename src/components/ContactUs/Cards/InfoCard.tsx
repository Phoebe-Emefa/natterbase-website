import { Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const InfoCard = ({title, email}: {title: string; email: string}) => {
  return (
    <VStack bg='#F8F8F8' py={20} >
        <Heading as='h5' fontSize='2xl'>
           {title}
        </Heading>
        <a href={`mailto:${email}`}>
                  <Text fontSize='2xl' fontWeight={500}as="span" textDecor="underline">
                  {email}
                  </Text>{" "}
                </a>
    </VStack>
  )
}

export default InfoCard