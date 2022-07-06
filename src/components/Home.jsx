import React from "react";
import AddCampaign from "./AddCampaign";
import { Group, Button, Title, Text, Space, Image, Box } from "@mantine/core";
import { Link } from "react-router-dom";
import home from "../img/home.png";
import startnow from "../img/startnow.png";
import SampleCards from "./SampleCards";
import Steps from "./Steps";

function Home() {
  // const [camps, setCampaign] = useState(campsJSON);

  // function handleNewCampaign(newCampaign) {
  //     setCampaign([...camps, newCampaign]);
  //   }

  return (
    <Box>
      <div className="homeBox">
        <div
          style={{ width: 350, marginLeft: "auto", marginRight: "auto" }}
        ></div>
        <div style={{ width: 120, marginLeft: "auto", marginRight: "auto" }}>
          <Image src={home} />
        </div>
        <Space h={20} />
        <Title order={1} align="center">
          Let's make the difference together
        </Title>
        <Space h={40} />
        <Text size="lg" align="center">
          Launch a crowdfunding in 5 minutes or donate generously.
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
          Join Now
        </Button>
        <Space h={300} />

        <Title order={2} align="center">
          Raising funds on MakeTheDifference only takes a few minutes
        </Title>
        <Space h={50} />
        <Steps />
      </div>

      <div>
        <Space h={300} />
        <Title align="center">Featured Campaigns</Title>
        <Space h={80} />
        <SampleCards />
      </div>

      <Space h={160} />
      <Title order={2} align="center">
        Ready to start? Join thousands of people today.
      </Title>
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
        Join Now
      </Button>
      <Space h={50} />
      <div style={{ width: 120, marginLeft: "auto", marginRight: "auto" }}>
        <Image width={200} src={startnow} />
      </div>

      <Space h={120} />
    </Box>
  );
}

export default Home;
