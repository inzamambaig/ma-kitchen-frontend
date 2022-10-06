import React from "react";
import { Button, Grid } from "@material-ui/core";
import { useStyles } from "./style.js";
import { LocationSchema } from "./LocationSchema";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import Map from "../../../assest/Image/HomeChef/map.png";
import LocationIcon from "../../../assest/Image/HomeChef/location.svg";
const Location = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    navigate("/uploadLogo");
  };
  return (
    <>
      <div className={classes.emailContainer}>
        <Grid container className={classes.card}>
          <Grid item xs={12}>
            <h2 className={classes.heading}>Where is your Kitchen located?</h2>
          </Grid>
          <Formik
            initialValues={{
              country: "",
              city: "",
            }}
            validationSchema={LocationSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} className={classes.input}>
                    <label className={classes.label}>Country</label>
                    <Field
                      className={
                        errors.country && touched.country
                          ? classes.errorInput
                          : classes.field
                      }
                      name="country"
                      type="text"
                      placeholder="Country"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} className={classes.input}>
                    <label className={classes.label}>City</label>
                    <Field
                      className={
                        errors.city && touched.city
                          ? classes.errorInput
                          : classes.field
                      }
                      type="text"
                      placeholder="City"
                      name="city"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} className={classes.input}>
                  <label className={classes.label1}>Search Area</label>
                  <input
                    className={classes.field}
                    type="text"
                    icon=""
                    placeholder="    Search Area"
                  />
                  <img className={classes.image} src={LocationIcon} alt="" />
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
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button type="submit" className={classes.submitButton}>
                    Continue
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </div>
    </>
  );
};
export default Location;
