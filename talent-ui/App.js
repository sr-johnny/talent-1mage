import React from 'react'
import AuthContext from './src/contexts/auth'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'

import { useFonts } from 'expo-font'
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins'
import {
  Roboto_400Regular
} from '@expo-google-fonts/roboto'

import { Routes } from './src/routes/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Roboto_400Regular,
    'Metropolis_Regular': require('./src/assets/fonts/Metropolis_Regular.otf'),
    'Metropolis_Medium': require('./src/assets/fonts/Metropolis_Medium.otf'),
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

//        <AuthContext>
