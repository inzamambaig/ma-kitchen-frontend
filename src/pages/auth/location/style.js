import { makeStyles } from "@material-ui/core/styles";
import BgImg from "../../../assest/Image/HomeChef/emailBg.png";

export const useStyles = makeStyles((theme) => ({
  emailContainer: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${BgImg})`,
    backgroundRepeat: "no-repeat",
    position: "fixed",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "center center",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
    },
  },
  heading: {
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "25px",
    color: "#000000",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  card: {
    background: "#FFFFFF",
    width: "576px",
    border: "1px solid #DD7611",
    borderRadius: "5px",
    padding: "5px 10px",
    boxSizing: "border-box",
    margin: "20px 0px",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      padding: "10px 10px",
    },
  },
  label: {
    margin: "5px 0px",
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  label1: {
    margin: "10px 0px 8px 0px",
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  input: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  },

  field: {
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #F38828",
    height: "2rem",
    padding: "0px 10px",
    "&:placeholder": {
      fontFamily: "inherit",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
    },
  },
  image: {
    position: "relative",
    top: "-25px",
    width: "17px",
    left: "8px",
  },
  submitButton: {
    backgroundColor: "#DD7611",
    color: "#FFFFFF",
    width: "70%",
    margin: "20px 0px",
    border: "1px solid #DD7611",
    "&:hover": {
      color: "#DD7611",
      backgroundColor: "#FFFFFF",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));
