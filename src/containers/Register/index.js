import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import BackgroundImg from '../../assets/bg-register.svg'
import Logo from '../../assets/logo.svg'
import { Button, ErrorMessage } from '../../components'
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

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required('Digite seu nome'),
      email: yup
        .string()
        .email('Digite um email válido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .required('A senha é obrigatória')
        .min(6, 'A senha deve ter no mínimo 6 dígitos'),
      confirmPass: yup
        .string()
        .required('A senha é obrigatória')
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
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
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        {
          validateStatus: () => true
        }
      )

      if (status === 200 || status === 201) {
        toast.success('Cadastro criado com sucesso')
      } else if (status === 409) {
        toast.error('Email já existe')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema. Tente mais tarde')
    }
  }

  return (
    <Container>
      <LoginImg src={BackgroundImg} />
      <ContainerItems>
        <img src={Logo} alt="Logo" />
        <H1>Cadastre-se</H1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Password</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPass?.message}>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPass')}
            error={errors.confirmPass?.message}
          />
          <ErrorMessage>{errors.confirmPass?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 28 }}>
            Sign Up
          </Button>
        </form>

        <CreateAccount>
          Já possui sua conta?{' '}
          <Link style={{ color: 'white' }} to="/login">
            Sign In
          </Link>
        </CreateAccount>
      </ContainerItems>
    </Container>
  )
}
