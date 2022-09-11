import React from "react";
import { Button, Grid } from "@material-ui/core";
import { useStyles } from "./style.js";
import Map from "../../../assest/Image/HomeChef/map.png";
import LocationIcon from "../../../assest/Image/HomeChef/location.svg";
const Location = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.emailContainer}>
        <Grid container className={classes.card}>
          <Grid item xs={12}>
            <h2 className={classes.heading}>Where is your Kitchen located?</h2>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className={classes.input}>
              <lebal className={classes.label}>Country</lebal>
              <input
                className={classes.field}
                type="text"
                placeholder="Country"
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.input}>
              <lebal className={classes.label}>City</lebal>
              <input className={classes.field} type="text" placeholder="City" />
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.input}>
            <lebal className={classes.label1}>Search Area</lebal>
            <input
              className={classes.field}
              type="text"
              icon=""
              placeholder="     Search Area"
            />
            <img className={classes.image} src={LocationIcon} alt=""/>
          </Grid>
          <Grid>
            <img
              style={{
                width: "100%",
              }}
              src={Map}
              alt=""
            />
          </Grid>
          <Grid item xs={12} style={{ 
            display: "flex",
            justifyContent: "center",
           }}>
            <Button className={classes.submitButton}>Continue</Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Location;
