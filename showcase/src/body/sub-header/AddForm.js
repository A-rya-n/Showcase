import React, { useState } from "react";
import { Button, TextField, Box, Stepper, Step, StepLabel } from "@mui/material";

const steps = ["Enter Shop details I", "Enter shop details II"];

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
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField label="Shop No." defaultValue="" variant="standard" />
            <TextField label="Shop Name" defaultValue="" variant="standard" />
            <TextField label="Category" defaultValue="" variant="standard" />
            <TextField label="E - mail" defaultValue="" variant="standard" />
          </div>
        </Box>
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
