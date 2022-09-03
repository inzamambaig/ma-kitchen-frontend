import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import { Button, Grid } from "@material-ui/core";
import { Oval } from "react-loader-spinner";
import logo from "../../../assest/Image/HomeChef/logo.png";
import { useStyles } from "./styles";
import Country from "./Country";
import CountryCodes from "./CountryCodes";
import { createChef, reset } from "../../../features/chef/authSlice";
import { SignupSchema } from "./SignupSchema";

export default function HomeChefSignUp() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { chef, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || chef) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [chef, isError, isSuccess, message, navigate, dispatch]);

  const handleSignup = async (values) => {
    await dispatch(createChef(values));
  };

  return (
    <>
      <div className={classes.container}>
        <div
          className={classes.row}
          style={{
            height: "100%",
          }}
        >
          <Grid container className={classes.ContainerBox} spacing={3}>
            <Grid item xs={12} sm={12} lg={6}>
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
            <Grid item xs={12} sm={12} lg={6}>
              <div className={classes.card}>
                <div className={classes.wrapper}>
                  <div className={classes.logo}>
                    <a href="http://makitchen.site/">
                      <img
                        className={classes.Login_Logo}
                        src={logo}
                        alt="login-logo"
                        width={"150px"}
                      />
                    </a>
                    <div className={classes.account}>
                      <span className={classes.accountText}>
                        Already have an account?
                        <Link to="/" className={classes.linkText}>
                          Sign in
                        </Link>
                      </span>
                    </div>
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
                          <Grid
                            container
                            className={classes.Detail}
                            spacing={2}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Grid item xs={6}>
                              <Field
                                className={
                                  errors.firstname && touched.firstname
                                    ? classes.errorInput
                                    : classes.Input
                                }
                                name="firstname"
                                placeholder="First Name"
                              />
                              {errors.firstname && touched.firstname ? (
                                <div className={classes.errorMessage}>
                                  {/* {errors.firstname} */}
                                </div>
                              ) : null}
                            </Grid>
                            <Grid item xs={6}>
                              <Field
                                className={
                                  errors.lastname && touched.lastname
                                    ? classes.errorInput
                                    : classes.Input
                                }
                                name="lastname"
                                placeholder="Last Name"
                              />
                              {errors.lastname && touched.lastname ? (
                                <div className={classes.errorMessage}>
                                  {/* {errors.lastname} */}
                                </div>
                              ) : null}
                              {/* <br /> */}
                            </Grid>
                          </Grid>
                          <Grid container className={classes.email} spacing={2} >
                            <Grid item xs={12}>
                              <Field
                                className={
                                  errors.email && touched.email
                                    ? classes.errorInput
                                    : classes.Input
                                }
                                name="email"
                                type="email"
                                placeholder="Email"
                              />
                              {errors.email && touched.email ? (
                                <div className={classes.errorMessage}>
                                  {/* {errors.email} */}
                                </div>
                              ) : null}
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            className={classes.Detail}
                            spacing={2}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Grid item xs={6}>
                              <Field
                                className={
                                  errors.password && touched.password
                                    ? classes.errorInput
                                    : classes.Input
                                }
                                name="password"
                                placeholder="Password"
                                type="password"
                              />
                              {errors.password && touched.password ? (
                                <div className={classes.errorMessage}>
                                  {/* {errors.password} */}
                                </div>
                              ) : null}
                            </Grid>
                            <Grid item xs={6}>
                              <Field
                                className={
                                  errors.confirmpass && touched.confirmpass
                                    ? classes.errorInput
                                    : classes.Input
                                }
                                name="confirmpass"
                                placeholder="Confirm Password"
                                type="password"
                              />
                              {errors.confirmpass && touched.confirmpass ? (
                                <div className={classes.errorMessage}>
                                  {/* {errors.confirmpass} */}
                                </div>
                              ) : null}
                              {/* <br /> */}
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            className={classes.Detail}
                            spacing={2}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Grid item xs={4}>
                              <Field
                                as="select"
                                name="countrycode"
                                className={[
                                  classes.Input,
                                  classes.Country,
                                ].join(" ")}
                              >
                                <CountryCodes />
                              </Field>
                            </Grid>
                            <Grid item xs={8}>
                              <Field
                                className={
                                  errors.phone && touched.phone
                                    ? classes.errorInput
                                    : classes.Input
                                }
                                name="phone"
                                placeholder="+92"
                              />
                              {errors.phone && touched.phone ? (
                                <div className={classes.errorMessage}>
                                  {/* {errors.phone} */}
                                </div>
                              ) : null}
                            </Grid>
                          </Grid>
                          <Grid container className={classes.email}  spacing={2}>
                            <Grid item xs={12}>
                              <Field
                                className={
                                  errors.kitchenname && touched.kitchenname
                                    ? classes.errorInput
                                    : classes.Input
                                }
                                name="kitchenname"
                                type="text"
                                placeholder="Kitchen Name"
                              />
                              {errors.kitchenname && touched.kitchenname ? (
                                <div className={classes.errorMessage}>
                                  {/* {errors.kitchenname} */}
                                </div>
                              ) : null}
                            </Grid>
                          </Grid>
                          <Grid container className={classes.email} spacing={2}>
                            <Grid item xs={12}>
                              <Field
                                className={
                                  errors.employees && touched.employees
                                    ? classes.errorInput
                                    : classes.Input
                                }
                                name="employees"
                                type="text"
                                placeholder="Number of Employees"
                              />
                              {errors.employees && touched.employees ? (
                                <div className={classes.errorMessage}>
                                  {/* {errors.employees} */}
                                </div>
                              ) : null}
                            </Grid>
                          </Grid>

                          <Grid
                            container
                            className={classes.Detail}
                            spacing={2}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Grid item xs={6}>
                              <Field
                                className={
                                  errors.city && touched.city
                                    ? classes.errorInput
                                    : classes.Input
                                }
                                name="city"
                                placeholder="City"
                              />
                              {errors.city && touched.city ? (
                                <div className={classes.errorMessage}>
                                  {/* {errors.city} */}
                                </div>
                              ) : null}
                            </Grid>
                            <Grid item xs={6}>
                              <Field
                                className={
                                  errors.postalcode && touched.postalcode
                                    ? classes.errorInput
                                    : classes.Input
                                }
                                name="postalcode"
                                placeholder="Postal code"
                              />
                              {errors.postalcode && touched.postalcode ? (
                                <div className={classes.errorMessage}>
                                  {/* {errors.postalcode} */}
                                </div>
                              ) : null}
                            </Grid>
                          </Grid>

                          <Grid
                            className={classes.CountryGrid}
                            container
                            spacing={2}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Grid item xs={6}>
                              <Field
                                className={
                                  errors.state && touched.state
                                    ? classes.errorInput
                                    : classes.Input
                                }
                                name="state"
                                placeholder="State"
                              />
                              {errors.state && touched.state ? (
                                <div className={classes.errorMessage}>
                                  {/* {errors.state} */}
                                </div>
                              ) : null}
                            </Grid>
                            <Grid item xs={6}>
                              <Field
                                as="select"
                                className={[
                                  errors.country && touched.country
                                    ? classes.errorInput
                                    : classes.Input,
                                ].join(" ")}
                                name="country"
                                placeholder="Country"
                              >
                                <Country />
                              </Field>

                              {errors.country && touched.country ? (
                                <div className={classes.errorMessage}>
                                  {/* {errors.country} */}
                                </div>
                              ) : null}
                            </Grid>
                            
                          </Grid>
                          <Grid container className={classes.email} spacing={2}>
                            <Grid item xs={12}>
                              <Field
                                className={
                                  errors.address && touched.address
                                    ? classes.errorInput
                                    : classes.Input
                                }
                                name="address"
                                type="text"
                                placeholder="Address"
                              />
                              {errors.address && touched.address ? (
                                <div className={classes.errorMessage}>
                                  {/* {errors.address} */}
                                </div>
                              ) : null}
                            </Grid>
                          </Grid>
                          <Button
                            type="submit"
                            className={classes.SubmitButton}
                          >
                            Submit
                          </Button>
                          <div className={classes.TermsConditions}>
                            <label className={classes.Terms}>
                              By continuing you indicate that you read
                              and agreed to the Terms of Use
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
        {isLoading && (
          <Oval
            color="#F38828"
            height={50}
            width={50}
            wrapperClass={classes.loader}
          />
        )}
      </div>
    </>
  );
}
