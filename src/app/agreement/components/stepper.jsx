import React, { useState, useRef, useEffect } from 'react';

const stepperConfig = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered.</div>,
  },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  // A ref to hold references to each step component
  const stepRef = useRef([]);

  useEffect(() => {
    if (stepRef.current.length > 0) {
      setMargins({
        marginLeft: stepRef.current[0].offsetWidth / 2,
        marginRight: stepRef.current[stepRef.current.length - 1].offsetWidth / 2,
      });
    }
  }, [stepRef.current, currentStep]);

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepperConfig.length - 1)) * 100;
  };

  return (
    <div className=" relative flex justify-between items-center mb-5">
  <div className=" relative flex justify-between items-center mb-5">
    {stepperConfig.map((step, index) => (
      <div key={index} className=" flex flex-col items-center">
        <div
          className={`w-7 h-7 rounded-full bg-gray-300 flex justify-center items-center mb-1.5 z-20 ${
            currentStep > index ? 'bg-green-500 text-white' : ''
          }`}
        >
          {currentStep > index ? '✔' : index + 1}
        </div>
        <div className=" text-sm">{step.name}</div>
      </div>
    ))}
  </div>

  <div
    className="progress-bar absolute top-[25%] left-0 h-[4px] bg-gray-300"
    style={{
      width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
      marginLeft: margins.marginLeft,
      marginRight: margins.marginRight,
    }}
  >
    <div
      className=" h-full bg-green-500 transition-all duration-200 ease-in-out"
      style={{ width: `${calculateProgressBarWidth()}%` }}
    ></div>
  </div>
</div>

  );
};

export default Stepper;
