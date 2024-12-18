import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Typography } from "@mui/material";

import IdCardField from "./IdCardField";

import { stylesMui } from "./styles";

interface DocumentsUploadFormProps {
  onSubmit: (values: IdentityDetailsValues) => void;
}

interface IdentityDetailsValues {
  countryId: string;
  idNumber: string;
  passportNumber: string;
}

const DocumentsUploadForm: React.FC<DocumentsUploadFormProps> = ({
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
        <Typography sx={stylesMui.formTitleText}>Documents upload</Typography>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col md:flex-row gap-7 items-end">
            <IdCardField label="Passport" />
            <IdCardField label="Affidavit" />
          </div>
          <div className="flex flex-col mt-4 gap-4">
            <IdCardField label="Agreement" />
            <IdCardField label="Proof of residence" />
          </div>
        </form>
      </div>
    </>
  );
};

export default DocumentsUploadForm;
