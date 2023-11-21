import React from 'react';
import {useFormContext} from 'react-hook-form';
import {fieldConfig} from '../../config/fieldConfig';
import PropTypes from 'prop-types';


/**
 * Renders a form with dynamic fields based on the provided type.
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of data to render fields for.
 * @return {JSX.Element} The rendered form component.
 */
export const Data = ({type}) => {
  const {register} = useFormContext();
  const fields = fieldConfig[type] || [];

  return (
    <div>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.name}</label>
          <input {...register(field.name, field.validations)}
            type={field.type} />
        </div>
      ))}
    </div>
  );
};

Data.propTypes = {
  type: PropTypes.string.isRequired,
};
