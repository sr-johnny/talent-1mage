import React from 'react'
import { NativeBaseProvider } from 'native-base'
//import { NavigationContainer } from '@react-navigation/native'

import { Login } from "./src/screens/Login"
import { SignUp } from './src/screens/SignUp';

export default function App() {
  return (
    <NativeBaseProvider>
      <Login/>
    </NativeBaseProvider>
  );
}
