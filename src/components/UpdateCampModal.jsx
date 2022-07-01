import { Space, Button, Input, InputWrapper, Modal, NumberInput, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import React, { useEffect } from 'react'
import { CampContext } from '../contexts/CampContext'
import { useContext } from 'react'
import { SessionContext } from '../contexts/SessionContext'
import {BASE_API_URL} from '../utils/constants'

const UpdateCampModal = ({ isModalOpen, setIsModalOpen, camp, setNeedRefresh, campaignId }) => {
  const form = useForm({
    initialValues: {
      CampaignName: '',
      place: '',
      fundsFor: '',
      totalAmount:'0'

    },
  })

  const { setNeedRefresh : setAllCampsRefresh} = useContext(CampContext)
  const {token} = useContext(SessionContext)

  useEffect(() => {
    form.setValues({
       CampaignName: camp.CampaignName,
      place: camp.place,
      fundsFor: camp.fundsFor,
      totalAmount:camp.totalAmount,
      description: camp.description
    })
  }, [camp])

  const updateCamp = async newValues => {
    await fetch(`${BASE_API_URL}/api/campaigns/${campaignId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(newValues),
    })
    setNeedRefresh(true)
    setIsModalOpen(false)
    setAllCampsRefresh(true)
  }

  const handleSubmit = values => {
    console.log('Updated campaigns', values)
    updateCamp(values)
  }

  return (
    <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)} title='Update Campaign'>
      <form onSubmit={form.onSubmit(handleSubmit)}>
      <InputWrapper
      
      label="Campaign Name"
      placeholder="Name"
      > 
      <TextInput {...form.getInputProps('CampaignName')} />
      </InputWrapper>

      <InputWrapper
     
          label="Campaign description"
          placeholder="description">
          <TextInput {...form.getInputProps('description')} />
       
          </InputWrapper>

          <InputWrapper
      
          label="Where is the Campaign going to take place"
          placeholder="place"
        >
           <TextInput {...form.getInputProps('place')} />
          </InputWrapper>

<InputWrapper
      
          label="What are the Funds For"
          placeholder="Funds For"
        >
           <TextInput {...form.getInputProps('fundsFor')} />
          </InputWrapper>

<InputWrapper
     
          label="Campaign Goal"
          placeholder="Total Amount"
        
          
          >
            <NumberInput precision={2} rightSection="$" min='0' {...form.getInputProps('totalAmount')} />
</InputWrapper>



<Space h="md" />
        <Button variant="outline" color="dark" radius="xl"  type='submit'>Update</Button>
      </form>
    </Modal>
  )
}

export default UpdateCampModal