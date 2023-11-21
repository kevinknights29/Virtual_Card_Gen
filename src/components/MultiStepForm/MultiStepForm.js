import React, {useState, useContext} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Stepper} from '../Stepper/Stepper';
import {Setup} from '../Setup/Setup';
import {Data} from '../Data/Data';
import {Miscellaneous} from '../Miscellaneous/Miscellaneous';
import {AppStateContext} from '../../context/state';
import {fieldConfig} from '../../config/fieldConfig';


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
  const processFormData = (formData) => {
    const apiData = {...formData};
    const dataFields = fieldConfig['vcard-plus'].map((field) => field.name);

    apiData.data = {};
    dataFields.forEach((fieldName) => {
      if (apiData[fieldName] !== undefined) {
        apiData.data[fieldName] = apiData[fieldName];
        delete apiData[fieldName];
      }
    });

    return apiData;
  };

  const onSubmit = (data) => {
    if (step === 3) {
      const finalData = processFormData({...data, ...state});
      console.info('Processed Final Data:', finalData);
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
