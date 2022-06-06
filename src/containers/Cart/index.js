import React from 'react'

import BgImage from '../../assets/bg-cart.svg'
import { CartItems, CartResume } from '../../components'
import { Container, CartImage, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImage src={BgImage} />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
