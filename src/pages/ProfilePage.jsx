import React from "react";
import {Button, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext'
import { useState, useContext, useEffect } from "react";
import { Box } from '@mantine/core'
import Campaign from "../components/Campaign";


function ProfilePage () {
const {apiWithToken} = useContext(SessionContext);

const [userCampaing, setUserCampaing] = useState()

const fetchUserCamp = async ()=> {
    const response = await apiWithToken('profile');
    console.log(response, 'respuesta campañas usuarios')
    setUserCampaing(response);
}

useEffect(() => {
    fetchUserCamp()
  }, [])

if(!userCampaing){
    return(<p>..is loading</p>)
}

    return (  
        <div>
          <Title>You're Campaigns</Title>
           

    <Box
          mx="auto"
          sx={{
            display: "grid",
            gridTemplate: "1fr / 1fr 1fr",
            gridAutoRows: "1fr",
            gap: "20px",
            margin: "20px",
            maxWidth: 600,
          }}
        >
          {userCampaing && userCampaing.map(camp => (
            <Campaign key={camp._id} camp={camp} />
          ))}
        </Box>
        </div>
    );
}

export default ProfilePage;