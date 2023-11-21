import React from 'react';
import {useFormContext} from 'react-hook-form';

export const Miscellaneous = () => {
  const {register} = useFormContext();

  return (
    <div>
      <label htmlFor="style">Style</label>
      <input {...register('style')} type="text" />

      <label htmlFor="accessPassword">Access Password</label>
      <input {...register('accessPassword', {minLength: 3})} type="password" />

      <label htmlFor="googleAnalyticsId">Google Analytics ID</label>
      <input {...register('googleAnalyticsId')} type="text" />

      <label htmlFor="facebookPixelId">Facebook Pixel ID</label>
      <input {...register('facebookPixelId')} type="text" />

      <label htmlFor="googleTagManagerId">Google Tag Manager ID</label>
      <input {...register('googleTagManagerId')} type="text" />

      <label htmlFor="hostname">Hostname</label>
      <input {...register('hostname')} type="text" />

      <label htmlFor="scanLimit">Scan Limit</label>
      <input {...register('scanLimit', {valueAsNumber: true})} type="number" />
    </div>
  );
};

