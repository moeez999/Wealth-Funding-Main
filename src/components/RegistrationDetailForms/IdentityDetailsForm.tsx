import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";

import IdCardField from "./IdCardField";
import PhotoUpload from "./PhotoUpload";

import { stylesMui } from "./styles";

interface IdentityDetailsFormProps {
  onSubmit: (values: IdentityDetailsValues) => void;
}

interface IdentityDetailsValues {
  countryId: string;
  idNumber: string;
  passportNumber: string;
}

const IdentityDetailsForm: React.FC<IdentityDetailsFormProps> = ({
  onSubmit,
}) => {
  const initialValues: IdentityDetailsValues = {
    countryId: "",
    idNumber: "",
    passportNumber: "",
  };

  const validationSchema = Yup.object({
    countryId: Yup.string().required("Country ID is required"),
    idNumber: Yup.string().required("ID number is required"),
    passportNumber: Yup.string().required("Passport number is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <div className="w-full md:w-4/6 md:ml-[3.75rem] flex flex-col justify-center">
        <Typography sx={stylesMui.formTitleText}>Identity details</Typography>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col md:flex-row gap-7 items-end">
            <FormControl
              fullWidth
              error={Boolean(
                formik.touched.countryId && formik.errors.countryId
              )}
            >
              <Typography sx={stylesMui.inputLabel}>
                Country identity name
              </Typography>
              <TextField
                id="outlined-adornment-countryId"
                value={formik.values.countryId}
                name="countryId"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Enter identity name"
                inputProps={{
                  style: {
                    height: "1.5rem",
                  },
                }}
                sx={{ ...stylesMui.inputField, mb: "1.19rem" }}
              />
              {formik.touched.countryId && formik.errors.countryId && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-countryId"
                >
                  {formik.errors.countryId}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(formik.touched.idNumber && formik.errors.idNumber)}
            >
              <Typography sx={stylesMui.inputLabel}>Identity number</Typography>
              <TextField
                id="outlined-adornment-idNumber"
                value={formik.values.idNumber}
                name="idNumber"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Enter identity number"
                inputProps={{
                  style: {
                    height: "1.5rem",
                  },
                }}
                sx={{ ...stylesMui.inputField, mb: "1.19rem" }}
              />
              {formik.touched.idNumber && formik.errors.idNumber && (
                <FormHelperText error id="standard-weight-helper-text-idNumber">
                  {formik.errors.idNumber}
                </FormHelperText>
              )}
            </FormControl>
          </div>
          <IdCardField />
          <Typography sx={{ ...stylesMui.inputLabel, mt: "1rem" }}>
            Upload passport size photo
          </Typography>
          <PhotoUpload />
          <div className="mt-4 w-full md:w-4/6">
            <FormControl
              fullWidth
              error={Boolean(
                formik.touched.passportNumber && formik.errors.passportNumber
              )}
            >
              <Typography sx={stylesMui.inputLabel}>Passport</Typography>
              <TextField
                id="outlined-adornment-passportNumber"
                value={formik.values.passportNumber}
                name="passportNumber"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Enter passport"
                inputProps={{
                  style: {
                    height: "1.5rem",
                  },
                }}
                sx={{ ...stylesMui.inputField, mb: "1.19rem" }}
              />
              {formik.touched.passportNumber &&
                formik.errors.passportNumber && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-passportNumber"
                  >
                    {formik.errors.passportNumber}
                  </FormHelperText>
                )}
            </FormControl>
          </div>
        </form>
      </div>
    </>
  );
};

export default IdentityDetailsForm;
