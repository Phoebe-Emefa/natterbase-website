import { goLive } from '@/src/utils/constants'
import { Box,  Container,  Grid,  GridItem,  Text } from '@chakra-ui/react'
import React from 'react'
import GoLiveCard from './Cards/GoLiveCard'



const GoLive = () => {
  return (
    <Box bg='black' color='white' pt={24} pb={{base: 32, 'xl': 52}}  >
      <Container  minW={{ md: "2xl", lg: "3xl", xl: "6xl", "3xl": "7xl" }}>
      <Text fontSize={{base: '2xl', 'xl': '5xl'}} >Be <Box as='span' fontWeight={700}>GoLive</Box> ready in Weeks 
        <Box as='span' display='block' fontSize='md' >Not Months</Box></Text>
       <Grid templateColumns={{base: 'repeat(1, 1fr)', 'xl': 'repeat(4, 1fr)'}} gap={6} mt={20}>
       {
        goLive?.map((item) => (
            <GridItem key={item?.title}>
                <GoLiveCard title={item?.title} subTitle={item?.subText} />
            </GridItem>
        ))
       }
      
       </Grid>
      </Container>
    </Box>
  )
}

export default GoLive