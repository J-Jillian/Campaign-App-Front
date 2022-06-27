import { ActionIcon } from '@mantine/core'
import { Plus } from 'tabler-icons-react'
import React from "react";

const AddButton = ({ setIsModalOpen }) => {
  return (
    <ActionIcon
      variant='filled'
      styles={{
        root: {
          borderRadius: '50%',
          backgroundColor: 'white',
          '&:hover': { backgroundColor: '#EEEEEE' },
        },
      }}
      onClick={() => setIsModalOpen(true)}
    >
      <Plus size={24} strokeWidth={2} color={'#79cdd2'} />
    </ActionIcon>
  )
}

export default AddButton