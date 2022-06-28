import { useState } from "react"
import React from "react";
import { useForm } from '@mantine/hooks'
import {TextInput, Image, Text, Space, Box, Button, Input, InputWrapper, Title } from '@mantine/core'



const AddCampaign = () => {

// const [campaignName, setName] = useState('');
// const [description, setDescription]= useState('');
// const [image, setImage] = useState('');
// const [place, setPlace] = useState('');
// const [fundsFor, setFundsFor]= useState('');
// const [totalAmount, settotalAmount]= useState('');
// const [creator, setCreator]= useState('');
// const [donations, setDonations]= useState('');


const form = useForm({
  initialValues:{
    CampaignName:"",
    description:"",
    place:"",
    fundsFor:"",
    totalAmount:"",
  }
})

const handleSubmit = event => {
  console.log(event, "event")
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
            <Input type="number" {...form.getInputProps('totalAmount')} />
</InputWrapper>



<Button htmlType="submit" variant="outline" color="dark" radius="xl" size="lg">
      Create a campaign
    </Button>
    </form>
    </Box>
    </div>
  )
}

export default AddCampaign