import { Button, Input, InputWrapper, Modal, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import React, { useEffect } from 'react'


const UpdateCampModal = ({ isModalOpen, setIsModalOpen, camp, setNeedRefresh, campaignId }) => {
  const form = useForm({
    initialValues: {
      CampaignName: '',
      place: '',
      fundsFor: '',
      totalAmount:'0'

    },
  })

  useEffect(() => {
    form.setValues({
       CampaignName: camp.CampaignName,
      place: camp.place,
      fundsFor: camp.fundsFor,
      totalAmount:camp.totalAmount
    })
  }, [camp])

  const updateCamp = async newValues => {
    await fetch(`http://localhost:5005/api/capaigns/${campaignId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newValues),
    })
    setNeedRefresh(true)
    setIsModalOpen(false)
  }

  const handleSubmit = values => {
    updateCamp(values)
  }

  return (
    <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)} title='Update beer'>
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
            <NumberInput precision={2} rightSection="$" min='0' {...form.getInputProps('totalAmount')} />
</InputWrapper>



       
        <Button type='submit'>Update</Button>
      </form>
    </Modal>
  )
}

export default UpdateCampModal