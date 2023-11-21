import React, {useState, useContext} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Stepper} from '../Stepper/Stepper';
import {Setup} from '../Setup/Setup';
import {Data} from '../Data/Data';
import {Miscellaneous} from '../Miscellaneous/Miscellaneous';
import {AppStateContext} from '../../context/state';


/**
 * MultiStepForm component for handling a multi-step form with dynamic
 *  rendering based on the current step.
 * @return {JSX.Element} The rendered MultiStepForm component.
 */
export const MultiStepForm = () => {
  const methods = useForm();
  const [step, setStep] = useState(1);
  const [type, setType] = useState('');
  const [state] = useContext(AppStateContext);

  // Function to handle final data submission
  const submitData = (formData) => {
    const apiData = {
      ...formData,
      data: state.data,
    };
    console.info('Final Submission Data:', apiData);
    // Submit apiData to the server or handle it as needed
  };

  const onSubmit = (data) => {
    if (step === 3) {
      submitData(data); // Call submitData on the final step
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
