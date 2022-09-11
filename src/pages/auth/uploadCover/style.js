import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assest/Image/HomeChef/emailBg.png";

export const useStyles = makeStyles((theme) => ({
  conatiner: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    position: "fixed",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "center center",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
    },
  },
  box: {
    width: "600px",
    // padding: "20px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #DD7611",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      margin: "0px auto",
    },
  },
  heading: {
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
    color: "#000000",
    margin: "0px 20px",
    borderBottom: "3px solid #EEEEEE",
    padding: "10px 0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  dropBox: {
    margin: "10px 20px",
  },
  discard: {
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: 400,
    // fontSize: "20px",
    border: "1px solid #DD7611",
    borderRadius: "5px",
    color: "#DD7611",
    padding: "5px 15px",
    "&:hover": {
      backgroundColor: "#DD7611",
      color: "#FFFFFF",
    },
  },
  logo: {
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: 400,
    padding: "5px 25px",
    border: "1px solid #DD7611",
    backgroundColor: "#DD7611",
    marginLeft: "10px",
    borderRadius: "5px",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#DD7611",
    },
  },
}));
