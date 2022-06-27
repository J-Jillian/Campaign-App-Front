import { Card, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import CampSection from './CampSection'

const Campaign = ({ camp }) => {
  return (
    <Card
      shadow='sm'
      p='xl'
      component={Link}
      to={`/campaign/${camp._id}`}
      sx={{
        '&:hover': {
          backgroundColor: '#EEEEEE',
        },
      }}
    >
      <CampSection name={camp.campaignName} />

      <Text weight={500} align='center'>
        {camp.discription}
      </Text>

      <Text size='sm' align='center'>
        {camp.fundsFor}
      </Text>
    </Card>
  )
}

export default Campaign