export default {
  wrapper: {
    top: "64px",
    backgroundColor: "primary.main",
  },
  listItemBtn: {
    minHeight: 48,
    px: 2.5,
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  listItemIcon: {
    minWidth: 0,
    justifyContent: "center",
    color: "default",
  },
};
