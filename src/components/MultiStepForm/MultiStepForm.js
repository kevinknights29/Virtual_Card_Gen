import React, {useState} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Stepper} from '../Stepper/Stepper';
import {Setup} from '../Setup/Setup';
import {Data} from '../Data/Data';
import {Miscellaneous} from '../Miscellaneous/Miscellaneous';


/**
 * MultiStepForm component for handling a multi-step form with dynamic
 *  rendering based on the current step.
 * @return {JSX.Element} The rendered MultiStepForm component.
 */
export const MultiStepForm = () => {
  const methods = useForm();
  const [step, setStep] = useState(1);
  const [type, setType] = useState('');

  const onSubmit = (data) => {
    if (step === 3) {
      console.log('Final Data:', data);
      // Handle final submission
    } else {
      if (step === 1) {
        setType(data.type);
      }
      setStep(step + 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <Stepper currentStep={step} />
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <Setup />}
        {step === 2 && <Data type={type} />}
        {step === 3 && <Miscellaneous />}
        <button type="submit">{step === 3 ? 'Submit' : 'Next'}</button>
      </form>
    </FormProvider>
  );
};
