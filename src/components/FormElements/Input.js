import React from 'react';
import PropTypes from 'prop-types';


/**
 * Renders an input element.
 * @component
 * @param {object} props - The component props.
 * @param {string} props.id - The ID of the input element.
 * @param {string} [props.type='text'] - The type of the input element.
 * @param {object} rest - The remaining props to be spread on the input element.
 * @param {React.Ref} ref - The ref to be forwarded to the input element.
 * @returns {JSX.Element} The rendered input element.
 */
export const Input = React.forwardRef(({id, type = 'text', ...rest}, ref) => {
  return <input ref={ref} id={id} type={type} {...rest} />;
});

Input.displayName = 'Input';

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};
