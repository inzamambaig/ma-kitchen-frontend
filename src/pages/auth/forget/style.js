import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assest/Image/HomeChef/emailBg.png";

export const useStyles = makeStyles((theme) => ({
  mainConatiner: {
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
  box: {
    width: "606px",
    padding: "20px 70px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #DD7611",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      padding: "20px 20px",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  heading: {
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "30px",
    color: "#000000",
    textAlign: "center",
    margin: "0px",
    // padding: "10px 0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  para: {
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    textAlign: "center",
    margin: "0px",
    marginBottom:"5px",
    color: "#5A5A5A",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  field: {
    height: "51px",
    background: "#FFFFFF",
    border: "1px solid #DD7611",
    borderRadius: "2px",
    padding: "0px 35%",
    width: "100%",
    boxSizing: "border-box",
    "&:placeholder": {
      fontSize: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 21%",
      "&:placeholder": {
        fontSize: "12px",
      },
    },
  },
  submitBtn: {
    backgroundColor: "#DD7611",
    color: "#FFFFFF",
    textTransform: "none",
    width: "100%",
    margin: "10px 0px",
    height: "50px",
    fontSize: "18px",
    border: "1px solid #DD7611",
    "&:hover": {
      color: "#DD7611",
      backgroundColor: "#FFFFFF",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
}));
