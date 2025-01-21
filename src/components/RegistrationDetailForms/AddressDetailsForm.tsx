import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";

import { regions } from "../../constants/regions";

import { stylesMui } from "./styles";
import { useParams } from "react-router-dom";
import useUpdateAddress from "../../hooks/useUpdateAddress";
interface AddressDetailsFormProps {
  onSubmit: (values: AddressDetailsValues) => void;
}

interface AddressDetailsValues {
  id : string,
  line_1: string;
  line_2: string;
  city: string;
  region: string;
  country: string;
  postal_code: string;
}

interface Region {
  label: string;
}

const AddressDetailsForm: React.FC<AddressDetailsFormProps> = ({
  onSubmit,
}) => {
  let { id } = useParams();
  const { mutate: updateUser} = useUpdateAddress()
  const initialValues: AddressDetailsValues = {
    id: id,
    line_1: "",
    line_2: "",
    city: "",
    region: "",
    country: "",
    postal_code: "",
  };

  const validationSchema = Yup.object({
    line_1: Yup.string().required("Address is required"),
    line_2: Yup.string().required("Address details are required"),
    city: Yup.string().required("City is required"),
    region: Yup.string().nullable(),//required("Region is required"),
    country: Yup.string().required("Country is required"),
    postal_code: Yup.string().required("ZIP Code is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    updateUser(values, {
      onSuccess: async (res) => {
          setStatus({ success: true });
      },
      onError: (error) => {
          setStatus({ success: false });
          setErrors({ submit: error.message });
      },
      onSettled: () => {
          setSubmitting(false);
      },
  })
}
  });

  return (
    <>
      <div className="w-full md:w-4/6 md:ml-[3.75rem] flex flex-col justify-center">
        <Typography sx={stylesMui.formTitleText}>Address details</Typography>
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            fullWidth
            error={Boolean(formik.touched.line_1 && formik.errors.line_1)}
          >
            <Typography sx={stylesMui.inputLabel}>Line 1</Typography>
            <TextField
              id="outlined-adornment-line_1"
              value={formik.values.line_1}
              name="line_1"
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
            {formik.touched.line_1 && formik.errors.line_1 && (
              <FormHelperText error id="standard-weight-helper-text-line_1">
                {formik.errors.line_1}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl
            fullWidth
            error={Boolean(formik.touched.line_2 && formik.errors.line_2)}
          >
            <Typography sx={stylesMui.inputLabel}>Line 2</Typography>
            <TextField
              id="outlined-adornment-line_2"
              value={formik.values.line_2}
              name="line_2"
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
            {formik.touched.line_2 && formik.errors.line_2 && (
              <FormHelperText error id="standard-weight-helper-text-line_2">
                {formik.errors.line_2}
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
              error={Boolean(formik.touched.postal_code && formik.errors.postal_code)}
            >
              <Typography sx={stylesMui.inputLabel}>
                Postal / ZIpCode
              </Typography>
              <TextField
                id="outlined-adornment-postal_code"
                value={formik.values.postal_code}
                name="postal_code"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Enter potal / postal_code"
                inputProps={{
                  style: {
                    height: "1.5rem",
                  },
                }}
                sx={{ ...stylesMui.inputField, mb: "1.19rem" }}
              />
              {formik.touched.postal_code && formik.errors.postal_code && (
                <FormHelperText error id="standard-weight-helper-text-postal_code">
                  {formik.errors.postal_code}
                </FormHelperText>
              )}
            </FormControl>
          </div>
          <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                borderRadius: "0.25rem",
                boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.08)",
                width: "15.8125rem",
                height: "3.75rem",
              }}
            >
              Save & Continue
            </Button>
        </form>
      </div>
    </>
  );
};

export default AddressDetailsForm;
