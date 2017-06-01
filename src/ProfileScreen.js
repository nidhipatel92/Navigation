import React , { Component } from 'react';
import {
  Text, View , Button,
} from 'react-native';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
    headerBackTitle: null,
    headerStyle:{backgroundColor:'red'}
  };
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello Profile Navigation!</Text>
        <Button
          onPress={() => navigate('Login')}
          title="Click"
        />
      </View>
    );
  }
}
