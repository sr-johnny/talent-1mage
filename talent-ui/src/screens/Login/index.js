import React from 'react'

import { Box } from 'native-base'

import { LoginBackground } from '../../components/LoginBackground'
import { InputUnderlined } from '../../components/InputUnderlined'
import { ButtonLogin } from '../../components/ButtonLogin'

export function Login() {
  return (
    <LoginBackground
      title="Login"
      content={
        <>
          <InputUnderlined title="Email" />
          <InputUnderlined title="Password" />

          <ButtonLogin title="Log In"/>

          <Box marginTop={7} color="#64748B">
            Or Continue with
          </Box>
          <Box marginTop={7} color="#64748B" flexDirection="row">
            Don't have account? <Box color="#000000">Create now</Box>
          </Box>
        </>
      }
    />
  );
}