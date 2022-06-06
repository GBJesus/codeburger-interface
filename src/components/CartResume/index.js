import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container, ContainerItems } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProducts, deliveryTax])

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Seu pedido está sendo realizado',
      success: 'Seu pedido foi realizado com sucesso',
      error: 'Falha ao tentar realizar o pedido. Tente novamente'
    })
  }

  return (
    <Container>
      <ContainerItems>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="price-items">{formatCurrency(finalPrice)}</p>
          <p className="tax">Taxa de entrega</p>
          <p className="price-tax">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p className="total-price">Total</p>
          <p className="total-price">
            {formatCurrency(finalPrice + deliveryTax)}
          </p>
        </div>
      </ContainerItems>
      <Button
        onClick={submitOrder}
        style={{ width: '100%', height: 48, marginTop: 25 }}
      >
        Finalizar Pedido
      </Button>
    </Container>
  )
}
