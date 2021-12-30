import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SpikePong from "./spikePong/SpikePong";
import Snake from "./snake/Snake";
import Home from "./home/Home";
import ClimbingVideos from "./climbing/ClimbingVideos";
import {
  Drawer,
  DrawerHeader,
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Divider,
  Button,
  List,
  Menu,
  MenuItem,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
} from "@mui/material";
import "./App.css";
import "./spikePongStyles.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const routes = {
  research: { path: "/research", header: "Research" },
  teaching: { path: "/teaching", header: "Teaching" },
  coursework: { path: "/coursework", header: "Coursework" },
  pong: { path: "/spikepong", header: "Spike Pong" },
  snake: { path: "/snake", header: "Snake" },
  climbing: { path: "/climbing", header: "Climbing" },
  running: { path: "/running", header: "Running" },
};
function App() {
  const smallScreen = window.screen.width < 500;
  const [navDrawerOpen, setNavDrawerOpen] = useState(!smallScreen);
  const [gamesDropdownOpen, setGamesDropDownOpen] = useState(false);
  const [hobbiesDropdownOpen, setHobbiesDropDownOpen] = useState(false);

  const getInitialAppBarHeading = () => {
    const currentPath = window.location.href;
    console.log(currentPath);
    for (const route in routes) {
      if (currentPath.includes(routes[route].path)) {
        return routes[route].header;
      }
    }
    return "Home";
  };
  const [appBarHeading, setAppBarHeading] = useState(getInitialAppBarHeading());

  const handleNavDrawerChange = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const handleGamesDropdownChange = () => {
    setGamesDropDownOpen(!gamesDropdownOpen);
  };

  const handleHobbiesDropdownChange = () => {
    setHobbiesDropDownOpen(!hobbiesDropdownOpen);
  };

  const handleMenuItemSelected = (itemName) => {
    smallScreen && handleNavDrawerChange();
    setAppBarHeading(itemName);
  };

  const navDrawerWidth = 200;
  return (
    <BrowserRouter>
      <Drawer
        sx={{
          width: navDrawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: navDrawerWidth,
          },
        }}
        open={navDrawerOpen}
        variant={smallScreen ? "temporary" : "persistent"}
        onClose={handleNavDrawerChange}
      >
        {!smallScreen && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "10px 0 10px 0",
            }}
          >
            <IconButton onClick={handleNavDrawerChange}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
        )}

        <Divider />
        <List>
          <MenuItem
            button
            component={Link}
            to="/"
            onClick={() => handleMenuItemSelected("Home")}
            selected={appBarHeading == "Home"}
          >
            <ListItemText primary="Home" />
          </MenuItem>

          <MenuItem
            button
            component={Link}
            to={routes.research.path}
            onClick={() => handleMenuItemSelected("Research")}
            selected={appBarHeading == "Research"}
          >
            <ListItemText primary="Research" />
          </MenuItem>
          <MenuItem
            button
            component={Link}
            to={routes.teaching.path}
            onClick={() => handleMenuItemSelected("Teaching")}
            selected={appBarHeading == "Teaching"}
          >
            <ListItemText primary="Teaching" />
          </MenuItem>
          <MenuItem
            button
            component={Link}
            to={routes.coursework.path}
            onClick={() => handleMenuItemSelected("Coursework")}
            selected={window.location.href.includes("coursework")}
          >
            <ListItemText primary="Coursework" />
          </MenuItem>
          <Divider />
          <MenuItem button onClick={handleGamesDropdownChange}>
            <ListItemText primary="Games" />
            {gamesDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </MenuItem>
          <Collapse in={gamesDropdownOpen}>
            <List disablePadding sx={{ pl: 3 }}>
              <MenuItem
                button
                component={Link}
                to={routes.pong.path}
                onClick={() => handleMenuItemSelected("Spike Pong")}
                selected={appBarHeading == "Spike Pong"}
              >
                <ListItemText primary="Spike Pong" />
              </MenuItem>
              <MenuItem
                button
                component={Link}
                to={routes.snake.path}
                onClick={() => handleMenuItemSelected("Snake")}
                selected={appBarHeading == "Snake"}
              >
                <ListItemText primary="Snake" />
              </MenuItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleHobbiesDropdownChange}>
            <ListItemText primary="Hobbies" />
            {hobbiesDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={hobbiesDropdownOpen}>
            <List disablePadding sx={{ pl: 3 }}>
              <MenuItem
                button
                component={Link}
                to={routes.climbing.path}
                onClick={() => handleMenuItemSelected("Climbing")}
                selected={appBarHeading == "Climbing"}
              >
                <ListItemText
                  primary="Climbing"
                  onClick={handleNavDrawerChange}
                />
              </MenuItem>
              <MenuItem
                button
                component={Link}
                to={routes.running.path}
                onClick={() => handleMenuItemSelected("Running")}
                selected={appBarHeading == "Running"}
              >
                <ListItemText
                  primary="Running"
                  onClick={handleNavDrawerChange}
                />
              </MenuItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
      <div
        style={{
          marginLeft: navDrawerOpen && !smallScreen ? navDrawerWidth : 0,
        }}
      >
        <AppBar position="static">
          <Toolbar>
            {!navDrawerOpen && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleNavDrawerChange}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {appBarHeading}
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path={routes.pong.path} element={<SpikePong />} />
          <Route path={routes.snake.path} element={<Snake />} />
          <Route path="/" element={<Home />} />
          <Route path={routes.climbing.path} element={<ClimbingVideos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
