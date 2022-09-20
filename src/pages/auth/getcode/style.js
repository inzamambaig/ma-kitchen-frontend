import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assest/Image/HomeChef/emailBg.png";

export const useStyles = makeStyles((theme) => ({
  emailContainer: {
    width: "100%",
    
    height: "100vh",
    backgroundImage: `url(${bgImage})`,
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
    textAlign: "center",
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "30px",
    margin: "0px 0px 20px 0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      margin: "0px 0px 10px 0px",
    },
  },
  card: {
    background: "#FFFFFF",
    width: "506px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #DD7611",
    borderRadius: "5px",
    padding: "45px 20px",
    boxSizing: "border-box",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      padding: "10px 10px",
    },
  },
  para: {
    textAlign: "center",
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    margin: "0px 20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
      margin: "0px 10px",
    },
  },
  link: {
    textDecoration: "none",
    color: "#167EE6",
  },
  para1: {
    textAlign: "center",
    fontFamily: "inherit",
    fontStyle: "normal",
    color: "#5A5A5A",
    fontWeight: "400",
    fontSize: "16px",
    marginTop: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
  SubmitButton: {
    background: "#DD7611",
    color: "#FFFFFF",
    width: "80%",
    padding: "5px",
    border: "none",
    margin: "10px 0px 0px 0px",
    boxSizing: "border-box",
    height: "50px",
    "&:hover": {
      color: "#DD7611",
      backgroundColor: "#FFFFFF",
      border: "1px solid #DD7611",
    },
  },
  backIcon: {
    position : "absolute",
    left : 10,
  },
}));
