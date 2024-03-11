import {
  AppBar, Toolbar, Avatar, Typography, List, Divider, Drawer,
  ListItem, ListItemButton, ListItemText, ListItemIcon, IconButton, Box
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';

import './header.css'
import { Link, useLocation } from "react-router-dom";
import { useTheme } from '@emotion/react';
import { useState } from 'react';

export const drawerWidth = "240px"

export default function Header({ mode, currentMode }) {

  const currentLocation = useLocation();

  const theme = useTheme()

  const [showDrawer, setShowDrawer] = useState(false)

  function toggleDrawer() {
    setShowDrawer(prev => !prev)
  }

  const menuItems = [
    { icon: <HomeIcon />, text: 'Home', link: "/" },
    { icon: <CreateIcon />, text: 'Create', link: "/create" },
    { icon: <PersonIcon />, text: 'Profile', link: "/profile" },
    { icon: <SettingsIcon />, text: 'Settings', link: "/settings" },
    { icon: <LogoutIcon />, text: 'Logout', link: "/logout" }
  ];

  const myList = menuItems.map((item, index) => (
    <Link to={item.link} key={index} style={{ textDecoration: "none", color: "inherit" }}>
      <ListItem disablePadding sx={{ backgroundColor: item.link === currentLocation.pathname ? theme.palette.bgColor.main : null }} >
        <ListItemButton>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      </ListItem>
    </Link>
  ))

  return (
    <>

      <AppBar
        className='appbar'
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth})` }, ml: { xs: 0, sm: `${drawerWidth}` } }} position="static">
        <Toolbar>
          <Box sx={{ flex: { xs: "1", sm: "0" } }}>
            <IconButton
              onClick={toggleDrawer}
              className='icon-menu'
              sx={{ display: { sm: "none" }, justifyContent: "space-between", zIndex: "10", position: "relative" }}>
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </Box>
          <Link style={{ flex: "1", color: "inherit", textDecoration: "none" }} to="/">My Expenses</Link>
          <Typography sx={{ mr: 2 }}>
            Ahmed Adel
          </Typography>
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        </Toolbar>
      </AppBar >

      <Drawer
        sx={{
          display: { xs: showDrawer ? "block" : "none", sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            color: theme.palette.cyanColor.main
          },
          zIndex: "8",
          position: "relative",
        }}
        variant="permanent"
        anchor="left"
      >

        <List>
          <ListItem sx={{ display: "flex", justifyContent: "center", mb: "10px", mt: "5px" }}
            disablePadding>
            <IconButton onClick={() => mode()} color="inherit">
              {currentMode ? <Brightness7Icon sx={{ color: "blue" }} /> : <Brightness4Icon sx={{ color: "orange" }} />}
            </IconButton>
          </ListItem>
          <Divider />
          {myList}
        </List>
      </Drawer>

    </>
  )
}
