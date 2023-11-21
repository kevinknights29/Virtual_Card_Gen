import React from 'react';
import PropTypes from 'prop-types';


/**
 * Button component.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content of the button.
 * @param {string} [props.type='button'] - The type of the button.
 * @param {function} props.onClick - The click event handler for the button.
 * @param {Object} props.rest - Additional props to be spread on the button
 *  element.
 * @return {JSX.Element} The rendered button component.
 */
export const Button = ({children, type = 'button', onClick, ...rest}) => {
  return (
    <button type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
