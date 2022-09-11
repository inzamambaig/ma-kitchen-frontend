import React from "react";
import { Button, Grid } from "@material-ui/core";
import { useStyles } from "./style.js";
const Reset = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainConatiner}>
      <div className={classes.box}>
        <Grid className={classes.card}>
          <Grid item>
            <h2 className={classes.heading}>Reset Your <span className={classes.colorPara}>Password</span></h2>
            <p className={classes.para}>
            Enter new Password
            </p>
          </Grid>
          <input
                className={classes.field}
                type="password"
                placeholder="New password *"
              />
          <input
                className={classes.field}
                type="password"
                placeholder="Confirm new password *"
              />
            <Button className={classes.submitBtn}>Change Password</Button>
        </Grid>
      </div>
    </div>
  );
};

export default Reset;
