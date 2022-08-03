import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import logo from "../../../assest/Image/HomeChef/logo.png";
import validateChef from "../../../api/homechef/auth";
import { useStyles } from "./styles";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

export default function HomeChefLogin() {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  let navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    setLoading(true);

    if (loading) {
      console.log("Loading....");
    }

    await validateChef(email, password)
      .then((res) => {
        const data = res;
        if (data) {
          setLoading(false);
          localStorage.setItem("token", data.token);
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
                    signedin: false,
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
                      {errors.email && touched.email ? (
                        <div className={classes.errorMessage}>
                          {errors.email}
                        </div>
                      ) : null}
                      <label className={classes.Label}>Password</label>
                      <Field
                        className={classes.Password}
                        name="password"
                        placeholder="password"
                        type="password"
                      />
                      {errors.password && touched.password ? (
                        <span className={classes.errorMessage}>
                          {errors.password}
                        </span>
                      ) : null}
                      <br />
                      <div className={classes.checkout}>
                        <span className={classes.radioBox}>
                          {/* <input type="checkbox" className={classes.Checkbox} />
                          Stay Signed In */}
                          <Field
                            type="checkbox"
                            className={classes.Checkbox}
                            name="signedin"
                          />
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
