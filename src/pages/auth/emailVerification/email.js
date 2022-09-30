import React from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { reset } from "../../../features/chef/authSlice";
import { Button, Grid } from "@material-ui/core";
import { useStyles } from "./style.js";
// import BackIcon from "../../../assest/Image/HomeChef/backIconblack.svg";

const EmailVerfication = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const chef = JSON.parse(localStorage.getItem("chef"));

  const goBack = () => {
    navigate(-1);
  };
  const classes = useStyles();

  // useEffect(() => {
  //   dispatch(reset());
  // }, [navigate, dispatch]);
  return (
    <>
      <div className={classes.emailContainer}>
        <Grid container className={classes.card}>
          <a onClick={goBack} className={classes.backLink}>
            {/* here */}
            <p className={classes.backIcon}>back</p>
            {/* <img className={classes.backIcon} src={BackIcon} alt="" /> */}
          </a>
          <h2 className={classes.heading}>Check Your Email</h2>
          <p className={classes.para}>
            We have sent you a link to
            <a className={classes.link} href="/">
              {/* Todo fix your text color */}
              {chef ? " " + chef.email : " your email"}
            </a>
            <br></br>
            Please Confirm your email by clicking the link reset.
            <br></br>
          </p>
          <span className={classes.para1}>Didn’t recieve any email?</span>
          <Button type="submit" className={classes.SubmitButton}>
            Resend
          </Button>
        </Grid>
      </div>
    </>
  );
};
export default EmailVerfication;
