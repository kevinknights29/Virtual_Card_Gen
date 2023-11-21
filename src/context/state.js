import React, {createContext, useContext, useState} from 'react';
import ProptTypes from 'prop-types';

/**
 * Context for the application state.
 * @type {import("react").Context}
 */
export const AppStateContext = createContext();


/**
 * AppProvider component that provides the application state to its children.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @return {JSX.Element} The JSX element representing the AppProvider
 *  component.
 */
export function AppProvider({children}) {
  const initialState = {
    data: {}, // Ensure data is initialized as an empty object
    // Add other initial state properties as needed
  };

  const [state, setState] = useState(initialState);

  return (
    <AppStateContext.Provider value={[state, setState]}>
      {children}
    </AppStateContext.Provider>
  );
}

AppProvider.propTypes = {
  children: ProptTypes.node.isRequired,
};


/**
 * Custom hook to access the application state.
 * @return {object} The application state context.
 * @throws {Error} If used outside of the AppProvider.
 */
export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within the AppProvider');
  }
  return context;
}
