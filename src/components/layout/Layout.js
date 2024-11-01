import React, { useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "../common/navbar/Navbar";
import LeftSidebar from "../common/leftSidebar/LeftSidebar";
import Main from "../main/Main";
import RightSidebar from "../common/rightSidebar/RightSidebar";

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar isDrawerOpen={isDrawerOpen} />
      <LeftSidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Main isDrawerOpen={isDrawerOpen} />
      <RightSidebar />
    </Box>
  );
};

export default Layout;
