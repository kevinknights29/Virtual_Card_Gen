import React from 'react';
import {useState} from 'react';

const DataForm = () => {
  const [data, setData] = useState([{}]);
  const [name, setName] = useState('');
  const [type, setType] = useState('vcard-plus');
  const [qrData, setQrData] = useState({
    name: '',
    design: {primary: '#000000', secondary: '#000000'},
  });
  const [qrDataDesign, setQrDataDesign] = useState({
    primary: '#000000',
    secondary: '#000000',
  });
  const [qrDataName, setQrDataName] = useState('');

  const nameMaxChars = 100;
  const qrDataNameMaxChars = 70;
  const QRFY_API_KEY = process.env.REACT_APP_QRFY_API_KEY;

  const handleEventChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setQrData({
      name: qrDataName,
      design: qrDataDesign,
    });
    console.log(qrData);

    setData([
      {
        name: name,
        type: type,
        data: qrData,
      },
    ]);
    console.log(data);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': QRFY_API_KEY,
      },
      body: JSON.stringify({
        qrs: data,
      }),
    };

    try {
      const response = await fetch('https://qrfy.com/api/public/qrs', options);
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      <h1>Data Form</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="qrs">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            maxLength={nameMaxChars}
            required
            onChange={(event) => handleEventChange(event, setName)}
          />
          <label>Folder:</label>
          <input type="text" name="folder" />
          <label>Type:</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(event) => handleEventChange(event, setType)}
            required
          >
            <option value="vcard-plus">vcard-plus</option>
          </select>
          <div className="data">
            <label>Address:</label>
            <input type="text" name="address" />
            <label>Phone:</label>
            <input type="text" name="phone" />
            <label>Email:</label>
            <input type="text" name="email" />
            <label>Design - Primary Color:</label>
            <input
              type="color"
              name="primary"
              id="primary"
              value={qrDataDesign.primary}
              onChange={(event) => handleEventChange(event, setQrDataDesign)}
              required
            />
            <label>Design - Secondary Color:</label>
            <input
              type="color"
              name="secondary"
              id="secondary"
              value={qrDataDesign.secondary}
              onChange={(event) => handleEventChange(event, setQrDataDesign)}
              required
            />
            <label>Last Name:</label>
            <input type="text" name="lastName" />
            <label>Name:</label>
            <input
              type="text"
              name="data_name"
              id="data_name"
              value={qrDataName}
              onChange={(event) => handleEventChange(event, setQrDataName)}
              maxLength={qrDataNameMaxChars}
              required
            />
            <label>Photo:</label>
            <input type="file" name="photo" />
            <label>Companies:</label>
            <input type="text" name="companies" />
            <label>Preview:</label>
            <input type="text" name="preview" />
            <label>Share Button:</label>
            <input type="checkbox" name="shareButton" />
            <label>Socials Title:</label>
            <input type="text" name="socialsTitle" />
            <label>Socials:</label>
            <input type="text" name="socials" />
            <label>Summary:</label>
            <input type="text" name="summary" />
            <label>Title:</label>
            <input type="text" name="title" />
            <label>URL:</label>
            <input type="text" name="url" />
          </div>
        </div>
        <div className="misc">
          <label>Style:</label>
          <input type="text" name="style" />
          <label>Access Password:</label>
          <input type="text" name="accessPassword" />
          <label>Google Analytics ID:</label>
          <input type="text" name="googleAnalyticsId" />
          <label>Facebook Pixel ID:</label>
          <input type="text" name="facebookPixelId" />
          <label>Google Tag Manager ID:</label>
          <input type="text" name="gooleTagManagerId" />
          <label>Hostname:</label>
          <input type="text" name="hostname" />
          <label>Scan Limit:</label>
          <input type="text" name="scanLimit" />
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DataForm;
