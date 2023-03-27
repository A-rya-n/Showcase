import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Button } from "@mui/material";

const steps = ["Enter Shop details", "Enter product details"];

const AddForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = (currentStep) => {
    setActiveStep((currentStep) => currentStep + 1);
  };
  const prevStep = (currentStep) => {
    setActiveStep((currentStep) => currentStep - 1);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={prevStep}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Button onClick={nextStep}>
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </>
  );
};

export default AddForm;
