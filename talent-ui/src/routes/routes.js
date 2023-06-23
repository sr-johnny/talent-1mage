import * as React from 'react'
//import 'react-native-gesture-handler'
import { Home } from '../screens/Home'
import { Login } from '../screens/Login'
import { SignUp } from '../screens/SignUp'
import { Profile } from '../screens/Profile'
//import { createStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();

export function Routes() {
    return(
        <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    );
}