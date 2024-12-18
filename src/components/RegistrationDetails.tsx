import { useState } from "react";
import { Button } from "@mui/material";

import {
  PersonalDetailsForm,
  AddressDetailsForm,
  IdentityDetailsForm,
  DocumentsUploadForm,
} from "./RegistrationDetailForms";
import DetailsSidebar from "./DetailsSidebar/DetailsSidebar";

const RegistrationDetails = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  //@ts-ignore
  const handleStep = (step) => {
    // Handle step click logic
    setActiveStep(step);
  };

  const handleSaveAndContinue = () => {
    // Handle save and continue logic
    //@ts-ignore
    setCompletedSteps([...completedSteps, activeStep]);
    setActiveStep((prevStep) => prevStep + 1);
  };

  //@ts-ignore
  const handlePersonalDetailsSubmit = (values: any) => {
    console.log("Personal Details Form Values:", values);
    handleSaveAndContinue();
  };

  //@ts-ignore
  const handleAddressDetailsSubmit = (values: any) => {
    console.log("Address Details Form Values:", values);
    handleSaveAndContinue();
  };

  //@ts-ignore
  const handleIdentityDetailsSubmit = (values: any) => {
    console.log("Identity Details Form Values:", values);
    handleSaveAndContinue();
  };

  //@ts-ignore
  const handleDocumentsUploadSubmit = (values: any) => {
    console.log("Documents Upload Form Values:", values);
    handleSaveAndContinue();
  };

  //@ts-ignore
  const handleFinish = (values: any) => {
    console.log("All data values:", values);
  };

  return (
    <DetailsSidebar
      activeStep={activeStep}
      completedSteps={completedSteps}
      handleStep={handleStep}
    >
      <div className="h-screen flex flex-col justify-center bg-[#F5F5F5]">
        {/* Render PersonalDetailsForm */}
        {activeStep === 0 && (
          <PersonalDetailsForm onSubmit={handlePersonalDetailsSubmit} />
        )}

        {/* Render AddressDetailsForm */}
        {activeStep === 1 && (
          <AddressDetailsForm onSubmit={handleAddressDetailsSubmit} />
        )}

        {/* Render IdentityDetailsForm */}
        {activeStep === 2 && (
          <IdentityDetailsForm onSubmit={handleIdentityDetailsSubmit} />
        )}

        {/* Render DocumentsUploadForm */}
        {activeStep === 3 && (
          <DocumentsUploadForm onSubmit={handleIdentityDetailsSubmit} />
        )}

        <div className="md:ml-[3.75rem] mt-4 flex justify-start">
          {activeStep < 3 ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveAndContinue}
              sx={{
                borderRadius: "0.25rem",
                boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.08)",
                width: "15.8125rem",
                height: "3.75rem",
              }}
            >
              Save & Continue
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleFinish}
              sx={{
                borderRadius: "0.25rem",
                boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.08)",
                width: "15.8125rem",
                height: "3.75rem",
              }}
            >
              Finish
            </Button>
          )}
        </div>
      </div>
    </DetailsSidebar>
  );
};

export default RegistrationDetails;
