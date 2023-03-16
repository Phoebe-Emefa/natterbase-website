import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const GoLiveCard = ({title, subTitle}:{title: string; subTitle: string}) => {
  return (
    <Box  bg="linear-gradient(180deg, rgba(15, 15, 15, 0.73) 0%, #000000 100%)" height={64} p={6} >
        <Image src='/images/svg/dev.svg' alt='product' />
       <Box mt={8}>
       <Heading as='h4' fontSize='lg'>{title} </Heading>
        <Text   mt={3} color='rgba(255, 255, 255, .8)' >{subTitle} </Text>
       </Box>
    </Box>
  )
}

export default GoLiveCard