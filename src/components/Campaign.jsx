import { Card, Text, Image, Button } from '@mantine/core'
import { Link } from 'react-router-dom'
import CampSection from './CampSection'
import React from "react";

const Campaign = ({ camp }) => {
  return (
    <Card
      shadow='sm'
      p='xl'
      component={Link}
      to={`/campaigns/${camp._id}`}
      sx={{
        '&:hover': {
          backgroundColor: '#EEEEEE',
        },
      }}
    >
      <Card.Section component="a" href="https://mantine.dev" target="_blank">
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>
      {/* <CampSection name={camp.campaignName} /> */}

        <Text size='s' align='center'>
        {camp.CampaignName}
      </Text>
      <Text size='s' align='center'>
        {camp.description}
      </Text>
      <Button  variant="outline" color="dark" radius="xl" size="xs"  fullWidth style={{ marginTop: 14 }}>
        Donate
      </Button>
    </Card>
  )
}

export default Campaign