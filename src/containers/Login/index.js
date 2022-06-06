import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import BackgroundImg from '../../assets/bg-login.svg'
import Logo from '../../assets/logo.svg'
import { Button, ErrorMessage } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImg,
  ContainerItems,
  H1,
  Label,
  Input,
  CreateAccount
} from './styles'

export function Login() {
  const history = useHistory()
  const { putUserData } = useUser()
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um email válido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .required('A senha é obrigatória')
        .min(6, 'A senha deve ter no mínimo 6 dígitos')
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem vindo(a)',
        error: 'Verifique seu email e senha'
      }
    )

    putUserData(data)

    if (data.admin) {
      setTimeout(() => {
        history.push('/pedidos')
      }, 1000)
    } else {
      setTimeout(() => {
        history.push('/')
      }, 1000)
    }
  }

  return (
    <Container>
      <LoginImg src={BackgroundImg} />
      <ContainerItems>
        <img src={Logo} alt="Logo" />
        <H1>Login</H1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Password</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Button type="submit" style={{ marginTop: 67 }}>
            Sign In
          </Button>
        </form>

        <CreateAccount>
          Não possui conta?{' '}
          <Link style={{ color: 'white' }} to="/cadastro">
            Sign Up
          </Link>
        </CreateAccount>
      </ContainerItems>
    </Container>
  )
}
