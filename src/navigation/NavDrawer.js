import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

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
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CustomListItemText from "./CustomListItemText";

const NavDrawer = (props) => {
  const [gamesDropdownOpen, setGamesDropDownOpen] = useState(false);
  const [hobbiesDropdownOpen, setHobbiesDropDownOpen] = useState(false);
  const location = useLocation();

  const handleGamesDropdownChange = () => {
    console.log(gamesDropdownOpen);
    if (
      !(
        (location.pathname == "/spikepong" || location.pathname == "/snake") &&
        gamesDropdownOpen
      )
    ) {
      setGamesDropDownOpen(!gamesDropdownOpen);
    }
  };

  const handleHobbiesDropdownChange = () => {
    if (
      !(
        (location.pathname == "/climbing" || location.pathname == "/running") &&
        hobbiesDropdownOpen
      )
    ) {
      setHobbiesDropDownOpen(!hobbiesDropdownOpen);
    }
  };

  const handleMenuItemSelected = () => {
    props.smallScreen && props.handleNavDrawerChange();
  };

  const navDrawerWidth = 200;
  const background = "rgba(0,0,0,0.5)";
  return (
    <Drawer
      style={{ overflow: "hidden" }}
      sx={{
        width: navDrawerWidth,
        overflow: "hidden",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: navDrawerWidth,
        },
        height: "50%",
      }}
      open={props.navDrawerOpen}
      variant={props.smallScreen ? "temporary" : "persistent"}
      onClose={props.handleNavDrawerChange}
    >
      {" "}
      {!props.smallScreen && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "10px 0 10px 0",
            backgroundColor: background,
          }}
        >
          <IconButton onClick={props.handleNavDrawerChange}>
            <ChevronLeftIcon style={{ fill: "white" }} />
          </IconButton>
        </div>
      )}
      <List sx={{ backgroundColor: background, height: "100vh" }}>
        <Divider sx={{ backgroundColor: "white" }} />
        <MenuItem
          component={Link}
          to="/"
          selected={location.pathname == "/"}
          onClick={handleMenuItemSelected}
        >
          <CustomListItemText primary="Home" />
        </MenuItem>

        <MenuItem
          classes={{ selected: { backgroundColor: "red" } }}
          component={Link}
          to={"/research"}
          selected={location.pathname == "/research"}
          onClick={handleMenuItemSelected}
        >
          <CustomListItemText primary="Research" />
        </MenuItem>
        <MenuItem
          component={Link}
          to={"/teaching"}
          selected={location.pathname == "/teaching"}
          onClick={handleMenuItemSelected}
        >
          <CustomListItemText primary="Teaching" />
        </MenuItem>
        <MenuItem
          component={Link}
          to={"/coursework"}
          selected={location.pathname == "/coursework"}
          onClick={handleMenuItemSelected}
        >
          <CustomListItemText primary="Coursework" />
        </MenuItem>
        <Divider sx={{ backgroundColor: "white" }} />
        <MenuItem onClick={handleGamesDropdownChange}>
          <CustomListItemText primary="Games" />
          {gamesDropdownOpen ? (
            <ExpandLessIcon style={{ fill: "white" }} />
          ) : (
            <ExpandMoreIcon style={{ fill: "white" }} />
          )}
        </MenuItem>
        <Collapse in={gamesDropdownOpen}>
          <List disablePadding sx={{ pl: 3 }}>
            <MenuItem
              component={Link}
              to={"/spikepong"}
              selected={location.pathname == "/spikepong"}
              onClick={handleMenuItemSelected}
            >
              <CustomListItemText primary="Spike Pong" />
            </MenuItem>
            <MenuItem
              component={Link}
              to={"/snake"}
              selected={location.pathname == "/snake"}
              onClick={handleMenuItemSelected}
            >
              <CustomListItemText primary="Snake" />
            </MenuItem>
          </List>
        </Collapse>

        <MenuItem onClick={handleHobbiesDropdownChange}>
          <CustomListItemText primary="Hobbies" />
          {hobbiesDropdownOpen ? (
            <ExpandLessIcon style={{ fill: "white" }} />
          ) : (
            <ExpandMoreIcon style={{ fill: "white" }} />
          )}
        </MenuItem>
        <Collapse
          in={
            hobbiesDropdownOpen ||
            location.pathname == "/climbing" ||
            location.pathname == "/running"
          }
        >
          <List disablePadding sx={{ pl: 3 }}>
            <MenuItem
              component={Link}
              to={"/climbing"}
              selected={location.pathname == "/climbing"}
              onClick={handleMenuItemSelected}
            >
              <CustomListItemText primary="Climbing" />
            </MenuItem>
            <MenuItem
              component={Link}
              to={"/running"}
              selected={location.pathname == "/running"}
              onClick={handleMenuItemSelected}
            >
              <CustomListItemText primary="Running" />
            </MenuItem>
          </List>
        </Collapse>

        {/* <CustomListItemText primary="" sx={{ height: "1000px" }} /> */}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
