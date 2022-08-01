import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assest/Image/HomeChef/bg.png";
import { Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import logo from "../../../assest/Image/HomeChef/logo.png";
import { useNavigate } from "react-router-dom";

import validateChef from "../../../api/homechef/auth";

const useStyles = makeStyles((theme) => ({
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
    color: "green",
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

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("password is Required"),
  email: Yup.string().email("Invalid email").required(" Email is Required"),
});

export default function HomeChefLogin() {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  let navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    if (loading) {
      console.log("Loading...");
    }

    await validateChef(email, password)
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
        console.log(err);
      });
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.card}>
            <div className={classes.wrapper}>
              <div className={classes.logo}>
                <img
                  className={classes.Login_Logo}
                  src={logo}
                  alt="login-logo"
                  width={"150px"}
                />
              </div>
              <h2 className={classes.heading}>Welcome </h2>
              <span className={classes.SubTitle}>Login into your account</span>
              <div className={classes.LoginForm}>
                <Formik
                  initialValues={{
                    password: "",
                    email: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={async (values) => {
                    await handleLogin(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className={classes.FormikLoginForm}>
                      <label className={classes.Label}>Email</label>
                      <Field
                        className={classes.Input}
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                      />
                      {/* {errors.email && touched.email ? (
                        <div className={classes.errorMessage}>
                          {errors.email}
                        </div>
                      ) : null} */}
                      <label className={classes.Label}>Password</label>
                      <Field
                        className={classes.Password}
                        name="password"
                        placeholder="password"
                      />
                      {/* {errors.password && touched.password ? (
                        <div className={classes.errorMessage}>
                          {errors.password}
                        </div>
                      ) : null} */}
                      <br />
                      <div className={classes.checkout}>
                        <span className={classes.radioBox}>
                          <input type="checkbox" className={classes.Checkbox} />
                          Stay Signed In
                        </span>
                        <span className={classes.ForgotPass}>
                          Forgot Password?
                        </span>
                      </div>
                      <Button type="submit" className={classes.SubmitButton}>
                        Next
                      </Button>
                      <span className={classes.SignUpButton}>
                        Start Your Business?{" "}
                        <span
                          className={classes.ForgotPass}
                          onClick={() => {
                            navigate("/signup");
                          }}
                        >
                          Create an account
                        </span>
                      </span>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
