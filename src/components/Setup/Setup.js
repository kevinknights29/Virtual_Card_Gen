import React from 'react';
import {useFormContext} from 'react-hook-form';

export const Setup = () => {
  const {register} = useFormContext();

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input {...register('name', {required: true, maxLength: 100})} />

      <label htmlFor="folder">Folder</label>
      <input type="number" {...register('folder')} />

      <label htmlFor="type">Type</label>
      <select {...register('type', {required: true})}>
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
