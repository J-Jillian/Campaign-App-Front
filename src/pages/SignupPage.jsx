import {
  Image,
  Space,
  Box,
  Text,
  Button,
  Input,
  InputWrapper,
  PasswordInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { signup } from "../utils/helper";
import React from "react";
import { At } from "tabler-icons-react";
import handsignup from "../img/handsignup.png";

const SignupPage = () => {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const createUser = async (newUser) => {
    try {
      const response = await signup(newUser);

      if (response.status === "KO") {
        throw new Error(response.message);
      }

      navigate("/login");
    } catch (error) {
      form.setErrors({ username: error.message });
    }
  };

  const handleSubmit = (values) => {
    console.log(values);
    createUser(values);
  };

  

  return (
    <div className="setUpBox">
      <Box sx={{ maxWidth: 340 }} mx="auto">
        <div style={{ width: 120, marginLeft: "auto", marginRight: "auto" }}>
          <Image src={handsignup} />
        </div>
        <Title>Join us</Title>
        <Space h="md" />
        <Text size="lg">
          Launch a crowdfunding in 5 minutes or donate generously.
        </Text>
        <Space h="md" />
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <InputWrapper required label="Username">
            <Space h="md" />
            <Input
              icon={<At />}
              placeholder="Your email here"
              radius="lg"
              {...form.getInputProps("username")}
            />
          </InputWrapper>
          <InputWrapper required label="Password">
            <PasswordInput radius="lg" {...form.getInputProps("password")} />
          </InputWrapper>
          <Space h="md" />
          <Button type="submit" variant="outline" color="dark" radius="xl">
            Register
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default SignupPage;
