import React from "react";
import AddCampaign from "./AddCampaign";
import { Group, Button, Title, Text, Space, Image, Box } from "@mantine/core";
import { Link } from "react-router-dom";
import world from '../img/world.png'
import SampleCards from './SampleCards'




function Home() {
  // const [camps, setCampaign] = useState(campsJSON);

  // function handleNewCampaign(newCampaign) {
  //     setCampaign([...camps, newCampaign]);
  //   }

  return (
    <Box >
    
      <div className="homeBox">
      <div style={{ width: 350, marginLeft: 'auto', marginRight: 'auto' }}>
      <Image
        src={world}
      />
    </div>
    <Space h={20} />
      <Title align="center" >Let's make the difference together</Title>
        <Space h={20} />
        <Text align="center" >Launch a crowdfunding in 5 min.</Text>
        <Space h={20} />
        <Button
          align="center"
          variant="outline" color="dark" radius="xl" size="lg"
          component={Link}
          to="/signup"
        >
          Join now
          </Button>
      </div>
      <div >
      <Space h={80} />  
      <Title align="center" >Featured Campaigns</Title>
      <Space h={80} />
      <SampleCards />
      </div>
      
      </Box>
        
        )}

   
    
 
export default Home;
