export default {
  wrapper: {
    backgroundColor: "primary.main",
    color: "secondary.main",
    padding: "15px",
  },
  customDivider: {
    borderColor: "secondary.light",
    width: "100%",
  },
  listItemButton: (isDrawerOpen) => ({
    minHeight: "48px",
    padding: 0,
    justifyContent: isDrawerOpen ? "initial" : "center",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "&:active": {
      color: "default",
      transition: "color 0.3s ease",
    },
  }),
  listItemIcon: {
    minWidth: 0,
    justifyContent: "center",
    color: "inherit",
  },
};
