export default {
  wrapper: (isDrawerOpen, drawerWidth, theme) => ({
    boxShadow: "none",
    width: isDrawerOpen
      ? `calc(100% - ${drawerWidth}px)`
      : `calc(100% - (${theme.spacing(8)} + 1px))`,
    marginLeft: isDrawerOpen ? `${drawerWidth}px` : "0",
    transition: "width 400ms ease-in-out, margin 400ms ease-in-out",
  }),

  flexRow: {
    display: "flex",
    alignItems: "center",
  },

  navLinks: {
    flexGrow: "1",
    gap: "50px",
  },

  navLink: {
    color: "default",
    transition: "color 0.3s",
    "&:hover": {
      color: "secondary.main",
    },
  },

  logo: {
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    textDecoration: "none",
    color: "inherit",
  },
  iconBtnBadge: {
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "primary.light",
    },
  },
};
