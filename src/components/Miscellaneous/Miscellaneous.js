import React from 'react';
import {useFormContext} from 'react-hook-form';
import {useAppState} from '../../context/state';


/**
 * Renders the Miscellaneous component.
 * This component allows the user to input various miscellaneous settings.
 *
 * @return {JSX.Element} The rendered Miscellaneous component.
 */
export const Miscellaneous = () => {
  const {register} = useFormContext();
  const [state, setState] = useAppState();

  const handleMiscellaneousChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
  };

  return (
    <div>
      <label htmlFor="style">Style</label>
      <input
        {...register('style')}
        value={state.style || ''}
        onChange={handleMiscellaneousChange}
        type="text"
      />

      <label htmlFor="accessPassword">Access Password</label>
      <input
        {...register('accessPassword', {minLength: 3})}
        value={state.accessPassword || ''}
        onChange={handleMiscellaneousChange}
        type="password"
      />

      <label htmlFor="googleAnalyticsId">Google Analytics ID</label>
      <input
        {...register('googleAnalyticsId')}
        value={state.googleAnalyticsId || ''}
        onChange={handleMiscellaneousChange}
        type="text"
      />

      <label htmlFor="facebookPixelId">Facebook Pixel ID</label>
      <input
        {...register('facebookPixelId')}
        value={state.facebookPixelId || ''}
        onChange={handleMiscellaneousChange}
        type="text"
      />

      <label htmlFor="googleTagManagerId">Google Tag Manager ID</label>
      <input
        {...register('googleTagManagerId')}
        value={state.googleTagManagerId || ''}
        onChange={handleMiscellaneousChange}
        type="text"
      />

      <label htmlFor="hostname">Hostname</label>
      <input
        {...register('hostname')}
        value={state.hostname || ''}
        onChange={handleMiscellaneousChange}
        type="text"
      />

      <label htmlFor="scanLimit">Scan Limit</label>
      <input
        {...register('scanLimit', {valueAsNumber: true})}
        value={state.scanLimit || ''}
        onChange={handleMiscellaneousChange}
        type="number"
      />
    </div>
  );
};
