import { ActionIcon, Paper, Text, Title } from '@mantine/core'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Pencil, Trash } from 'tabler-icons-react'

import UpdateCampModal from '../components/UpdateCampModal'
import { SessionContext } from '../contexts/SessionContext'

const CampDetailsPage = () => {
  const { campId } = useParams()
  const navigate = useNavigate()
  const { apiWithToken } = useContext(SessionContext)

  const [camp, setCamp] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [needRefresh, setNeedRefresh] = useState(false)

  const fetchCamp = async () => {
    const response = await apiWithToken(`camps/${campId}`)
    setCamp(response)
  }

  useEffect(() => {
    fetchCamp()
  }, [])

  useEffect(() => {
    if (needRefresh) {
      fetchCamp()
      setNeedRefresh(false)
    }
  }, [needRefresh])

  const deleteCamp = async () => {
    await fetch(`http://localhost:5005/api/camps/${campId}`, { method: 'DELETE' })
    navigate('/camps')
  }

  const handleDelete = () => {
    deleteCamp()
  }

  return (
    <>
      <Paper shadow='xs' p='md'>
        <Title order={2}>{camp.CampaignName}</Title>
        <Text>{camp.description}</Text>
        <Text>{camp.place}</Text>
        <ActionIcon onClick={() => setIsModalOpen(true)}>
          <Pencil size={48} strokeWidth={2} color={'blue'} />
        </ActionIcon>
        <ActionIcon onClick={handleDelete}>
          <Trash size={48} strokeWidth={2} color={'#bf4058'} />
        </ActionIcon>
      </Paper>
      <UpdateCampModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        campId={campId}
        camp={camp}
        setNeedRefresh={setNeedRefresh}
      />
    </>
  )
}

export default CampDetailsPage