import React from 'react';
import {AppProvider} from './context/state';
import {MultiStepForm} from './components/MultiStepForm/MultiStepForm';
import './App.css';

/**
 * Renders the main application component.
 * @return {JSX.Element} The rendered application component.
 */
function App() {
  return (
    <AppProvider>
      <MultiStepForm/>
    </AppProvider>
  );
}

export default App;
