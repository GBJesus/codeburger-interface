import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import {
  Header,
  Container,
  Body,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductQuantity,
  TotalPrice,
  EmptyCart
} from './styles'

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts } = useCart()

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <ProductImage src={product.url} alt="imagem-do-produto" />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{formatCurrency(product.price)}</ProductPrice>

            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <ProductQuantity>{product.quantity}</ProductQuantity>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>

            <TotalPrice>
              {formatCurrency(product.price * product.quantity)}
            </TotalPrice>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho Vazio</EmptyCart>
      )}
    </Container>
  )
}
