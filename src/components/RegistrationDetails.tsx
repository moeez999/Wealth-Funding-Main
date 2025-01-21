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
    console.log("tes")
    setCompletedSteps([...completedSteps, activeStep]);
    setActiveStep((prevStep) => prevStep + 1);
  };

  //@ts-ignore
  const handlePersonalDetailsSubmit = (values: any) => {
    console.log("Personal Details Form Values:", values);
    //submit form
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
          <PersonalDetailsForm onSubmit={handlePersonalDetailsSubmit} handleSaveAndContinue={handleSaveAndContinue}/>
        )}

        {/* Render AddressDetailsForm */}
        {activeStep === 1 && (
          <AddressDetailsForm onSubmit={handleAddressDetailsSubmit} handleSaveAndContinue={handleSaveAndContinue}/>
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
        </div>
      </div>
    </DetailsSidebar>
  );
};

export default RegistrationDetails;
