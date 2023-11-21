import React from 'react';
import {useAppState} from '../../context/state';
import {useForm} from 'react-hook-form';
import {Form} from '../FormElements/Form';
import {Section} from '../FormElements/Section';
import {SectionRow} from '../FormElements/Section';
import {Button} from '../FormElements/Button';

/**
 * Renders a confirmation form with personal information, education details,
 *  and an option to submit the form.
 * @return {JSX.Element} The rendered confirmation form component.
 */
export const Confirm = () => {
  const [state] = useAppState();
  const {handleSubmit} = useForm({defaultValues: state});

  const submitData = (data) => {
    console.info(data);
    // Submit data to the server
  };

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Confirm</h1>
      <Section title="Personal info" url="/">
        <SectionRow>
          <div>First name</div>
          <div>{state.firstName}</div>
        </SectionRow>
        <SectionRow>
          <div>Last name</div>
          <div>{state.lastName}</div>
        </SectionRow>
        <SectionRow>
          <div>Email</div>
          <div>{state.email}</div>
        </SectionRow>
      </Section>
      <Section title="Education" url="/education">
        <SectionRow>
          <div>University</div>
          <div>{state.university}</div>
        </SectionRow>
        <SectionRow>
          <div>Degree</div>
          <div>{state.degree}</div>
        </SectionRow>
      </Section>
      <Section title="About" url="/about">
        <SectionRow>
          <div>About me</div>
          <div>{state.about}</div>
        </SectionRow>
      </Section>
      <div className="clo-md-12 d-flex justify-content-start">
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
};
