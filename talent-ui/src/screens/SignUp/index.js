import React from 'react'

import { LoginBackground } from '../../components/LoginBackground'
import { InputUnderlined } from '../../components/InputUnderlined';
import { ButtonLogin } from '../../components/ButtonLogin';

export function SignUp() {
  return (
    <LoginBackground
      title="Sign Up"
      content={
        <>
          <InputUnderlined title="Nome" />
          <InputUnderlined title="Sobrenome" />
          <InputUnderlined title="Email" />
          <InputUnderlined title="Password" />
          <InputUnderlined title="Confirm password" />

          <ButtonLogin title="Register" />
        </>
      }
    />
  );
}