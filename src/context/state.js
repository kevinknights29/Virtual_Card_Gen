import React, {createContext, useContext, useState} from 'react';
import ProptTypes from 'prop-types';

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
  const value = useState({});
  return (
    <AppStateContext.Provider value={value}>
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


