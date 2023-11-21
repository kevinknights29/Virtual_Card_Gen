import React from 'react';
import {useFormContext} from 'react-hook-form';
import {useAppState} from '../../context/state';
import {fieldConfig} from '../../config/fieldConfig';


/**
 * Renders a form component that dynamically generates input fields based on
 *  the current state.
 * The form fields are populated with data from the state and allow for nested
 *  field values.
 * @return {JSX.Element} The rendered form component.
 */
export const Data = () => {
  const {register} = useFormContext();
  const [state, setState] = useAppState();

  const fields = fieldConfig[state.type] || [];

  const handleDataChange = (e) => {
    const {name, value} = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.name}</label>
          {field.type === 'object' ? (
            Object.entries(field.fields).map(([subKey, subField]) => (
              <div key={subKey}>
                <label htmlFor={`${field.name}.${subKey}`}>
                  {subKey}
                </label>
                <input
                  {...register(`${field.name}.${subKey}`, subField.validations)}
                  type={subField.type}
                  value={state.data?.[field.name]?.[subKey] || ''}
                  name={`${field.name}.${subKey}`}
                  onChange={handleDataChange}
                />
              </div>
            ))
          ) : (
            <input
              {...register(field.name, field.validations)}
              type={field.type}
              value={state.data?.[field.name] || ''}
              name={field.name}
              onChange={handleDataChange}
            />
          )}
        </div>
      ))}
    </div>
  );
};
