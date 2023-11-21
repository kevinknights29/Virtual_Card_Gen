import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a stepper component that displays a navigation bar with steps.
 * Each step is represented by a span that can be active or disabled
 * based on the current step.
 * @param {number} currentStep - The current step of the form.
 * @return {JSX.Element} The stepper component.
 */
export const Stepper = ({currentStep}) => {
  const getStepClass = (step) => {
    return 'nav-link ' + (step === currentStep ? 'active' : 'disabled');
  };

  return (
    <nav className="stepper navbar navbar-expand-lg">
      <div className="collapse navbar-collapse">
        <ol className="navbar-nav">
          <li className="step nav-item">
            <span className={getStepClass(1)}>Setup</span>
          </li>
          <li className="step nav-item">
            <span className={getStepClass(2)}>Data</span>
          </li>
          <li className="step nav-item">
            <span className={getStepClass(3)}>Miscellaneous</span>
          </li>
          <li className="step nav-item">
            <span className={getStepClass(4)}>Confirm</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};

Stepper.propTypes = {
  currentStep: PropTypes.number.isRequired,
};
