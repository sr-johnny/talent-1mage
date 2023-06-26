import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { ButtonLogin } from '../../components/ButtonLogin'
import { LoginBackground } from '../../components/LoginBackground'
import { InputUnderlined } from '../../components/InputUnderlined'

export function SignUp() {
  const navigation = useNavigation();

  function handleHomeScreen() {
    navigation.navigate('HomeTabNavigator');
  }
  return (
    <LoginBackground
      title="Sign Up"
      content={
        <>
          <InputUnderlined title="Nome" />
          <InputUnderlined title="Sobrenome" />
          <InputUnderlined title="Email" />
          <InputUnderlined type="password" title="Password" />
          <InputUnderlined type="password" title="Confirm password" />

          <ButtonLogin title="Register" onPress={handleHomeScreen}/>
        </>
      }
    />
  );
}