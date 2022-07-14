import React from 'react';
import Input from '../components/input/input';

/**
 * creates and returns object representation of form field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 */
export function createFormFieldConfig(label, name, type, defaultValue = '') {
  return {
    renderInput: (handleChange, value, isValid, error, key) => {
      return (
        <Input
          key={key}
          name={name}
          type={type}
          label={label}
          isValid={isValid}
          value={value}
          handleChange={handleChange}
          errorMessage={error}
        />
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: '',
    touched: false,
  };
}

// object representation of signup form
export const signupForm = {
  name: {
    ...createFormFieldConfig('Full Name', 'name', 'text'),
  },
  email: {
    ...createFormFieldConfig('Email', 'email', 'email'),
  },
  password: {
    ...createFormFieldConfig('Password', 'password', 'password'),
  },
  confirmPassword: {
    ...createFormFieldConfig('Confirm Password', 'confirmPassword', 'password'),
  },
};