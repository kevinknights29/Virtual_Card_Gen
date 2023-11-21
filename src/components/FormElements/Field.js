import React from 'react';
import ProptTypes from 'prop-types';

/**
 * Renders a form field with a label and optional error message.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content of the field.
 * @param {string} props.label - The label for the field.
 * @param {Object} props.error - The error object, if any.
 * @param {string} props.error.message - The error message.
 * @return {JSX.Element} The rendered field component.
 */
export const Field = ({children, label, error}) => {
  const id = getChildId(children);

  return (
    <div className="col-sm-12 mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {children}
      {error && <small className="error">{error.message}</small>}
    </div>
  );
};

Field.propTypes = {
  children: ProptTypes.node.isRequired,
  label: ProptTypes.string.isRequired,
  error: ProptTypes.shape({
    message: ProptTypes.string,
  }),
};

/**
 * Retrieves the ID of the child component.
 * @param {React.ReactNode} children - The children of the component.
 * @return {string|undefined} - The ID of the child component, or
 *  undefined if not found.
 */
export const getChildId = (children) => {
  const child = React.Children.only(children);

  if ('id' in child?.props) {
    return child.props.id;
  }
};
