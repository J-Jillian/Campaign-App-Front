import { Group, Button } from '@mantine/core';
import React from "react";
import AddCampaign from './AddCampaign';
import { Link } from 'react-router-dom';
function Home() {

    // const [camps, setCampaign] = useState(campsJSON);

    // function handleNewCampaign(newCampaign) {
    //     setCampaign([...camps, newCampaign]);
    //   }


    return ( 
<Group>
<Button variant="outline" color="dark" radius="xl" size="lg">
<Link to={"/campaigns/create"}>Create a Capaign</Link>
    </Button>

{/* <AddCampaign handleNewCampaign={handleNewCampaign} /> */}
    </Group>


        
    );
}

export default Home;