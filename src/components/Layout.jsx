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
    <div className="nav">
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
                borderBottom:"none",
              },
            }}
          >
            <div className="nav">
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                color="#E67D97"
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size={30}
                mr="xl"
              />
            </MediaQuery>
            </div>
            <div className={classes.links}>
              {!isAuthenticated ? (
                <>
                  {/* <Image height={50} width={120} src={logoMakeTD} /> */}
                  <Anchor
                    styles={{
                      root: {
                        color: "#1F1F37",
                      },
                    }}
                    component={NavLink}
                  to="/signup"
                  >
                    Signup
                  </Anchor>
                  <Anchor
                    styles={{
                      root: {
                        color: "#1F1F37",
                        marginLeft:50,
                      },
                    }}
                    component={NavLink}
                  to="/login"
                  >
                    Login
                  </Anchor>
                </>
              ) : (
                <>
                  {/* <Image height={50} width={120} src={logoMakeTD} /> */}
                  <div className="nav">
                  <Anchor
                    styles={{
                      root: {
                        color: "#1F1F37",
                        marginLeft:50,
                      },
                    }}
                    component={NavLink}
                  to="/"
                  >
                    Home
                  </Anchor>
                  <Anchor
                    styles={{
                      root: {
                        color: "#1F1F37",
                        marginLeft:50,
                        marginRight:50
                        
                      },
                    }}
                    component={NavLink}
                  to="/campaigns"
                  >
                    Campaigns
                  </Anchor>
                  <Anchor
                    styles={{
                      root: {
                        color: "#1F1F37",
                        marginRight:50
                        
                      },
                    }}
                    component={NavLink}
                  to="/profile"
                  >
                    Profile
                  </Anchor>
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

                  <Anchor
                    onClick={logout}
                    styles={{
                      root: {
                        color: "#1F1F37",
                        marginLeft:50
                      },
                    }}
                  >
                    Logout
                  </Anchor>
                  </div>
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
                color: "#1F1F37",
                
                
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
                styles={{
                  root: {
                    color: "#1F1F37",
                    marginTop:10
                  },
                }}
                  component={NavLink}
                  to="/signup"
                  style={({ isActive }) =>
                    isActive ? { color: "black" } : undefined
                  }
                >
                  Signup
                </Anchor>
                <Space w={50} />
                <Anchor styles={{
                      root: {
                        color: "#1F1F37",
                        marginTop:10
                      },
                    }}
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
                styles={{
                  root: {
                    color: "#1F1F37",
                    marginTop:10
                  },
                }}
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
                styles={{
                  root: {
                    color: "#1F1F37",
                    marginTop:10
                  },
                }}
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
                styles={{
                  root: {
                    color: "#1F1F37",
                    marginTop:10,
                    marginBottom:10
                  },
                }}
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
                <Anchor styles={{
                      root: {
                        color: "#1F1F37",
                        marginTop:10
                      },
                    }}
                onClick={logout}>Logout</Anchor>

                {/* <ActionIcon onClick={logout}>
                  <Logout size={48} strokeWidth={2} color={"black"} />
                </ActionIcon> */}
              </>
            )}
          </Navbar>
        }
        footer={
          <Footer
            maxHeight={60}
            p="md"
            styles={{
              root: {
                // flexDirection: "row",
                backgroundColor: "#E67D97",
                justifyContent: "flex-end",
                padding: "0",
                color: "#1F1F37",
                borderTop:"none"
              },
            }}
          >
            By Jillian Ramirez | Noelia Parada
          </Footer>
        }
        styles={{
          main: {
            backgroundColor: matchLogin || matchSignup ? "#FFCAD2" : "#FFCAD2",
            color: "#1F1F37",
          },
        }}
      >
        {children}
      </AppShell>
    </div>
  );
};

export default Layout;
