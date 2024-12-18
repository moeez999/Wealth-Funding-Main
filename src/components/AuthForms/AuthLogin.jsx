import { useState } from "react";
import { Link } from "react-router-dom";

// material-ui
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import GoogleRecaptcha from "../GoogleRecaptcha";
import ButtonAuth from "../ButtonAuth";
import { stylesMui } from "./styles";

// ============================||  Auth Login ||============================ //

const AuthLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: true });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              sx={stylesMui.formController}
            >
              <Typography sx={stylesMui.inputLabel}>Email</Typography>
              <TextField
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter Your Email"
                inputProps={{
                  style: {
                    height: "1rem",
                  },
                }}
                sx={{ ...stylesMui.inputField, mb: "1rem" }}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-email-login"
                >
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              sx={stylesMui.formController}
            >
              <Typography sx={stylesMui.inputLabel}>Password</Typography>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                placeholder="Enter your password"
                inputProps={{
                  style: {
                    height: "1rem",
                  },
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? (
                        <Visibility
                          sx={{ color: "#00BE64", fill: "#00BE64" }}
                        />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{ ...stylesMui.inputField, mb: "1.5rem" }}
              />
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-login"
                >
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            <Typography
              sx={{
                ...stylesMui.redirectText,
                textAlign: "end",
                mt: "0rem",
              }}
            >
              Forgot Password? <Link to="/forgot-password">Reset</Link>
            </Typography>

            <div className="mb-[0.62rem]">
              <GoogleRecaptcha />
            </div>

            {/* Add link to t and c here  */}
            {/* <Typography variant="subtitle1">
              Agree with &nbsp;
              <Typography variant="subtitle1" component={Link} to="#">
                Terms & Condition.
              </Typography>
            </Typography> */}
            <Typography sx={stylesMui.generalText}>
              By logging in you confirm to our General Terms & Conditions.
            </Typography>

            <div className="mt-4">
              <ButtonAuth labelText="Login" />
            </div>

            {/* {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )} */}

            {/* Add link to register here  */}
            <Typography sx={stylesMui.redirectText}>
              Don’t Have An Account? <Link to="/sign-up">Sign Up</Link>
            </Typography>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
