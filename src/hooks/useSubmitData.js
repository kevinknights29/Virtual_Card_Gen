import {useState} from 'react';

const useSubmitData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const QRFY_API_KEY = process.env.REACT_APP_QRFY_API_KEY;

  const submitData = async (data) => {
    setIsLoading(true);
    setError(null);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': QRFY_API_KEY,
      },
      body: JSON.stringify({qrs: [data]}),
    };

    try {
      const response = await fetch('https://qrfy.com/api/public/qrs', options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching data:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {submitData, isLoading, error};
};

export default useSubmitData;
