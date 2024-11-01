import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "./style";

const drawerWidth = 240;
const Main = ({ isDrawerOpen }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...style.background,
        width: isDrawerOpen
          ? `calc(100% - ${drawerWidth}px)`
          : `calc(100% - (${theme.spacing(8)} + 1px))`,
        transition: "width 400ms ease-in-out",
      }}
    >
      <Typography variant="h3" gutterBottom>
        This is a website
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
        laboriosam ipsa nam cumque ipsum repellendus natus quas ut nemo
        explicabo?
      </Typography>
    </Box>
  );
};

export default Main;
