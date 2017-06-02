import React, { Component } from 'react';
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
},{
  navigationOptions:{
    headerStyle:{backgroundColor:'pink'}
  }
});

export default BasicApp;
