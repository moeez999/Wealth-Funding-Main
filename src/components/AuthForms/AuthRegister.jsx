import { useState } from "react";
import { Link } from "react-router-dom";

// material-ui
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
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
import GoogleRecaptcha from "../GoogleRecaptcha";
import { countries } from "../../constants/countries";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ButtonAuth from "../ButtonAuth";

import { stylesMui } from "./styles";

// ===========================|| Auth REGISTER ||=========================== //

const AuthRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checkedPrivacy, setCheckedPrivacy] = useState();
  // const [checkedNewsletter, setCheckedNewsletter] = useState();
  const [checkedCorrect, setCheckedCorrect] = useState();

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
          username: "",
          fname: "",
          lname: "",
          email: "",
          phone: "",
          password: "",
          country: null,
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required("Username is required"),
          fname: Yup.string().required("First Name is required"),
          lname: Yup.string().required("Last Name is required"),
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
          phone: Yup.string().required("Phone is required"),
          country: Yup.string().required("Country is required"),
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
            <div className="gap-4 flex flex-col" id="input-fields">
              {/* <FormControl
                fullWidth
                error={Boolean(touched.username && errors.username)}
                sx={stylesMui.formController}
              >
                <Typography sx={stylesMui.inputLabel}>User name</Typography>
                <OutlinedInput
                  id="outlined-adornment-username-register"
                  value={values.username}
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Your Username"
                  inputProps={{
                    style: {
                      height: "1rem",
                    },
                  }}
                />
                {touched.username && errors.username && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text--register"
                  >
                    {errors.username}
                  </FormHelperText>
                )}
              </FormControl> */}

              <div className="flex flex-col md:flex-row gap-4 items-end">
                <FormControl
                  fullWidth
                  error={Boolean(touched.fname && errors.fname)}
                  sx={stylesMui.formController}
                >
                  <Typography sx={stylesMui.inputLabel}>First Name</Typography>
                  <OutlinedInput
                    id="outlined-adornment-fname-register"
                    value={values.fname}
                    name="fname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Your First Name"
                    inputProps={{
                      style: {
                        height: "1rem",
                      },
                    }}
                  />
                  {touched.fname && errors.fname && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text--register"
                    >
                      {errors.fname}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  fullWidth
                  error={Boolean(touched.lname && errors.lname)}
                  sx={stylesMui.formController}
                >
                  <Typography sx={stylesMui.inputLabel}>Last Name</Typography>
                  <OutlinedInput
                    id="outlined-adornment-lname-register"
                    value={values.lname}
                    name="lname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Your Last Name"
                    inputProps={{
                      style: {
                        height: "1rem",
                      },
                    }}
                  />
                  {touched.lname && errors.lname && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text--register"
                    >
                      {errors.lname}
                    </FormHelperText>
                  )}
                </FormControl>
              </div>

              <FormControl
                fullWidth
                error={Boolean(touched.email && errors.email)}
                sx={stylesMui.formController}
              >
                <Typography sx={stylesMui.inputLabel}>Email</Typography>
                <OutlinedInput
                  id="outlined-adornment-email-register"
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
                />
                {touched.email && errors.email && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text--register"
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
                  id="outlined-adornment-password-register"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  name="password"
                  placeholder="Enter your password"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  inputProps={{
                    style: {
                      height: "1rem",
                    },
                  }}
                />
                {touched.password && errors.password && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-password-register"
                  >
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl
                fullWidth
                error={Boolean(touched.phone && errors.phone)}
                sx={stylesMui.formController}
              >
                <Typography sx={stylesMui.inputLabel}>Phone Number</Typography>
                <OutlinedInput
                  id="outlined-adornment-phone-register"
                  value={values.phone}
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Your Number with country code"
                  inputProps={{
                    style: {
                      height: "1rem",
                    },
                  }}
                />
                {touched.phone && errors.phone && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text--register"
                  >
                    {errors.phone}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl
                fullWidth
                error={Boolean(touched.country && errors.country)}
                sx={stylesMui.formController}
              >
                <Typography sx={stylesMui.inputLabel}>
                  Select Your Country
                </Typography>
                <Autocomplete
                  id="country-select"
                  fullWidth
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt=""
                      />
                      {option.label} ({option.code})
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Choose a country"
                      error={Boolean(touched.country && errors.country)}
                      helperText={touched.country && errors.country}
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  )}
                />
              </FormControl>
            </div>
            <div className="my-1 gap-4" id="checkboxes">
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedPrivacy}
                      onChange={(event) =>
                        setCheckedPrivacy(event.target.checkedPrivacy)
                      }
                      name="checkedPrivacy"
                      color="primary"
                    />
                  }
                  label={
                    <Typography sx={stylesMui.checkboxText}>
                      I agree processing of my personal data according to our
                      privacy policy
                    </Typography>
                  }
                />
              </div>
              {/* <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedNewsletter}
                      onChange={(event) =>
                        setCheckedNewsletter(event.target.checkedNewsletter)
                      }
                      name="checkedNewsletter"
                      color="primary"
                    />
                  }
                  label={
                    <Typography sx={stylesMui.checkboxText}>
                      I want to receive news letter
                    </Typography>
                  }
                />
              </div> */}
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedCorrect}
                      onChange={(event) =>
                        setCheckedCorrect(event.target.checkedCorrect)
                      }
                      name="checkedCorrect"
                      color="primary"
                    />
                  }
                  label={
                    <Typography sx={stylesMui.checkboxText}>
                      I confirm that my name is correct & matches my government
                      ID
                    </Typography>
                  }
                />
              </div>
            </div>
            <div className="mb-[0.62rem]">
              <GoogleRecaptcha />
            </div>

            {/* Add link to t and c here  */}
            <Typography sx={stylesMui.generalText}>
              By creating an account, you confirm to our General Terms &
              Conditions.
            </Typography>

            <div className="mt-1">
              <Link to="/registration-details">
                <ButtonAuth labelText="Sign Up" />
              </Link>
            </div>
            {/* {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )} */}

            <Typography sx={stylesMui.redirectText}>
              Have an account? <Link to="/login">Log In</Link>
            </Typography>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthRegister;
