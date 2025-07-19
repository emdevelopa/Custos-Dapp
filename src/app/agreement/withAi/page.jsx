import { useState } from "react";
import StepOne from "./components/step1";
import StepTwo from "./components/step2";

export default function CreateAgreementWithAi() {
  const [step, setStep] = useState(1);

  console.log("Current Step:", step);
  return (
    <>
      {step === 1 && <StepOne setStep={setStep} />}
      {step === 2 && <StepTwo setStep={setStep} />}
      {/* {step === 3 && <StepThree setStep={setStep} />  }  */}
    </>
  );
}
