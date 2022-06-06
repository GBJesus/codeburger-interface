import React from 'react'

import BgHome from '../../assets/bg-home.png'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, HomeImage } from './styles'

export function Home() {
  return (
    <Container>
      <HomeImage src={BgHome} alt="logo" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
