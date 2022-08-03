import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assest/Image/HomeChef/bgImage.jpg";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    // display: "flex",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    position: "fixed",
    backgroundSize: "cover",
    justifyContent: "center",
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
    margin: "20px",
  },

  wrapper: {
    backgroundColor: "#08080878",
    boxShadow: " -3px 8px 7px 8px rgb(2 2 2 / 37%)",
    backdropFilter: "blur(8.5px)",
    // textAlign: "center",
    padding: "8px 50px",
    maxWidth: "405px",
    margin: "auto",
    borderRadius: "12px",
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
  },
  FormikLoginForm: {
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
    maxHeight: "37px",
  },
  Input: {
    width: "100%",
    padding: "10px 0px",
    borderRadius: "2px",
    outline: "none",
    border: "1px solid #80808069",
    paddingLeft: "10px",
    marginTop: "15px",
  },
  SubmitButton: {
    backgroundColor: "#e87906",
    width: "100%",
    padding: "10px",
    border: "none",
    margin: "18px 0px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#e87906",
    },
  },
  TermsConditions: {
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
    marginRight: "12px",
  },
  ContainerBox: {
    alignItems: "center",
    color: theme.palette.common.white,
    background: "radial-gradient(#00000054, #2a212166)",
    // height: "100%",
  },
  headingOne: {
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "60px",
    lineHeight: "55px",
  },
  para: {
    margin: "75px",
    marginRight: "0px",
    [theme.breakpoints.down("xs")]: {
      margin: "15px",
    },
  },
  paragraph: {
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "19px",
    lineHeight: "30px",
    /* or 125% */
  },
}));
