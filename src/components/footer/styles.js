import { makeStyles, createStyles } from "@material-ui/core/styles";

export const createStyle = makeStyles((theme) =>
  createStyles({
    footer: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      backgroundColor: "#262626",
      color: "white",
      paddingBottom: "20px",
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    mobileFooter: {
      textAlign: "center",
      display: "none",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      backgroundColor: "#262626",
      color: "white",
      paddingTop: "15px",
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
  })
);
