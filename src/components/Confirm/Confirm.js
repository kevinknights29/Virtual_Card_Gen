import React from 'react';
import {useAppState} from '../../context/state';
import {useForm} from 'react-hook-form';
import {Form} from '../FormElements/Form';
import {Button} from '../FormElements/Button';

export const Confirm = () => {
  const [state] = useAppState();
  const {handleSubmit} = useForm({defaultValues: state});

  const submitData = (data) => {
    console.info('Final Submission Data:', data);
    // Submit data to the server or handle it as needed
  };

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Confirm</h1>

      {/* Displaying data from Setup step */}
      <div>
        <strong>Name:</strong> {state.name}
      </div>
      <div>
        <strong>Folder:</strong> {state.folder}
      </div>
      <div>
        <strong>Type:</strong> {state.type}
      </div>

      {/* Displaying data from Data step */}
      {/* Assuming you have fields like 'address', 'phone', etc. */}
      <div>
        <strong>Address:</strong> {state.address}
      </div>
      <div>
        <strong>Phone:</strong> {state.phone}
      </div>

      {/* Displaying data from Miscellaneous step */}
      <div>
        <strong>Style:</strong> {state.style}
      </div>
      <div>
        <strong>Access Password:</strong> {state.accessPassword}
      </div>

      {/* Add more fields as necessary from your state */}

      <Button type="submit">Submit</Button>
    </Form>
  );
};
