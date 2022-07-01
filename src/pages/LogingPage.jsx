import {Center, Image, Text, Space, Box, Button, Input, InputWrapper, PasswordInput, Title } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'
import { login } from '../utils/helper'
import React from "react";
import { At } from 'tabler-icons-react';
import handlogin from '../img/handlogin.png'



const LoginPage = () => {
  const navigate = useNavigate()
  const { authenticateUser } = useContext(SessionContext)
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  })

  const logUser = async credentials => {
    try {
      const response = await login(credentials)
      console.log("Login Res",response)
      if (response.status === 'KO') {
        throw new Error(response.message)
      } else {
        authenticateUser(response.token)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = values => {
    logUser(values)
  }



  
  return (
    <div className='setUpBox'>
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <div style={{ width: 120, marginLeft: 'auto', marginRight: 'auto' }}>
      <Image
        src={handlogin}
      />
    </div>
    <Title>Hello</Title>
      <Space h="md" />
      <Space h="md" />
      <Text size="xs"  >Welcome to Funrasing!</Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <InputWrapper
          required
          label='Username'
      
        >
                <Space h="md" />

          <Input icon={<At />}
      placeholder="Your email here"
      radius="lg" {...form.getInputProps('username')} />
        </InputWrapper>
        <InputWrapper required label='Password' >
          <PasswordInput radius="lg" {...form.getInputProps('password')} />
        </InputWrapper>
        <Space h="md" />

        <Button type='submit' variant="outline" radius="xl" size="xl" uppercase>Login</Button>
      </form>
    </Box>
    </div>
   
    
  )
}

export default LoginPage
