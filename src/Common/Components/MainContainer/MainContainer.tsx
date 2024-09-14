import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeaderBar from "../HeaderBar/Headerbar";
import { Outlet } from "react-router-dom";

const MainContainer: React.FC = () => {
  return (
    <Box>
      <HeaderBar />
      <Outlet />
    </Box>
  );
};

export default MainContainer;
