import { useContext } from "react";
import React from "react";
import { SessionContext } from "../contexts/SessionContext";
import { NavLink } from "react-router-dom";
import { Logout } from "tabler-icons-react";
import {
  createStyles,
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

const useStyles = createStyles((theme) => ({
  navbar: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

const Layout = ({ children }) => {
  const { isAuthenticated, logout } = useContext(SessionContext);
  const matchLogin = useMatch("/login");
  const matchSignup = useMatch("/signup");

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const { classes } = useStyles();

  return (
    <div>
      <AppShell
        fixed
        navbarOffsetBreakpoint="sm"

        header={
          <Header
            height={50}
            styles={{
              root: {
                // flexDirection: "row",
                backgroundColor: "#FFCAD2",
                justifyContent: "flex-end",
                padding: "0",
              },
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                mr="xl"
              />
            </MediaQuery>
            <div className={classes.links}>
              {!isAuthenticated ? (
                <>
                  {/* <Image height={50} width={120} src={logoMakeTD} /> */}
                  <Anchor>Signup</Anchor>
                  <Anchor>Login</Anchor>
                </>
              ) : (
                <>
                  {/* <Image height={50} width={120} src={logoMakeTD} /> */}
                  <Anchor>Home</Anchor>
                  <Anchor>Campaigns</Anchor>
                  <Button
                    sx={{ maxWidth: 340 }}
                    mx="auto"
                    size="xs"
                    variant="outline"
                    color="dark"
                    radius="xl"
                    component={Link}
                    to="/campaigns/create"
                  >
                    Create a Capaign
                  </Button>
                  
                  <Anchor onClick={logout} >Logout</Anchor>
                  {/* <ActionIcon onClick={logout}>
                    <Logout size={48} strokeWidth={2} color={"black"} />
                  </ActionIcon> */}
                </>
              )}
            </div>
          </Header>
        }
        navbar={
          <Navbar
            styles={{
              root: {
                // flexDirection: "row",
                backgroundColor: "#FFCAD2",
                justifyContent: "flex-end",
                padding: "0",
                color: "#1F1F37"
              },
            }}
            className={classes.navbar}
            width={{ base: "100%", sm: 0 }}
            hidden={!opened}
          >
            {!isAuthenticated ? (
              <>
                {/* <Image height={50} width={120} src={logoMakeTD} /> */}
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
                {/* <Image height={50} width={120} src={logoMakeTD} /> */}
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
                  sx={{ maxWidth: 340 }}
                  mx="auto"
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
                <Anchor onClick={logout} >Logout</Anchor>

                {/* <ActionIcon onClick={logout}>
                  <Logout size={48} strokeWidth={2} color={"black"} />
                </ActionIcon> */}
              </>
            )}
          </Navbar>
        }
        footer={
          <Footer maxHeight={60} p="md" 
          styles={{
            root: {
              // flexDirection: "row",
              backgroundColor: "#FFCAD2",
              justifyContent: "flex-end",
              padding: "0",
              color: "#1F1F37"
            },
          }}
          >
            By Jillian Ramirez | Noelia Parada
          </Footer>
        }
        styles={{
          main: {
            backgroundColor: matchLogin || matchSignup ? "#FFCAD2" : "#E67D97",
            color:"#FFCAD2"
          },
        }}
      >
        {children}
      </AppShell>
    </div>
  );
};

export default Layout;
