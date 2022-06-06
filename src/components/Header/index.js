import React from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/cart.png'
import User from '../../assets/user.png'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  PageLink,
  Line,
  ContainerRight,
  ContainerText,
  PageLinkExit
} from './styles'

export function Header() {
  const {
    push,
    location: { pathname }
  } = useHistory()

  const { logOut, userData } = useUser()

  const logOutUser = () => {
    logOut()
    push('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink
          isActive={pathname === '/'}
          onClick={() => {
            push('/')
          }}
        >
          Home
        </PageLink>
        <PageLink
          isActive={pathname.includes('/produtos')}
          onClick={() => {
            push('/produtos')
          }}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink
          onClick={() => {
            push('/carrinho')
          }}
        >
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={User} alt="Usuário" />
        </PageLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logOutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
