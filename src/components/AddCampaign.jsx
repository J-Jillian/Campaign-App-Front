import { useState } from "react"
import React from "react";
import { useContext } from 'react'
import { useForm } from '@mantine/hooks'
import { CampContext } from '../contexts/CampContext'
import {TextInput, Image, Text, Space, Box, Button, Input, InputWrapper, Title } from '@mantine/core'
import { SessionContext } from "../contexts/SessionContext";
import { useNavigate } from 'react-router-dom'
import {creatingCampaign} from "../utils/helper"


const AddCampaign = () => {
  const {campWithToken}= useContext(SessionContext);
  const navigate = useNavigate();

const form = useForm({
  initialValues:{
    CampaignName:"",
    description:"",
    place:"",
    fundsFor:"",
    totalAmount:"",
  }
})

const newCampaign = async newCamp => {
  try {
    const response = await campWithToken("create",JSON.stringify(newCamp));
    console.log(response, "camapaña creada")
  } 
  catch (error) {
  console.log("error al crear campaña", error)  
 
  }
}


const handleSubmit = event => {
  newCampaign(event);
}

  return (
    <div>
    <Box>
      <Title>Create Your Campaign </Title>
    <form onSubmit={form.onSubmit(handleSubmit)}>


   

      <InputWrapper
      
          label="Campaign Name"
          placeholder="Name"
          > 
          <Input {...form.getInputProps('CampaignName')} />
          </InputWrapper>


<InputWrapper
     
          label="Campaign description"
          placeholder="description">
          <Input {...form.getInputProps('description')} />
       
          </InputWrapper>

<InputWrapper
      
          label="Where is the Campaign going to take place"
          placeholder="place"
        >
           <Input {...form.getInputProps('place')} />
          </InputWrapper>

<InputWrapper
      
          label="What are the Funds For"
          placeholder="Funds For"
        >
           <Input {...form.getInputProps('fundsFor')} />
          </InputWrapper>

<InputWrapper
     
          label="Campaign Goal"
          placeholder="Total Amount"
        
          
          >
            <Input rightSection="$" type="number" {...form.getInputProps('totalAmount')} />
</InputWrapper>



<Button type="submit" variant="outline" color="dark" radius="xl" size="lg">
      Create a campaign
    </Button>
    </form>
    </Box>
    </div>
  )
}

export default AddCampaign