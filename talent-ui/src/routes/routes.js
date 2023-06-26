import * as React from 'react'
import 'react-native-gesture-handler'

import { Login } from '../screens/Login'
import { SignUp } from '../screens/SignUp'
import { HomeTabNavigator } from '../components/HomeTabNavigator'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeTabNavigator"
        component={HomeTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}