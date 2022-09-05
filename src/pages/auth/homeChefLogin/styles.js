import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assest/Image/HomeChef/bg.png";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    position: "fixed",
    backgroundSize: "cover",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "center center",
  },
  errorMessage: {
    color: "#FA4949",
    margin: 0,
    padding: 0,
  },
  card: {
    margin: "20px",
    // backgroundColor: "#08080878",
    background: "linear-gradient(114.83deg, rgba(34, 34, 34, 0.2) 1.85%, rgba(0, 0, 0, 0.2) 101.31%)",
    borderRadius: "12px",
  },

  wrapper: {
    background: " rgb(233 233 223 / 0%)",
    boxShadow: " -3px 8px 7px 8px rgb(2 2 2 / 37%)",
    backdropFilter: "blur(8.5px)",
    textAlign: "center",
    padding: "15px",
    margin: "auto",
    borderRadius: "12px",
    [theme.breakpoints.down("xs")]: {
      backdropFilter: "blur(5.5px)",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "unset",
    },
  },

  heading: {
    margin: "0px",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "36px",
    color: "#FFFFFF",
    lineHeight: "44px",
  },
  SubTitle: {
    color: theme.palette.common.white,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "29px",
  },
  FormikLoginForm: {
    padding: " 3px 20px",
    textAlign: "start",
    width: "436px",
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
      padding: " 3px 0px",
      width: "90%",
      margin : "0px auto",
    },
  },
  Input: {
    width: "95%",
    padding: "12px 0px",
    borderRadius: "2px",
    outline: "none",
    border: "2px solid #80808069",
    paddingLeft: "16px",
  },
  errorInput: {
    width: "95%",
    padding: "12px 0px",
    borderRadius: "2px",
    outline: "none",
    border: "2px solid red",
    paddingLeft: "16px",
  },
  Password: {
    width: "95%",
    padding: "12px 0px",
    borderRadius: "2px",
    outline: "none",
    border: "1px solid #80808069",
    paddingLeft: "16px",
    // marginBottom: "7px",
  },
  
  Label: {
    color: theme.palette.common.white,
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "25px",
    display: "inline-block",
    margin: "2px 0px"
  },
  SubmitButton: {
    backgroundColor: "#e87906",
    width: "100%",
    padding: "10px",
    border: "none",
    margin: "7px 0px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#e87906",
    },
    marginTop: "25px",
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
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "14px",
  },
  Checkbox: {
    marginLeft: "0",
  },
  ForgotPass: {
    color: theme.palette.common.blue,
    cursor: "pointer",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "14px",
  },

  SignUpButton: {
    fontFamily: "inherit",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "14px",
    color: theme.palette.common.white,
  },

  loader: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  Login_Logo: {
    cursor: "pointer",
  },
}));
