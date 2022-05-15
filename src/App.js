import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SpikePong from "./spikePong/SpikePong";
import Snake from "./snake/Snake";
import Home from "./home/Home";
import Climbing from "./climbing/Climbing";
import Research from "./research/Research";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MyAppBar from "./navigation/MyAppBar";
import NavDrawer from "./navigation/NavDrawer";

const routes = {
  research: { path: "/research", header: "Research" },
  teaching: { path: "/teaching", header: "Teaching" },
  coursework: { path: "/coursework", header: "Coursework" },
  pong: { path: "/spikepong", header: "Spike Pong" },
  snake: { path: "/snake", header: "Snake" },
  climbing: { path: "/climbing", header: "Climbing" },
  running: { path: "/running", header: "Running" },
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#442c7c",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  typography: {
    fontFamily: "Tahoma",
  },
});
function App() {
  const smallScreen = window.screen.width < 500;

  const [navDrawerOpen, setNavDrawerOpen] = useState(!smallScreen);

  const navDrawerWidth = 200;
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavDrawer
          smallScreen={smallScreen}
          navDrawerOpen={navDrawerOpen}
          handleNavDrawerChange={() => setNavDrawerOpen(!navDrawerOpen)}
        />
        <div
          style={{
            marginLeft: navDrawerOpen && !smallScreen ? navDrawerWidth : 0,
          }}
        >
          <MyAppBar
            navDrawerOpen={navDrawerOpen}
            setNavDrawerOpen={setNavDrawerOpen}
          />
          <Routes>
            <Route path={routes.pong.path} element={<SpikePong />} />
            <Route path={routes.snake.path} element={<Snake />} />
            <Route path={routes.research.path} element={<Research />} />
            <Route path="/" element={<Home smallScreen={smallScreen} />} />
            <Route
              path={routes.climbing.path}
              element={<Climbing smallScreen={smallScreen} />}
            />
            <Route
              path={routes.teaching.path}
              element={<div>coming soon!</div>}
            />
            <Route
              path={routes.coursework.path}
              element={<div>coming soon!</div>}
            />
            <Route
              path={routes.running.path}
              element={<div>coming soon!</div>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
