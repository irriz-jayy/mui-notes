import { Box, Drawer, Typography } from "@mui/material";
import React from "react";

const drawerWidth = 240;
const Layout = ({ children }) => {
  return (
    <>
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
            <Typography variant="h5">Jay's Notes</Typography>
          </div>
        </Drawer>

        <div>{children}</div>
      </Box>
    </>
  );
};

export default Layout;
