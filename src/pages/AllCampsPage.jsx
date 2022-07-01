import { Box } from "@mantine/core";
import { useContext } from "react";
import { useState } from "react";
import AddCampaign from "../components/AddCampaign";
import Campaign from "../components/Campaign";
import NewCampaign from "../components/AddProject";
import { CampContext } from "../contexts/CampContext";
import React from "react";
import SampleCards from "../components/SampleCards";

const AllCampsPage = () => {
  const { camps } = useContext(CampContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!camps) {
    return <p>...is loading</p>;
  }
  return (
    <>
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
        {camps.map((camp) => (
          <Campaign key={camp._id} camp={camp} />
        ))}
      </Box>
      <SampleCards />
    </>
  );
};

export default AllCampsPage;
