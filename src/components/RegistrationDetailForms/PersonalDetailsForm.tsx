import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {useParams} from "react-router-dom";

import * as Yup from "yup";

import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";

import { stylesMui } from "./styles";
import useFetchUser from "../../hooks/useFetchUser";
import useUpdateName from "../../hooks/useUpdateName";

interface PersonalDetailsFormProps {
  onSubmit: (values: PersonalDetailsValues) => void;
}

interface PersonalDetailsValues {
  id: string,
  firstname: string;
  lastname: string;
  //email: string;
}

const PersonalDetailsSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  //email: Yup.string().email("Invalid email").required("Email is required"),
});

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  onSubmit
}) => {

  let { id } = useParams();
  const [userData, setUserData]=useState();
  const {data}=useFetchUser(id);
  const { mutate: updateUser} = useUpdateName()

  
  useEffect(()=>{
    if(data){
      setUserData(data);
    }
  },[data])

  const formik = useFormik<PersonalDetailsValues>({
    initialValues: {
      id: id,
      firstname: userData?.firstname,
      lastname: userData?.lastname,
      //email: "",
    },
    validationSchema: PersonalDetailsSchema,
    enableReinitialize: true, // Permet de réinitialiser les valeurs initiales après le chargement,
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

    },
  });

  return (
    <>
      <div className="w-full md:w-4/6 md:ml-[3.75rem] flex flex-col justify-center">
        <Typography sx={stylesMui.formTitleText}>Personal details</Typography>
        <form onSubmit={formik.handleSubmit}>
         <FormControl
            fullWidth
            error={Boolean(formik.touched.firstname && formik.errors.firstname)}
          >
            <Typography sx={stylesMui.inputLabel}>First name</Typography>
            <TextField
              id="outlined-adornment-firstname"
              value={formik.values.firstname}
              name="firstname"
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
            {formik.touched.firstname && formik.errors.firstname && (
              <FormHelperText error id="standard-weight-helper-text-firstname">
                {formik.errors.firstname}
              </FormHelperText>
            )}
            </FormControl>

          <FormControl
            fullWidth
            error={Boolean(formik.touched.lastname && formik.errors.lastname)}
          >
            <Typography sx={stylesMui.inputLabel}>Last name</Typography>
            <TextField
              id="outlined-adornment-lastname"
              value={formik.values.lastname}
              name="lastname"
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
            {formik.touched.lastname && formik.errors.lastname && (
              <FormHelperText error id="standard-weight-helper-text-lastname">
                {formik.errors.lastname}
              </FormHelperText>
            )}
          </FormControl>

          {/*<FormControl
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
            
          </FormControl>*/} 
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

export default PersonalDetailsForm;
