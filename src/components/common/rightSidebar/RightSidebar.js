import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import listData from "./data";
import style from "./style";

const Drawer = styled(MuiDrawer)({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
});

const RightSidebar = () => {
  return (
    <Drawer
      PaperProps={{
        sx: style.wrapper,
      }}
      variant="permanent"
      anchor="right"
    >
      <Divider />
      <List>
        {listData.map((icon, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton sx={style.listItemBtn}>
              <ListItemIcon sx={style.listItemIcon}>{icon.icon}</ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default RightSidebar;
