import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
import useSendEmailVerification from '../../hooks/useSendEmailVerification'

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
import useRegister from "../../hooks/useRegister";

// ===========================|| Auth REGISTER ||=========================== //

const AuthRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checkedPrivacy, setCheckedPrivacy] = useState();
  // const [checkedNewsletter, setCheckedNewsletter] = useState();
  const [checkedCorrect, setCheckedCorrect] = useState();
  const { mutate: createUser, isLoading } = useRegister()

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate =useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          password: "",
          country: null,
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().required("First Name is required"),
          lastname: Yup.string().required("Last Name is required"),
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
          phone: Yup.string().required("Phone is required"),
          country: Yup.string().nullable(),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
              // Appel à la fonction `createUser`
              createUser(values, {
                  onSuccess: async (res) => {
                      setStatus({ success: true });
      
                      // Enregistre l'e-mail dans localStorage
                      localStorage.setItem("email_verification", values.email);
      
                      // Navigue vers la page de vérification de l'e-mail
                      navigate("/email-verification");
      
                      // Envoie l'e-mail de vérification
                      try {
                          await useSendEmailVerification(res.data.user.id, values.firstname, values.lastname);
                          localStorage.setItem("resend_verification", [res.data.user.id, values.firstname, values.lastname]);
                      } catch (emailError) {
                          console.error("Erreur lors de l'envoi de l'e-mail :", emailError.message);
                      }
                  },
                  onError: (error) => {
                      setStatus({ success: false });
                      setErrors({ submit: error.message });
                  },
                  onSettled: () => {
                      setSubmitting(false);
                  },
              });
          } catch (err) {
              console.error("Erreur lors de la création de l'utilisateur :", err);
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
                  error={Boolean(touched.firstname && errors.firstname)}
                  sx={stylesMui.formController}
                >
                  <Typography sx={stylesMui.inputLabel}>First Name</Typography>
                  <OutlinedInput
                    id="outlined-adornment-firstname-register"
                    value={values.firstname}
                    name="firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Your First Name"
                    inputProps={{
                      style: {
                        height: "1rem",
                      },
                    }}
                  />
                  {touched.firstname && errors.firstname && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text--register"
                    >
                      {errors.firstname}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  fullWidth
                  error={Boolean(touched.lastname && errors.lastname)}
                  sx={stylesMui.formController}
                >
                  <Typography sx={stylesMui.inputLabel}>Last Name</Typography>
                  <OutlinedInput
                    id="outlined-adornment-lastname-register"
                    value={values.lastname}
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Your Last Name"
                    inputProps={{
                      style: {
                        height: "1rem",
                      },
                    }}
                  />
                  {touched.lastname && errors.lastname && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text--register"
                    >
                      {errors.lastname}
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
              {/* <GoogleRecaptcha /> */}
            </div>

            {/* Add link to t and c here  */}
            <Typography sx={stylesMui.generalText}>
              By creating an account, you confirm to our General Terms &
              Conditions.
            </Typography>

            <div className="mt-1">
              {/* <Link to="/registration-details"> */}
                <ButtonAuth labelText="Sign Up" />
              {/* </Link> */}
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
