import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from './SignInScreen';
import WelcomeScreen from './WelcomeScreen';

export default createStackNavigator(
  {
    SignIn: SignInScreen,
    Welcome: WelcomeScreen,
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
      headerStyle: {
        shadowOpacity: 0,
        shadowRadius: 0,
        borderBottomWidth: 0,
        elevation: 0,
        shadowOffset: {
          height: 0,
        },
      }
    }
  }
);
