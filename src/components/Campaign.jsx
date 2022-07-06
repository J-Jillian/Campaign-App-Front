import { Card, Text, Image, Button, Badge, Group,  useMantineTheme  } from '@mantine/core'
import { Link } from 'react-router-dom'
import CampSection from './CampSection'
import React from "react";

const Campaign = ({ camp }) => {
  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];
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
      
      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
      <Text size='s' align='center'>
        {camp.CampaignName}
      </Text>
      <Badge color="pink" variant="light">
      {camp.fundsFor}
        </Badge>
      </Group>

       

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