import React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import style from "./style";
import avatar from "../../../assets/images/avatar.jpg";
import Badge from "@mui/material/Badge";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const pages = ["Coffee Shine", "Smile Coffee", "Happy Cafe"];
const drawerWidth = 240;

const Navbar = ({ isDrawerOpen }) => {
  const theme = useTheme();

  return (
    <AppBar sx={style.wrapper(isDrawerOpen, drawerWidth, theme)}>
      <Toolbar>
        <IconButton
          size="large"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          sx={{ padding: "12px 0" }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          sx={{
            padding: "0 44px 0 16px",
          }}
        >
          UNITED ARAB EMIRATES
        </Typography>

        <Box sx={{ ...style.navLinks, ...style.flexRow }}>
          {pages.map((page) => (
            <Button key={page} sx={style.navLink}>
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ ...style.flexRow, gap: "50px" }}>
          <Box sx={style.flexRow}>
            <IconButton>
              <Avatar src={avatar} />
            </IconButton>
            <Typography sx={{ pr: "35px" }}>Ragnar Loth</Typography>

            <IconButton size="large" color="inherit" sx={style.iconBtnBadge}>
              <Badge
                anchorOrigin={{
                  horizontal: "left",
                }}
                badgeContent={3}
                color="error"
              >
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit" sx={style.iconBtnBadge}>
              <Badge>
                <SettingsOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>

          <Box>
            <Typography variant="h5" component="a" href="#" sx={style.logo}>
              LOGO
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
