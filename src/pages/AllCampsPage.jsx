import { Box } from '@mantine/core'
import { useContext } from 'react'
import { useState } from 'react'
import AddCampaign from '../components/AddCampaign'
import Campaign from '../components/Campaign'
import NewCampaign from '../components/AddProject'
import { CampContext } from '../contexts/CampContext'
import React from "react";



const AllCampsPage = () => {
    const { camps } = useContext(CampContext)
    const [isModalOpen, setIsModalOpen] = useState(false)
    

    return (
      <>
        <Box
          sx={{
            display: 'grid',
            gridTemplate: '1fr / 1fr 1fr',
            gridAutoRows: '1fr',
            gap: '20px',
            margin: '20px',
          }}
        >
          {camps.map(camp => (
            <Campaign key={camp._id} camp={camp} />
          ))}
        </Box>
      
      
      </>
    )
  }
  
  export default AllCampsPage