import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { toastGreenNotify } from "../helpers/toastNotify";

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must have min 3 chars")
    .required("Please enter a username "),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please  enter an email"),
  password: yup
    .string()
    .required("Please enter a password ")
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});

const FormComponent = ({ submitHandle, data, deleteHandle, setOpen }) => {
  return (
    <Container component="main" maxWidth="xs" sx={{ textAlign: "start" }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            submitHandle(values);
            actions.resetForm();
            actions.setSubmitting(false);
            toastGreenNotify("Registered successfully!");
          }}
        >
          {({ values, handleChange, handleBlur, touched, errors }) => (
            <Form>
              {data?.length === 0 && (
                <Box sx={{ mt: 1 }}>
                  <TextField
                    fullWidth
                    color="secondary"
                    label="User Name"
                    name="username"
                    id="username"
                    type="text"
                    variant="outlined"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                  />
                  <TextField
                    sx={{ my: 2 }}
                    fullWidth
                    color="secondary"
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    fullWidth
                    color="secondary"
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <Button
                    type="submit"
                    color="secondary"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Register
                  </Button>
                </Box>
              )}
            </Form>
          )}
        </Formik>
        {data?.length > 0 && (
          <>
            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              sx={{ mb: 2 }}
              onClick={deleteHandle}
            >
              Delete User
            </Button>
            <Button
              type="submit"
              color="secondary"
              fullWidth
              variant="contained"
              sx={{ mb: 2 }}
              onClick={() => setOpen(true)}
            >
              Update User
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default FormComponent;
