import React, {useState} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Setup} from '../Setup/Setup';
import {Data} from '../Data/Data';
import {Miscellaneous} from '../Miscellaneous/Miscellaneous';

export const MultiStepForm = () => {
  const methods = useForm();
  const [step, setStep] = useState(1);
  const [type, setType] = useState('');

  const onSubmit = (data) => {
    if (step === 1) {
      setType(data.type);
      setStep(step + 1);
    } else if (step === 3) {
      console.log('Final Data:', data);
      // Handle final submission
    } else {
      setStep(step + 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <Setup />}
        {step === 2 && <Data type={type} />}
        {step === 3 && <Miscellaneous />}
        <button type="submit">Next</button>
      </form>
    </FormProvider>
  );
};
