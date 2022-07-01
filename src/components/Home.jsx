import React from "react";
import AddCampaign from "./AddCampaign";
import { Group, Button, Title, Text, Space, Image, Box } from "@mantine/core";
import { Link } from "react-router-dom";
import shane from '../img/shane.jpg'
import SampleCards from './SampleCards'



function Home() {
  // const [camps, setCampaign] = useState(campsJSON);

  // function handleNewCampaign(newCampaign) {
  //     setCampaign([...camps, newCampaign]);
  //   }

  return (
    <Box sx={{
        display: 'grid',
        gridTemplate: '1fr / 1fr 1fr',
        gridAutoRows: '1fr',
        gap: '20px',
        margin: '20px',
      }}>
      <div>
      <Title>Let's make a the difference together</Title>
        <Space h={20} />
        <Text>Launch a crowdfunding in 5 min</Text>
        <Space h={20} />
        <Button
          
          color="lime"
          radius="xl"
          size="lg"
          component={Link}
          to="/campaigns/create"
        >
          Create a Campaign
          </Button>
      </div>
      <SampleCards />
      </Box>
        
        )}

   
    
 
export default Home;
