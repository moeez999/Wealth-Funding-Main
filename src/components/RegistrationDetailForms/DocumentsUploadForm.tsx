import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button, Typography } from "@mui/material";

import IdCardField from "./IdCardField";

import { stylesMui } from "./styles";
import useUploadFile from "../../hooks/useUploadFile";
import { useNavigate, useParams } from "react-router-dom";

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

  let { id } = useParams();
  let navigate = useNavigate();
  const { mutate: addFiles} = useUploadFile();
  const [driver_license, setDriverLicense] = React.useState<File | null>(null);
  const [affidavit, setAffidavit] = React.useState<File | null>(null);
  const [agreement, setAgreement] = React.useState<File | null>(null);
  const [proof_of_residence, setProofOfResidence] = React.useState<File | null>(null);

  const initialValues: IdentityDetailsValues = {
    countryId: "",
    idNumber: "",
    passportNumber: "",
  };

  const validationSchema = Yup.object({
    countryId: Yup.string().nullable(),
    idNumber: Yup.string().nullable(),  
    passportNumber: Yup.string().nullable(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit :(values) => {
      if(driver_license && affidavit && agreement && proof_of_residence){
        const formData = new FormData();
        formData.append("userId", id);
        formData.append("driver_license", driver_license);
        formData.append("affidavit", affidavit);
        formData.append("agreement", agreement);
        formData.append("proof_of_residence", proof_of_residence);
        addFiles(formData, {
          onSuccess: async (res) => {
              setStatus({ success: true });
              navigate("/login");
          },
          onError: (error) => {
              setStatus({ success: false });
              setErrors({ submit: error.message });
          },
          onSettled: () => {
              setSubmitting(false);
          },
      });
        onSubmit(values)
      }
    }
  });

  return (
    <>
      <div className="w-full md:w-4/6 md:ml-[3.75rem] flex flex-col justify-center">
        <Typography sx={stylesMui.formTitleText}>Documents upload</Typography>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className="flex flex-col md:flex-row gap-7 items-end">
            <IdCardField label="Driver's license" setFile={setDriverLicense} />
            <IdCardField label="Affidavit" setFile={setAffidavit} />
          </div>
          <div className="flex flex-col mt-4 gap-4">
            <IdCardField label="Agreement" setFile={setAgreement} />
            <IdCardField label="Proof of residence" setFile={setProofOfResidence} />
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
              Finish
            </Button>
        </form>
      </div>
    </>
  );
};

export default DocumentsUploadForm;
