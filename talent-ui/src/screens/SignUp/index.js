import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { LoginBackground } from '../../components/LoginBackground'
import { InputUnderlined } from '../../components/InputUnderlined'
import { ButtonLogin } from '../../components/ButtonLogin'

export function SignUp() {
  const navigation = useNavigation();

  const [ signed, setSigned ] = useState(false);

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
          <InputUnderlined title="Password" />
          <InputUnderlined title="Confirm password" />

          <ButtonLogin title="Register" onPress={handleHomeScreen}/>
        </>
      }
    />
  );
}