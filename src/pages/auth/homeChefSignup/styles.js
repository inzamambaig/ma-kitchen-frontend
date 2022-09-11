import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assest/Image/HomeChef/bgImage.jpg";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    position: "fixed",
    backgroundSize: "cover",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundPosition: "center center",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
    },
  },

  errorMessage: {
    color: "#FA4949",
    margin: 0,
    padding: 0,
  },
  card: {
    margin: "7px",
  },

  wrapper: {
    // backgroundColor: "#08080878",
    background: "linear-gradient(114.83deg, rgba(34, 34, 34, 0.2) 1.85%, rgba(0, 0, 0, 0.2) 101.31%)",
    boxShadow: " -3px 8px 7px 8px rgb(2 2 2 / 37%)",
    backdropFilter: "blur(8.5px)",
    height: "100%",
    padding: "20px 50px",
    maxWidth: "405px",
    margin: "auto",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: "12px",
    [theme.breakpoints.down("md")]: {
      padding: "2px 0px",
      maxWidth: "90%",
    },
  },

  heading: {
    color: theme.palette.common.white,
    margin: "0px",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "44px",
  },
  SubTitle: {
    color: theme.palette.common.white,
    fontstyle: "normal",
    fontweight: "400",
    fontsize: "15.035px",
    lineheight: "11px",
    marginBottom: "10px",
  },
  FormikLoginForm: {
    boxSizing: "border-box !important",
    // padding: " 3px 20px",
    // marginRight: "12px",
  },
  CountryGrid: {
    display: "flex",
    justifyContent: "space-between",
    // marginRight: "11px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  Country: {
    // maxHeight: "15px",
    // maxHeight: "37px",
  },
  Input: {
    width: "100%",
    padding: "7px 0px",
    borderRadius: "2px",
    outline: "none",
    margin: "0px 0px",
    border: "2px solid #80808069",
    paddingLeft: "10px",
    boxSizing: "border-box",
  },
  errorInput: {
    width: "100%",
    padding: "7px 0px",
    borderRadius: "2px",
    outline: "none",
    margin: "0px 0px",
    border: "2px solid red",  
    paddingLeft: "10px",
    boxSizing: "border-box",
  },

  Select: {
    width: "100%",
    padding: "5px 0px",
    // margin: "-2px 0px",
    marginRight: "0px",
  },
  SubmitButton: {
    backgroundColor: "#e87906",
    width: "100%",
    padding: "5px",
    border: "none",
    margin: "10px 0px",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#e87906",
      
    },
  },
  TermsConditions: {
    display: "flex",
      justifyContent:"start",
      alignItems:"center",
    textAlign: "center",
  },
  Terms: {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "12px",
    lineHeight: "14px",
  },
  checkout: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
  },
  radioBox: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.common.white,
  },
  ForgetPass: {
    color: theme.palette.common.blue,
  },
  Detail: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "11px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  logo: {
    textAlign: "center",
  },
  email: {
    // marginRight: "12px",
  },
  ContainerBox: {
    alignItems: "center",
    color: theme.palette.common.white,
    // background: "radial-gradient(#00000054, #2a212166)",
    height: "100vh !important",
  },
  headingOne: {
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "60px",
    lineHeight: "55px",
    margin : "0px auto"
  },
  para: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 70px",
    // marginRight: "0px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "15px",
    },
  },
  paragraph: {
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "19px",
    lineHeight: "25px",
    /* or 125% */
  },
  account: {
    display: "flex",
    justifyContent: "center",
  },
  accountText: {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "12px",
    lineHeight: "14px",
    color: theme.palette.common.white,
  },
  linkText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "14px",
    color: theme.palette.common.secondary.main,
    marginLeft: "10px",
    textDecoration: "none",
  },
  loader: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
