import { Card, Text } from '@mantine/core'
import React from "react";

const CampSection = ({ campaignName}) => {
  return (
    <Card.Section>
      <Text weight={500} size='lg' align='center'>
        {campaignName}
        
      </Text>
    </Card.Section>
  )
}

export default CampSection