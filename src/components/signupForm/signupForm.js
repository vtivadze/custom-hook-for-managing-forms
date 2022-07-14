import React from 'react';
import useForm from '../../hooks/useForm';
import { signupForm } from '../../utils/formConfig';
import './signupForm.css';

export default function SignupForm() {
  const { renderFormInputs } = useForm(signupForm);

  return (
    <form className="signupForm">
      <h1>Sign Up</h1>

      {renderFormInputs()}

      <button type="submit">Submit</button>
    </form>
  );
}