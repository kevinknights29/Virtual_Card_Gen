import React from 'react';
import {useFormContext} from 'react-hook-form';
import {useAppState} from '../../context/state';


/**
 * Renders the Setup component.
 * This component handles the setup step of the virtual card generation process.
 * It provides input fields for the user to enter their name, folder, and type.
 * The component uses useFormContext and useAppState hooks for managing form
 *  state.
 * @return {JSX.Element} The rendered Setup component.
 */
export const Setup = () => {
  const {register} = useFormContext();
  const [state, setState] = useAppState();

  // Handle state updates for the Setup step fields
  const handleSetupChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
  };

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        {...register('name', {required: true, maxLength: 100})}
        value={state.name || ''}
        onChange={handleSetupChange}
      />

      <label htmlFor="folder">Folder</label>
      <input
        type="number" {...register('folder')}
        value={state.folder || ''}
        onChange={handleSetupChange}
      />

      <label htmlFor="type">Type</label>
      <select
        {...register('type', {required: true})}
        value={state.type || ''}
        onChange={handleSetupChange}
      >
        <option value="app">App</option>
        <option value="business">Business</option>
        <option value="coupon">Coupon</option>
        <option value="feedback">Feedback</option>
        <option value="images">Images</option>
        <option value="link-list">Link List</option>
        <option value="menu">Menu</option>
        <option value="mp3">MP3</option>
        <option value="pdf">PDF</option>
        <option value="url">URL</option>
        <option value="video">Video</option>
        <option value="vcard-plus">VCard Plus</option>
        <option value="wifi">WiFi</option>
        <option value="tex">Text</option>
        <option value="turl-static">URL (Static)</option>
      </select>
    </div>
  );
};
