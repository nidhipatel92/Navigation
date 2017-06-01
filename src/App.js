import React, { Component } from 'react';
import {View ,Text} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';

const BasicApp = StackNavigator({
  Main: {
    name: 'Home',
    screen: HomeScreen
  },
  Profile: {
    name: 'Profile',
    screen: ProfileScreen
  },
  Login: {
    name: 'Login',
    screen: LoginScreen
  },
});

export default BasicApp;
