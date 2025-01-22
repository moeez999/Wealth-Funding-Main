import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// material-ui
import {
  Alert,
  Box,
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
import RefreshIcon from '@mui/icons-material/Refresh';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
  LoadCanvasTemplateNoReload,
} from 'react-simple-captcha';
import useLogin from "../../hooks/useLogin";

// ============================||  Auth Login ||============================ //
const AuthLogin = () => {
  const [is_valid, setIs_valid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [success, setSuccess] = useState('');
  const { mutate: login, isLoading } = useLogin();
  const navigate = useNavigate();

  // Charger le captcha au montage
  useEffect(() => {
    loadCaptchaEnginge(6); // Longueur du captcha : 6 caractères
  }, []);

  // Fonction pour vérifier le captcha
  const validateCaptchaInput = () => {
    if (validateCaptcha(input)) {
      setIs_valid(true);
      setSuccess('Captcha vérifié avec succès!');
      setError('');
      return true; // Captcha valide
    } else {
      setIs_valid(false);
      setError('Incorrect captcha. Please try again.');
      setSuccess('');
      setInput('');
      loadCaptchaEnginge(6); // Recharge un nouveau captcha
      return false; // Captcha invalide
    }
    return false;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };



  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          password: Yup.string().max(255).required('Password is required'),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          // Valider le captcha avant de continuer
          if (validateCaptchaInput()) {
          try {
            // Appel API pour la connexion
            login(values, {
              onSuccess: (res) => {
                setStatus({ success: true });

                // Stocker les informations utilisateur
                localStorage.setItem('token', res.token);
                localStorage.setItem('user', JSON.stringify(res.user));

                // Rediriger l'utilisateur
                navigate('/');
              },
              onError: (error) => {
                console.log(error.response);
                setMessageError(error.response.data.data);
                setStatus({ success: false });
                setErrors({ submit: error.message });
              },
              onSettled: () => {
                setSubmitting(false);
              },
            });
          } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
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
              {messageError && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {messageError}
                </Alert>
              )}
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
                sx={{ ...stylesMui.inputField, mb: '1rem' }}
              />
              {touched.email && errors.email && (
                <FormHelperText error>{errors.email}</FormHelperText>
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
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{ ...stylesMui.inputField, mb: '1.5rem' }}
              />
              {touched.password && errors.password && (
                <FormHelperText error>{errors.password}</FormHelperText>
              )}
            </FormControl>

            <div className="my-[0.62rem]">
              <Typography sx={stylesMui.inputLabel}>Enter Captcha</Typography>
              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    border: '2px solid #ddd',
                    borderRadius: 3,
                    padding: 2,
                  }}
                >
                  <LoadCanvasTemplateNoReload />
                </Box>
                <IconButton onClick={() => loadCaptchaEnginge(6)} sx={{ ml: 1 }}>
                  <RefreshIcon />
                </IconButton>
              </Box>
              <OutlinedInput
                value={input}
                fullWidth
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Captcha"
                sx={{ mb: 2 }}
              />
              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}
            </div>

            <div className="mt-4">
              <ButtonAuth labelText={isLoading ? 'Loading...' : 'Login'} />
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
