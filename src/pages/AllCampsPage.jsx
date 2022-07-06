import { Box, Space, Title, Text, Button } from "@mantine/core";
import { useContext } from "react";
import { useState } from "react";
import AddCampaign from "../components/AddCampaign";
import Campaign from "../components/Campaign";
import NewCampaign from "../components/AddProject";
import { CampContext } from "../contexts/CampContext";
import React from "react";
import SampleCards from "../components/SampleCards";
import { Link } from "react-router-dom";

const AllCampsPage = () => {
  const { camps } = useContext(CampContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!camps) {
    return <p>...is loading</p>;
  }
  return (
    <>
      <div
        style={{
          
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "100px",
        }}
      >
        <Title order={1} align="center">
          Explore campaigns
        </Title>
        <Space h={40} />
        <Text size="lg" align="center">
       MakeTheDifference can help you for all kinds of goals

        </Text>
        <Space h={40} />
        <Button
          align="center"
          variant="outline"
          color="dark"
          radius="xl"
          size="lg"
          component={Link}
          to="/signup"
        >
          Start a Campaign
        </Button>
      </div>
      <Box
        mx="auto"
        sx={{
          display: "grid",
          gridTemplate: "1fr / 1fr 1fr",
          gridAutoRows: "1fr",
          gap: "20px",
          margin: "100px",
          maxWidth: 600,
        }}
      >
        {camps.map((camp) => (
          <Campaign key={camp._id} camp={camp} />
        ))}
      </Box>
      <SampleCards />
      <Space h={120} />
    </>
  );
};

export default AllCampsPage;
