import React from 'react'
import { Box, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { theme } from '../../global/theme'

import { ButtonLogin } from '../../components/ButtonLogin'
import { LoginBackground } from '../../components/LoginBackground'
import { InputUnderlined } from '../../components/InputUnderlined'

export function Login() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('HomeTabNavigator');
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
          <InputUnderlined type="password" title="Password" />

          <ButtonLogin title="Log In" onPress={handleSignIn} />

          <Box 
            marginTop={7} 
            _text={{
              fontSize: 14,
              fontFamily: theme.fonts.poppins_Regular,
              color: theme.colors.grey
            }}
          >
            Or Continue with
          </Box>
          <Box
            marginTop={3}
            _text={{
              fontSize: 14,
              fontFamily: theme.fonts.poppins_Regular,
              color: theme.colors.grey
            }}
            flexDirection="row"
            alignItems="center"
          >
            Don't have account?
            <Button
              variant="unstyled"
              _text={{
                fontSize: 14,
                fontFamily: theme.fonts.poppins_Medium,
                color: theme.colors.black_button
              }}
              onPress={handleSignUpScreen}
            >Create now</Button>
          </Box>
        </>
      }
    />
  );
}
