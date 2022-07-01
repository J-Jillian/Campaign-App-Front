import { useContext } from "react";
import React from "react";
import { SessionContext } from "../contexts/SessionContext";
import { NavLink } from "react-router-dom";
import { Logout } from "tabler-icons-react";
import {
  ActionIcon,
  Anchor,
  AppShell,
  Box,
  Header,
  Image,
  Navbar,
  Title,
  Footer,
  Space,
  useMantineTheme,
  MediaQuery,
  Burger,
  Text,
  Button,
} from "@mantine/core";
import { useMatch } from "react-router-dom";
import logoMakeTD from "../img/makethedifference.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const { isAuthenticated, logout } = useContext(SessionContext);
  const matchLogin = useMatch("/login");
  const matchSignup = useMatch("/signup");

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <AppShell
        header={
          <Header>
            <Navbar
              styles={{
                root: {
                  flexDirection: "row",
                  backgroundColor: "#FAF9FF",
                  justifyContent: "flex-end",
                  padding: "0",
                },
              }}
              height={{ base: 100 }}
              p="md"
            >
              {!isAuthenticated ? (
                <>
                  <Image height={50} width={120} src={logoMakeTD} />
                  <Space w={600} />
                  <Anchor
                    component={NavLink}
                    to="/signup"
                    style={({ isActive }) =>
                      isActive ? { color: "black" } : undefined
                    }
                  >
                    Signup
                  </Anchor>
                  <Space w={50} />
                  <Anchor
                    component={NavLink}
                    to="/login"
                    style={({ isActive }) =>
                      isActive ? { color: "black" } : undefined
                    }
                  >
                    Login
                  </Anchor>
                </>
              ) : (
                <>
                  <Image height={50} width={120} src={logoMakeTD} />
                  <Space w={680} />

                  <Anchor
                    component={NavLink}
                    to="/"
                    style={({ isActive }) =>
                      isActive ? { color: "black" } : undefined
                    }
                  >
                    Home
                  </Anchor>
                  <Space w={50} />
                  <Anchor
                    component={NavLink}
                    to="/campaigns"
                    style={({ isActive }) =>
                      isActive ? { color: "black" } : undefined
                    }
                  >
                    Campaigns
                  </Anchor>
                  <Space w={50} />
                  <Anchor
                    component={NavLink}
                    to="/profile"
                    style={({ isActive }) =>
                      isActive ? { color: "black" } : undefined
                    }
                  >
                    Profile
                  </Anchor>
                  <Space w={50} />

                  <Button
                    size="xs"
                    variant="outline"
                    color="dark"
                    radius="xl"
                    component={Link}
                    to="/campaigns/create"
                  >
                    Create a Capaign
                  </Button>
                  <Space w={50} />

                  <ActionIcon onClick={logout}>
                    <Logout size={48} strokeWidth={2} color={"black"} />
                  </ActionIcon>
                </>
              )}
            </Navbar>
          </Header>
        }
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
        styles={{
          main: {
            backgroundColor: matchLogin || matchSignup ? "#FFA900" : "#FFCAD2",
          },
        }}
      >
        {children}
      </AppShell>
    </div>
  );
};

export default Layout;
