import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Grid } from "@material-ui/core";
import CountryCodes from "./CountryCodes";
import logo from "../../../assest/Image/HomeChef/logo.png";
import createChef from "../../../api/homechef/Signup";
import { useStyles } from "./styles";
import Country from "./Country";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("firstname is Required"),
  lastname: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("lastname is Required"),
  email: Yup.string().email("Invalid email").required(" Email is Required"),
  password: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("password is Required"),
  phone: Yup.string()
    .min(7, "Too Short!")
    .max(30, "Too Long!")
    .required("Phone is required"),
  confirmpass: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("confirm pass is Required"),
  kitchenname: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required(" Add Kitchen Name"),
  employees: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Add Employees Name"),
  city: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required(" Add Kitchen Name"),
  postalcode: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Add Employees Name"),
  state: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Add state Name"),
  country: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Add state Name"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("Address is Required"),
});

export default function HomeChefSignUp() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const handleSignup = async ({
    firstname,
    lastname,
    email,
    password,
    confirmpass,
    phone,
    kitchenname,
    employees,
    city,
    postalcode,
    state,
    country,
    address,
  }) => {
    setLoading(true);
    if (loading) {
      console.log(" its Loading...");
    }

    await createChef(
      firstname,
      lastname,
      email,
      password,
      confirmpass,
      phone,
      kitchenname,
      employees,
      city,
      postalcode,
      state,
      country,
      address
    )
      .then((res) => {
        const data = res.data;
        if (data) {
          setLoading(false);
          console.log("data");
          localStorage.setItem("token", data.token);
          // tokenization
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          <Grid container className={classes.ContainerBox} spacing={3}>
            <Grid item xs={12} sm={12} lg={5}>
              <div className={classes.para}>
                <h1 className={classes.headingOne}>
                  Unlock a new revenue stream
                </h1>
                <p className={classes.paragraph}>
                  Ma Kitchen platform gives you the flexibility, visibility and
                  customer insights you need to connect with more customers.
                  Partner with us today.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={7}>
              <div className={classes.card}>
                <div className={classes.wrapper}>
                  <div className={classes.logo}>
                    <img
                      className={classes.Login_Logo}
                      src={logo}
                      alt="login-logo"
                      width={"150px"}
                    />
                    <h2 className={classes.heading}>
                      Get Started With Ma Kitchen
                    </h2>
                    <span className={classes.SubTitle}>
                      Let’s Create Your Business Account
                    </span>
                  </div>

                  <div className={classes.LoginForm}>
                    <Formik
                      initialValues={{
                        firstname: "",
                        lastname: "",
                        email: "",
                        password: "",
                        confirmpass: "",
                        phone: "",
                        kitchenname: "",
                        employees: "",
                        city: "",
                        postalcode: "",
                        state: "",
                        country: "",
                        address: "",
                      }}
                      validationSchema={SignupSchema}
                      onSubmit={async (values) => {
                        await handleSignup(values);
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form className={classes.FormikLoginForm}>
                          <Grid className={classes.Detail}>
                            <Grid item>
                              <Field
                                className={classes.Input}
                                name="firstname"
                                placeholder="First Name"
                              />
                              {errors.firstname && touched.firstname ? (
                                <div className={classes.errorMessage}>
                                  {errors.firstname}
                                </div>
                              ) : null}
                            </Grid>
                            <Grid>
                              <Field
                                className={classes.Input}
                                name="lastname"
                                placeholder="Last Name"
                              />
                              {errors.lastname && touched.lastname ? (
                                <div className={classes.errorMessage}>
                                  {errors.lastname}
                                </div>
                              ) : null}
                              <br />
                            </Grid>
                          </Grid>
                          <Grid className={classes.email}>
                            <Field
                              className={classes.Input}
                              name="email"
                              type="email"
                              placeholder="Email"
                            />
                            {errors.email && touched.email ? (
                              <div className={classes.errorMessage}>
                                {errors.email}
                              </div>
                            ) : null}
                          </Grid>
                          <Grid className={classes.Detail}>
                            <Grid item>
                              <Field
                                className={classes.Input}
                                name="password"
                                placeholder="Password"
                                type="password"
                              />
                              {errors.password && touched.password ? (
                                <div className={classes.errorMessage}>
                                  {errors.password}
                                </div>
                              ) : null}
                            </Grid>
                            <Grid>
                              <Field
                                className={classes.Input}
                                name="confirmpass"
                                placeholder="Confirm Password"
                                type="password"
                              />
                              {errors.confirmpass && touched.confirmpass ? (
                                <div className={classes.errorMessage}>
                                  {errors.confirmpass}
                                </div>
                              ) : null}
                              <br />
                            </Grid>
                          </Grid>

                          <Grid className={classes.Detail}>
                            <Grid item xs={4}>
                              <Field
                                as="select"
                                name="countrycode"
                                className={[
                                  classes.Input,
                                  classes.Country,
                                ].join(" ")}
                                defaultValue="92"
                              >
                                <CountryCodes />
                              </Field>
                              {/* {errors.password && touched.password ? (
                                <div className={classes.errorMessage}>
                                  {errors.password}
                                </div>
                              ) : null} */}
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                className={classes.Input}
                                name="phone"
                                placeholder="+92"
                              />
                              {errors.phone && touched.phone ? (
                                <div className={classes.errorMessage}>
                                  {errors.phone}
                                </div>
                              ) : null}
                              <br />
                            </Grid>
                          </Grid>

                          <Grid className={classes.email}>
                            <Field
                              className={classes.Input}
                              name="kitchenname"
                              placeholder="Kitchen Name"
                            />
                            {errors.kitchenname && touched.kitchenname ? (
                              <div className={classes.errorMessage}>
                                {errors.kitchenname}
                              </div>
                            ) : null}
                          </Grid>
                          <Grid className={classes.email}>
                            <Field
                              className={classes.Input}
                              name="employees"
                              placeholder="Number of Employees"
                            />
                            {errors.employees && touched.employees ? (
                              <div className={classes.errorMessage}>
                                {errors.employees}
                              </div>
                            ) : null}
                          </Grid>

                          <Grid className={classes.Detail}>
                            <Grid item>
                              <Field
                                className={classes.Input}
                                name="city"
                                placeholder="City"
                              />
                              {errors.city && touched.city ? (
                                <div className={classes.errorMessage}>
                                  {errors.kitchenname}
                                </div>
                              ) : null}
                            </Grid>
                            <Grid>
                              <Field
                                className={classes.Input}
                                name="postalcode"
                                placeholder="Postal code"
                              />
                              {errors.postalcode && touched.postalcode ? (
                                <div className={classes.errorMessage}>
                                  {errors.postalcode}
                                </div>
                              ) : null}
                              <br />
                            </Grid>
                          </Grid>
                          <Grid
                            className={classes.CountryGrid}
                            container
                            spacing={2}
                          >
                            <Grid item xs={4}>
                              <Field
                                className={classes.Input}
                                name="state"
                                placeholder="State"
                              />
                              {errors.state && touched.state ? (
                                <div className={classes.errorMessage}>
                                  {errors.state}
                                </div>
                              ) : null}
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                as="select"
                                className={[
                                  classes.Input,
                                  classes.Country,
                                ].join(" ")}
                                name="country"
                                placeholder="Country"
                                defaultValue="Pakistan"
                              >
                                <Country />
                              </Field>

                              {errors.country && touched.country ? (
                                <div className={classes.errorMessage}>
                                  {errors.country}
                                </div>
                              ) : null}
                              <br />
                            </Grid>
                          </Grid>
                          <Grid className={classes.email}>
                            <Field
                              className={classes.Input}
                              name="address"
                              placeholder="Address"
                            />

                            {errors.address && touched.address ? (
                              <div className={classes.errorMessage}>
                                {errors.address}
                              </div>
                            ) : null}
                          </Grid>
                          <Button
                            type="submit"
                            className={classes.SubmitButton}
                            // onClick={() => {
                            //   navigate("/");
                            // }}
                          >
                            Submit
                          </Button>
                          <div className={classes.TermsConditions}>
                            <label className={classes.Terms}>
                              By continuing you indicate that you read and
                              agreed to the Terms of Use
                            </label>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
