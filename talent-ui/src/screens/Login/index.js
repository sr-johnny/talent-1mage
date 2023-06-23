import React from 'react'
import { Box, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native';

import { LoginBackground } from '../../components/LoginBackground'
import { InputUnderlined } from '../../components/InputUnderlined'
import { ButtonLogin } from '../../components/ButtonLogin'

export function Login() {
  const navigation = useNavigation();

  function handleHomeScreen() {
    navigation.navigate('Home');
  }

  function handleSignUpScreen() {
    navigation.navigate('SignUp');
  }

  return (
    <LoginBackground
      title="Login"
      content={
        <>
          <InputUnderlined title="Email" />
          <InputUnderlined title="Password" />

          <ButtonLogin title="Log In" onPress={handleHomeScreen} />

          <Box marginTop={7} color="#64748B">
            Or Continue with
          </Box>
          <Box
            marginTop={3}
            color="#64748B"
            flexDirection="row"
            alignItems="center"
          >
            Don't have account?
            <Button
              variant="unstyled"
              color="#000000"
              fontWeight="bold"
              onPress={handleSignUpScreen}
            >Create now</Button>
          </Box>
        </>
      }
    />
  );
}