import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Autocomplete,
  Box,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";

import { regions } from "../../constants/regions";

import { stylesMui } from "./styles";
interface AddressDetailsFormProps {
  onSubmit: (values: AddressDetailsValues) => void;
}

interface AddressDetailsValues {
  line1: string;
  line2: string;
  city: string;
  region: string;
  country: string;
  zipCode: string;
}

interface Region {
  label: string;
}

const AddressDetailsForm: React.FC<AddressDetailsFormProps> = ({
  onSubmit,
}) => {
  const initialValues: AddressDetailsValues = {
    line1: "",
    line2: "",
    city: "",
    region: "",
    country: "",
    zipCode: "",
  };

  const validationSchema = Yup.object({
    line1: Yup.string().required("Address is required"),
    line2: Yup.string().required("Address details are required"),
    city: Yup.string().required("City is required"),
    region: Yup.string().required("Region is required"),
    country: Yup.string().required("Country is required"),
    zipCode: Yup.string().required("ZIP Code is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <div className="w-full md:w-4/6 md:ml-[3.75rem] flex flex-col justify-center">
        <Typography sx={stylesMui.formTitleText}>Address details</Typography>
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            fullWidth
            error={Boolean(formik.touched.line1 && formik.errors.line1)}
          >
            <Typography sx={stylesMui.inputLabel}>Line 1</Typography>
            <TextField
              id="outlined-adornment-line1"
              value={formik.values.line1}
              name="line1"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Flat no / House no"
              inputProps={{
                style: {
                  height: "1.5rem",
                },
              }}
              sx={{ ...stylesMui.inputField, mb: "1.19rem" }}
            />
            {formik.touched.line1 && formik.errors.line1 && (
              <FormHelperText error id="standard-weight-helper-text-line1">
                {formik.errors.line1}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl
            fullWidth
            error={Boolean(formik.touched.line2 && formik.errors.line2)}
          >
            <Typography sx={stylesMui.inputLabel}>Line 2</Typography>
            <TextField
              id="outlined-adornment-line2"
              value={formik.values.line2}
              name="line2"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Street name / Building no / Plot no"
              inputProps={{
                style: {
                  height: "1.5rem",
                },
              }}
              sx={{ ...stylesMui.inputField, mb: "1.19rem" }}
            />
            {formik.touched.line2 && formik.errors.line2 && (
              <FormHelperText error id="standard-weight-helper-text-line2">
                {formik.errors.line2}
              </FormHelperText>
            )}
          </FormControl>

          <div className="flex flex-col md:flex-row gap-7">
            <FormControl
              fullWidth
              error={Boolean(formik.touched.city && formik.errors.city)}
            >
              <Typography sx={stylesMui.inputLabel}>City</Typography>
              <TextField
                id="outlined-adornment-city"
                value={formik.values.city}
                name="city"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Enter city name"
                inputProps={{
                  style: {
                    height: "1.5rem",
                  },
                }}
                sx={{ ...stylesMui.inputField, mb: "1.19rem" }}
              />
              {formik.touched.city && formik.errors.city && (
                <FormHelperText error id="standard-weight-helper-text-city">
                  {formik.errors.city}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(formik.touched.region && formik.errors.region)}
            >
              <Typography sx={stylesMui.inputLabel}>Region</Typography>
              <Autocomplete
                id="region-select"
                fullWidth
                options={regions as Region[]}
                autoHighlight
                //@ts-ignore
                getOptionLabel={(option: Region) => option.label}
                renderOption={(props, option: Region) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    {option.label}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select region"
                    error={Boolean(
                      formik.touched.region && formik.errors.region
                    )}
                    helperText={formik.touched.region && formik.errors.region}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                    value={formik.values.region}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    sx={{ ...stylesMui.inputField, mb: "1.19rem" }}
                  />
                )}
              />
              {formik.touched.region && formik.errors.region && (
                <FormHelperText error id="standard-weight-helper-text-region">
                  {formik.errors.region}
                </FormHelperText>
              )}
            </FormControl>
          </div>
          <div className="flex flex-col md:flex-row gap-7">
            <FormControl
              fullWidth
              error={Boolean(formik.touched.country && formik.errors.country)}
            >
              <Typography sx={stylesMui.inputLabel}>Country</Typography>
              <TextField
                id="outlined-adornment-country"
                value={formik.values.country}
                name="country"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Enter country name"
                inputProps={{
                  style: {
                    height: "1.5rem",
                  },
                }}
                sx={{ ...stylesMui.inputField, mb: "1.19rem" }}
              />
              {formik.touched.country && formik.errors.country && (
                <FormHelperText error id="standard-weight-helper-text-country">
                  {formik.errors.country}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(formik.touched.zipCode && formik.errors.zipCode)}
            >
              <Typography sx={stylesMui.inputLabel}>
                Postal / ZipCode
              </Typography>
              <TextField
                id="outlined-adornment-zipCode"
                value={formik.values.zipCode}
                name="zipCode"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Enter potal / zipcode"
                inputProps={{
                  style: {
                    height: "1.5rem",
                  },
                }}
                sx={{ ...stylesMui.inputField, mb: "1.19rem" }}
              />
              {formik.touched.zipCode && formik.errors.zipCode && (
                <FormHelperText error id="standard-weight-helper-text-zipCode">
                  {formik.errors.zipCode}
                </FormHelperText>
              )}
            </FormControl>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddressDetailsForm;
