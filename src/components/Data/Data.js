import React from 'react';
import {useFormContext} from 'react-hook-form';
import {fieldConfig} from '../../config/fieldConfig';


/**
 * Renders a form with dynamic fields based on the provided configuration.
 * @return {JSX.Element} The rendered form component.
 */
export const Data = () => {
  const {register} = useFormContext();
  const fields = fieldConfig['vcard-plus'] || []; // Adjust based on your state

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
                  name={`${field.name}.${subKey}`}
                />
              </div>
            ))
          ) : (
            <input
              {...register(field.name, field.validations)}
              type={field.type}
              name={field.name}
            />
          )}
        </div>
      ))}
    </div>
  );
};
