import { Center, Group, Button, Title, Text, Space, Image, Box } from "@mantine/core";
import one from "../img/1.png";
import two from "../img/2.png";
import three from "../img/3.png";

function Steps() {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "row",
        flexWrap:'wrap',
        padding: 20,
        justifyContent: "space-evenly",
      }}
    >
      

      
     
  <Box>
  <Image  width={60} src={one} 
  style={{
        marginLeft:150
      }} />
      <Space h={20} />
        <Title order={3}>Start with the basics</Title>
        <Text>Start by giving your campaign a name and location.</Text>
    
    </Box>    
      
        

      <Box>
        <Image width={60} src={two} 
        style={{
            marginLeft:130
          }} />
          <Space h={20} />
        <Title order={3}>Tell your story</Title>
        <Text>We will guide you with advice at every step.</Text>
      </Box>

      <Box>
        <Image width={60} src={three}
        style={{
            marginLeft:120
          }} />
          <Space h={20} />
        <Title order={3}>Share with family and friends</Title>
        <Text>There are people who want to help you.</Text>
      </Box>
    </div>
  );
}

export default Steps;
