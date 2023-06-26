import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Feather } from '@expo/vector-icons'

import { theme } from '../../global/theme'

import { Home } from '../../screens/Home'
import { Profile } from '../../screens/Profile'
import { MoviesList } from '../../screens/MoviesList'
import { Settings } from '../../screens/Settings'

const Tab = createBottomTabNavigator();

export function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.green,
        tabBarInactiveTintColor: theme.colors.balck_label,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.poppins_Regular,
          fontSize: 12,
        },
        tabBarIconStyle: {
          height: 24,
          width: 24,
        },
        activeTintColor: theme.colors.green,
        tabBarStyle:{
          height: 75,
          paddingTop: 4,
          paddingBottom: 10,
          backgroundColor: theme.colors.white_button,
          borderTopColor: 'transparent',
        }
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={MoviesList}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="heart" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="settings" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}