import { Box } from '@mantine/core'
import { useContext } from 'react'
import { useState } from 'react'
import AddButton from '../components/AddButton'
import Campaign from '../components/Campaign'
import NewCampaign from '../components/AddProject'
import { CampContext } from '../contexts/CampContext'

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
        <AddButton setIsModalOpen={setIsModalOpen} />
        <NewCampaign isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </>
    )
  }
  
  export default AllCampsPage