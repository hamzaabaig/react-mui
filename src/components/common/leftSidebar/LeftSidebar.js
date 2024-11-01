import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import style from "./style";
import { firstSectionItems, secondSectionItems } from "./data";

const drawerWidth = 240;

const openedMixin = () => ({
  width: drawerWidth,
  transition: "width 400ms ease-in-out",
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: "width 400ms ease-in-out",
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "12px",
  padding: theme.spacing(0, 2),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "isDrawerOpen",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ isDrawerOpen }) => isDrawerOpen,
      style: {
        ...openedMixin(),
        "& .MuiDrawer-paper": openedMixin(),
      },
    },
    {
      props: ({ isDrawerOpen }) => !isDrawerOpen,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const LeftSidebar = ({ isDrawerOpen, toggleDrawer }) => {
  const theme = useTheme();

  return (
    <Drawer
      PaperProps={{
        sx: style.wrapper,
      }}
      variant="permanent"
      isDrawerOpen={isDrawerOpen}
    >
      <DrawerHeader sx={{ padding: "0" }}>
        <AcUnitIcon
          sx={{
            color: "default",
            fontSize: "2.5rem",
            margin: "0 auto",
            opacity: isDrawerOpen ? 1 : 0,
          }}
        />
        <Divider sx={style.customDivider} />
        <IconButton
          color="inherit"
          aria-label="toggle drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{
            marginLeft: 0,
            padding: "0 0 25px 0",
          }}
        >
          <GridViewOutlinedIcon />
        </IconButton>
      </DrawerHeader>
      <Divider sx={style.customDivider} />
      <List
        sx={{
          paddingLeft: !isDrawerOpen && "20px",
        }}
      >
        {firstSectionItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              display: "block",
            }}
          >
            <ListItemButton
              disableRipple
              sx={style.listItemButton(isDrawerOpen)}
            >
              <ListItemIcon
                sx={{
                  mr: isDrawerOpen ? 3 : "auto",
                  ...style.listItemIcon,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: isDrawerOpen ? 1 : 0 }}
              />
              <ListItemIcon
                sx={{
                  ...style.listItemIcon,
                  opacity: isDrawerOpen ? 1 : 0,
                  ml: isDrawerOpen ? 3 : "auto",
                }}
              >
                <CircleOutlinedIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={style.customDivider} />
      <List sx={{ paddingLeft: !isDrawerOpen && "20px" }}>
        {secondSectionItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              display: "block",
            }}
          >
            <ListItemButton
              disableRipple
              sx={style.listItemButton(isDrawerOpen)}
            >
              <ListItemIcon
                sx={{
                  mr: isDrawerOpen ? 3 : "auto",
                  ...style.listItemIcon,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: isDrawerOpen ? 1 : 0 }}
              />
              <ListItemIcon
                sx={{
                  ...style.listItemIcon,
                  opacity: isDrawerOpen ? 1 : 0,
                  ml: isDrawerOpen ? 3 : "auto",
                }}
              >
                <CircleOutlinedIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={style.customDivider} />
    </Drawer>
  );
};

export default LeftSidebar;
