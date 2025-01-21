import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";

import IdCardField from "./IdCardField";
import PhotoUpload from "./PhotoUpload";

import { stylesMui } from "./styles";
import useAddIdentity from "../../hooks/useAddIdentity";
import { useParams } from "react-router-dom";
import useUploadFile from "../../hooks/useUploadFile";

interface IdentityDetailsFormProps {
  onSubmit: (values: IdentityDetailsValues) => void;
}

interface IdentityDetailsValues {
  user_id: string;
  country_id: string;
  number_id: string;
  passport_id: string;
}

const IdentityDetailsForm: React.FC<IdentityDetailsFormProps> = ({
  onSubmit
}) => {
  let { id } = useParams();
  const initialValues: IdentityDetailsValues = {
    user_id: id,
    country_id: "",
    number_id: "",
    passport_id: "",
  };
  const { mutate: addIdentity} = useAddIdentity();
  const { mutate: addFiles} = useUploadFile();

  const [national_id, setNationalId] = React.useState<File | null>(null);
  const [passport, setPassport] = React.useState<File | null>(null);

  const validationSchema = Yup.object({
    country_id: Yup.string().required("Country ID is required"),
    number_id: Yup.string().required("ID number is required"),
    passport_id: Yup.string().required("Passport number is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit:(values) => {
      if(national_id && passport){
        const formData = new FormData();
        formData.append("userId", id);
        formData.append("national_id", national_id);
        formData.append("passport", passport);
        onSubmit(values);
          addIdentity(values, {
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
        });
        addFiles(formData, {
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
      });
    }
  },
  });

  return (
    <>
      <div className="w-full md:w-4/6 md:ml-[3.75rem] flex flex-col justify-center">
        <Typography sx={stylesMui.formTitleText}>Identity details</Typography>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className="flex flex-col md:flex-row gap-7 items-end">
            <FormControl
              fullWidth
              error={Boolean(
                formik.touched.country_id && formik.errors.country_id
              )}
            >
              <Typography sx={stylesMui.inputLabel}>
                Country identity name
              </Typography>
              <TextField
                id="outlined-adornment-country_id"
                value={formik.values.country_id}
                name="country_id"
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
              {formik.touched.country_id && formik.errors.country_id && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-country_id"
                >
                  {formik.errors.country_id}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(formik.touched.number_id && formik.errors.number_id)}
            >
              <Typography sx={stylesMui.inputLabel}>Identity number</Typography>
              <TextField
                id="outlined-adornment-number_id"
                value={formik.values.number_id}
                name="number_id"
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
              {formik.touched.number_id && formik.errors.number_id && (
                <FormHelperText error id="standard-weight-helper-text-number_id">
                  {formik.errors.number_id}
                </FormHelperText>
              )}
            </FormControl>
          </div>
          <IdCardField setFile={setNationalId} />
          <Typography sx={{ ...stylesMui.inputLabel, mt: "1rem" }}>
            Upload passport size photo
          </Typography>
          <PhotoUpload setFile={setPassport}/>
          <div className="mt-4 w-full md:w-4/6">
            <FormControl
              fullWidth
              error={Boolean(
                formik.touched.passport_id && formik.errors.passport_id
              )}
            >
              <Typography sx={stylesMui.inputLabel}>Passport</Typography>
              <TextField
                id="outlined-adornment-passport_id"
                value={formik.values.passport_id}
                name="passport_id"
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
              {formik.touched.passport_id &&
                formik.errors.passport_id && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-passport_id"
                  >
                    {formik.errors.passport_id}
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

export default IdentityDetailsForm;
