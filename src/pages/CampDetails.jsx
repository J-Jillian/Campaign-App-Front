import { ActionIcon, Paper, Text, Title } from '@mantine/core'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { Pencil, Trash } from 'tabler-icons-react'
import React from 'react'
import UpdateCampModal from '../components/UpdateCampModal'
import { SessionContext } from '../contexts/SessionContext'
import { CampContext } from '../contexts/CampContext'
import {BASE_API_URL} from '../utils/constants'



const CampDetails = () => {
  const { campaignId } = useParams()
  const navigate = useNavigate()
  const { apiWithToken, token} = useContext(SessionContext)
  const location = useLocation()
  const [camp, setCamp] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [needRefresh, setNeedRefresh] = useState(false)
  const { setNeedRefresh : setAllCampsRefresh} = useContext(CampContext)

  const fetchCamp = async () => {
    console.log('fetchCamp', campaignId)
    const response = await apiWithToken(`campaigns/${campaignId}`)
    console.log(response, "detalles")
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
    await fetch(`${BASE_API_URL}/campaigns/${campaignId}`, { 
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
    setAllCampsRefresh(true)
    navigate('/profile')
  }

  const handleDelete = () => {
    deleteCamp()
  }

  return (
    <>
      <Paper shadow='xs' p='md'>
        <Title order={2}>Campaign Name:{camp.CampaignName}</Title>
        <Text>description:{camp.description}</Text>
        <Text>place:{camp.place}</Text>
        <Text>funds For:{camp.fundsFor}</Text>
        <Text>total Amount:{camp.totalAmount}</Text>
        
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
        campaignId={campaignId}
        camp={camp}
        setNeedRefresh={setNeedRefresh}
      />
    </>
  )
}

export default CampDetails