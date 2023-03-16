import { Container,  } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import FeaturedCard from './Cards/FeaturedCard'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FeaturedBlogs = () => {
  return (
    <Container maxWidth={{'3xl': '82rem'}} px={{xl: 20, '4xl': 12}} my={32}>
      <Carousel>
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
      </Carousel>
    </Container>
  )
}

export default FeaturedBlogs