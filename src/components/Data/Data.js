import React from 'react';
import {useFormContext} from 'react-hook-form';
import {useAppState} from '../../context/state';
import {fieldConfig} from '../../config/fieldConfig';


/**
 * Renders the Data component which displays a form with fields based on the
 *  current state type.
 * Allows the user to input data and updates the state accordingly.
 * @return {JSX.Element} The rendered Data component.
 */
export const Data = () => {
  const {register} = useFormContext();
  const [state, setState] = useAppState();

  const fields = fieldConfig[state.type] || []; // Load fields based on type

  // Handle state updates for the Data step fields
  const handleDataChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
  };

  return (
    <div>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.name}</label>
          <input
            {...register(field.name, field.validations)}
            type={field.type}
            value={state[field.name] || ''}
            onChange={handleDataChange}
          />
        </div>
      ))}
    </div>
  );
};
