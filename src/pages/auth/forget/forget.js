import React from 'react'
import { Button, Grid } from "@material-ui/core";
import { useStyles } from "./style.js";

const Forget = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainConatiner}>
      <div className={classes.box}>
        <Grid className={classes.card}>
          <Grid item>
            <h2 className={classes.heading}>Password Reset</h2>
            <p className={classes.para}>
              Enter your registerd email below and we will send you a link to
              reset your password
            </p>
          </Grid>
          <input
                className={classes.field}
                type="text"
                placeholder="example@email.com"
              />
            <Button className={classes.submitBtn}>Submit</Button>
        </Grid>
      </div>
    </div>
  )
}

export default Forget;