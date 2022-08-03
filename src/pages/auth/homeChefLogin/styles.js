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
    backgroundColor: "#08080878",
    borderRadius: "12px",
  },

  wrapper: {
    background: " rgb(233 233 223 / 0%)",
    boxShadow: " -3px 8px 7px 8px rgb(2 2 2 / 37%)",
    backdropFilter: "blur(8.5px)",
    textAlign: "center",
    padding: "15px",
    maxWidth: "400px",
    margin: "auto",
    borderRadius: "12px",
    [theme.breakpoints.down("xs")]: {
      backdropFilter: "blur(5.5px)",
    },
  },

  heading: {
    marginBottom: "0px",
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
  },
  Input: {
    width: "95%",
    padding: "12px 0px",
    borderRadius: "2px",
    outline: "none",
    border: "1px solid #80808069",
    paddingLeft: "16px",
    marginBottom: "20px",
  },
  Password: {
    width: "95%",
    padding: "12px 0px",
    borderRadius: "2px",
    outline: "none",
    border: "1px solid #80808069",
    paddingLeft: "16px",
    marginBottom: "7px",
  },
  Label: {
    color: theme.palette.common.white,
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "25px",
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
}));