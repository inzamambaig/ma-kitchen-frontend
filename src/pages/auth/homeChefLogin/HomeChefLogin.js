import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import { LoginSchema } from "./LoginSchema";
import { loginChef, reset } from "../../../features/chef/authSlice";
import logo from "../../../assest/Image/HomeChef/logo.png";
import { useStyles } from "./styles";

export default function HomeChefLogin() {
  const classes = useStyles();
  let navigate = useNavigate();
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

  const handleLogin = async (values) => {
    await dispatch(loginChef(values));
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
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
                  validationSchema={LoginSchema}
                  onSubmit={async (values) => {
                    await handleLogin(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className={classes.FormikLoginForm}>
                      <label className={classes.Label}>Email</label>
                      <Field
                        className={
                          errors.email && touched.email
                          ? classes.errorInput
                          : classes.Input}
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                      />
                      {errors.email && touched.email ? (
                          <div className={classes.errorMessage}>
                          {/* {errors.email} */}
                        </div>
                      ) : null}
                      <label className={classes.Label}>Password</label>
                      <Field
                        className={
                          errors.password && touched.password
                          ? classes.errorInput
                          : classes.Password}
                        name="password"
                        placeholder="password"
                        type="password"
                      />
                      {errors.password && touched.password ? (
                        <span className={classes.errorMessage}>
                          {/* {errors.password} */}
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
