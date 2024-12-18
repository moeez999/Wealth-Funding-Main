import React from "react";
import { useFormik } from "formik";

import * as Yup from "yup";

import {
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";

import { stylesMui } from "./styles";

interface PersonalDetailsFormProps {
  onSubmit: (values: PersonalDetailsValues) => void;
}

interface PersonalDetailsValues {
  firstName: string;
  lastName: string;
  email: string;
}

const PersonalDetailsSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  onSubmit,
}) => {
  const formik = useFormik<PersonalDetailsValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: PersonalDetailsSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <>
      <div className="w-full md:w-4/6 md:ml-[3.75rem] flex flex-col justify-center">
        <Typography sx={stylesMui.formTitleText}>Personal details</Typography>
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            fullWidth
            error={Boolean(formik.touched.firstName && formik.errors.firstName)}
          >
            <Typography sx={stylesMui.inputLabel}>First name</Typography>
            <TextField
              id="outlined-adornment-firstName"
              value={formik.values.firstName}
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Enter first name"
              inputProps={{
                style: {
                  height: "1.5rem",
                },
              }}
              sx={{ ...stylesMui.inputField, mb: "1.19rem" }}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <FormHelperText error id="standard-weight-helper-text-firstName">
                {formik.errors.firstName}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl
            fullWidth
            error={Boolean(formik.touched.lastName && formik.errors.lastName)}
          >
            <Typography sx={stylesMui.inputLabel}>Last name</Typography>
            <TextField
              id="outlined-adornment-lastName"
              value={formik.values.lastName}
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Enter last name"
              inputProps={{
                style: {
                  height: "1.5rem",
                },
              }}
              sx={{ ...stylesMui.inputField, mb: "1.19rem" }}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <FormHelperText error id="standard-weight-helper-text-lastName">
                {formik.errors.lastName}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl
            fullWidth
            error={Boolean(formik.touched.email && formik.errors.email)}
          >
            <Typography sx={stylesMui.inputLabel}>Email</Typography>
            <TextField
              id="outlined-adornment-email"
              value={formik.values.email}
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Enter email"
              inputProps={{
                style: {
                  height: "1.5rem",
                },
              }}
              sx={{ ...stylesMui.inputField, mb: "1.19rem" }}
            />
            {formik.touched.email && formik.errors.email && (
              <FormHelperText error id="standard-weight-helper-text-email">
                {formik.errors.email}
              </FormHelperText>
            )}
          </FormControl>
        </form>
      </div>
    </>
  );
};

export default PersonalDetailsForm;
