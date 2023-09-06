import { AddCircleOutline, SubjectOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import React from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const Layout = ({ children }) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      text: "My notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create note",
      icon: <AddCircleOutline color="secondary" />,
      path: "/create-note",
    },
  ];

  return (
    <>
      <AppBar
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
        }}
        elevation={0}
      >
        <Toolbar>
          <Typography>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex" }}>
        {/* Drawer */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <div>
            <Typography variant="h5" align="center">
              Jay's Notes
            </Typography>
          </div>

          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 3,
          }}
        >
          {/* Use Toolbar for separation */}
          <Toolbar />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
