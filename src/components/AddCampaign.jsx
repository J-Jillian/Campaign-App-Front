import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { useForm } from "@mantine/hooks";
import { CampContext } from "../contexts/CampContext";
import {
  NumberInput,
  TextInput,
  Image,
  Text,
  Space,
  Box,
  Button,
  Input,
  InputWrapper,
  Title,
} from "@mantine/core";
import { SessionContext } from "../contexts/SessionContext";
import { useNavigate } from "react-router-dom";
import { creatingCampaign } from "../utils/helper";

const AddCampaign = () => {
  const { campWithToken } = useContext(SessionContext);
  const navigate = useNavigate();
  const { setNeedRefresh: setAllCampsRefresh } = useContext(CampContext);

  const form = useForm({
    initialValues: {
      CampaignName: "",
      description: "",
      place: "",
      fundsFor: "",
      totalAmount: "0",
    },
  });

  const newCampaign = async (newCamp) => {
    try {
      const response = await campWithToken("create", JSON.stringify(newCamp));
      console.log(response, "Campaña que se crea en el back");
      setAllCampsRefresh(true);
      navigate("/profile");
    } catch (error) {
      console.log("error al crear campaña", error);
    }
  };

  const handleSubmit = (event) => {
    newCampaign(event);
    console.log(event, "campaña que se crea");
  };

  return (
    <div>
      <Box sx={{ maxWidth: 340 }} mx="auto">
        <Space h={100} />
        <Title>Let's start fundraising</Title>
        <Space h="md" />
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <InputWrapper label="Name your campaign" placeholder="Name">
            <Input {...form.getInputProps("CampaignName")} />
          </InputWrapper>

          <InputWrapper
            label="Where is the Campaign going to take place?"
            placeholder="Place"
          >
            <Input {...form.getInputProps("place")} />
          </InputWrapper>

          <InputWrapper label="Who are you raising funds for?" placeholder="Funds For">
            <Input {...form.getInputProps("fundsFor")} />
          </InputWrapper>


          <InputWrapper label="What are the main reasons you are going to raise money?" placeholder="Description">
            <Input {...form.getInputProps("description")} />
          </InputWrapper>

         
          <InputWrapper label="Campaign Goal" placeholder="Total Amount">
            <NumberInput
              precision={2}
              leftSection="$"
              min="0"
              {...form.getInputProps("totalAmount")}
            />
          </InputWrapper>

          <Space h="md" />
          <Button
            type="submit"
            variant="outline"
            color="dark"
            radius="xl"
            size="lg"
          >
            Create a campaign
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default AddCampaign;
