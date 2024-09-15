import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderBar from "../HeaderBar/Headerbar";

const MainContainer: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <HeaderBar />
      <Box component="main" sx={{ flexGrow: 1, mt: 6 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainContainer;
