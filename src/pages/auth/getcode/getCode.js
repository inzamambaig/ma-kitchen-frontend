import React from "react";
import { Button, Grid } from "@material-ui/core";
import { useStyles } from "./style.js";
import BackIcon from "../../../assest/Image/HomeChef/backIconblack.svg"

const GetCode = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.emailContainer}>
        <Grid container className={classes.card}>
        <a href="http://makitchen.site/">
            <img className={classes.backIcon} src={BackIcon} alt=""/>
            </a>
          <h2 className={classes.heading}>Check Your Email</h2>
          <p className={classes.para}>
            We have sent you a link to{" "}
            <a className={classes.link} href="/">
              email@example.com
            </a>
            <br></br>
            Please Confirm email by clicking the link reset
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

export default GetCode;
