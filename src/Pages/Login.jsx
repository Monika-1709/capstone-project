import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  Box,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import FormControlLabel from "@mui/material/FormControlLabel";
import "../Style/Login.css";

import Checkbox from "@mui/material/Checkbox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import shop from "../Image/shop.jpg";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Please enter a valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
      navigate("/dashboard");
    }, 200);
  };

  return (
    <Box
      style={{
        width: "100%",

        display: "flex",

        height: "100vh",
      }}
    >
      <Box sx={{ width: "50%", backgroundColor: "#30D5C8" }}>
        <img
          src={shop}
          alt="error 404"
          style={{ width: "100%", height: "100vh" }}
        />
      </Box>
      <Box>
        <Paper
          sx={{
            width: "32vw",
            height: "55vh",
            marginLeft: "8.5rem",
            marginTop: "10rem",
          }}
          elevation={5}
        >
          <Box align="center" sx={{ paddingTop: "2rem" }}>
            <Avatar sx={{ backgroundColor: "#30D5C8", width: 56, height: 56 }}>
              <PersonIcon style={{ fontSize: "40px" }} />
            </Avatar>
          </Box>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnChange={false}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Username"
                  name="username"
                  placeholder="Enter username"
                  sx={{
                    width: "23vw",
                    marginLeft: "4.5rem",
                    marginTop: "1.5rem",
                  }}
                  fullWidth
                  required
                  helperText={<ErrorMessage name="username" />}
                  // onChange={(e) => setUsername(e.target.value)}
                />
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  sx={{ m: 1, width: "23vw", marginLeft: "4.5rem" }}
                  fullWidth
                  required
                  helperText={<ErrorMessage name="password" />}
                  // onChange={(e) => setPassword(e.target.value)}
                />
                <Grid
                  container
                  spacing={2}
                  sx={{ paddingLeft: "5.5rem", paddingTop: "1rem" }}
                >
                  <Field
                    as={FormControlLabel}
                    name="remember"
                    control={<Checkbox color="primary" />}
                    label="Remember me"
                  />
                  <Typography
                    sx={{ paddingLeft: "4rem", paddingTop: "0.5rem" }}
                  >
                    <Link href="#">Forgot password ?</Link>
                  </Typography>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    m: 1,
                    width: "23vw",
                    marginLeft: "4.5rem",
                    backgroundColor: "#30D5C8",
                    marginTop: "1rem",
                  }}
                  disabled={props.isSubmitting}
                  fullWidth
                >
                  {props.isSubmitting ? "Loading" : "Sign in"}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
