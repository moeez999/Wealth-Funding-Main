import React, { ReactNode } from "react";
import { Stepper, Step, StepLabel, styled, Typography } from "@mui/material";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import StepperChecked from "../../assets/icons/StepperChecked";
import Stepper1 from "../../assets/icons/Stepper1";
import Stepper2 from "../../assets/icons/Stepper2";
import Stepper3 from "../../assets/icons/Stepper3";
import Stepper4 from "../../assets/icons/Stepper4";
// import Stepper5 from "../../assets/icons/Stepper5";

//@ts-ignore
import { stylesMui } from "./styles";

const QontoConnector = styled(StepConnector)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  marginLeft: "0.90rem",
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#FF8F1F",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#25C348",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#CDCDCD0D",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

interface DetailsSidebarProps {
  children: ReactNode;
  activeStep: number;
  completedSteps: number[];
  handleStep: (step: number) => void;
}

const DetailsSidebar: React.FC<DetailsSidebarProps> = ({
  children,
  activeStep,
  completedSteps,
  handleStep,
}) => {
  const steps = [
    "Personal Details",
    "Address Details",
    "Identity Details",
    "Documents Upload",
    // "Requests",
  ];

  const isStepCompleted = (step: number) => completedSteps.includes(step);

  const getStepIcon = (index: number): JSX.Element => {
    if (isStepCompleted(index)) {
      return (
        <div className="mr-4">
          <StepperChecked />
        </div>
      );
    }

    switch (index) {
      case 0: // Personal Details step
        return (
          <div className="mr-4">
            <Stepper1 />
          </div>
        );
      case 1:
        return (
          <div className="mr-4">
            <Stepper2 />
          </div>
        );
      case 2:
        return (
          <div className="mr-4">
            <Stepper3 />
          </div>
        );
      case 3:
        return (
          <div className="mr-4">
            <Stepper4 />
          </div>
        );
      // case 4:
      //   return (
      //     <div className="mr-4">
      //       <Stepper5 />
      //     </div>
      //   );
      default:
        return <></>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-black h-[50vh] md:h-[100vh] w-full md:w-[30%] lg:w-[25%] xl:w-[20%]">
        <div className="flex gap-4 justify-center items-center mt-12 px-8">
          <img src="../../public/Icons/logo1.svg" alt="Logo" />
          <div className="font-[Montserrat] font-semibold text-[18px] text-white"></div>
        </div>
        <div className="md:mt-28 w-full flex justify-center items-center">
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            connector={<QontoConnector />}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  sx={{ color: "white" }}
                  StepIconComponent={() => <>{getStepIcon(index)}</>}
                  onClick={() => handleStep(index)}
                >
                  <Typography sx={stylesMui.labelText}>{label}</Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>

      <div className="w-full p-6 md:p-0 md:w-[70%] lg:w-[75%] xl:w-[80%] bg-[#F5F5F5]">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DetailsSidebar;
