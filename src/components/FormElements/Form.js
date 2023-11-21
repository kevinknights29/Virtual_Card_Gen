import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a form component.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to render within
 *  the form.
 * @param {function} props.onSubmit - The function to be called when the form
 *  is submitted.
 * @return {JSX.Element} The rendered form component.
 */
export const Form = ({children, onSubmit}) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
