import { useLocation } from "react-router-dom";
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
import MenuIcon from "@mui/icons-material/Menu";

const MyAppBar = (props) => {
  const headings = {
    "/research": "Research",
    "/teaching": "Teaching",
    "/coursework": "Coursework",
    "/spikepong": "Spike Pong",
    "/snake": "Snake",
    "/climbing": "Climbing",
    "/running": "Running",
    "/": "Home",
  };
  const location = useLocation();
  console.log(location);
  return (
    <AppBar position="static">
      <Toolbar>
        {!props.navDrawerOpen && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={props.setNavDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {headings[location.pathname]}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
