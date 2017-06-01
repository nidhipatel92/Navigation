import React , { Component } from 'react';
import {
  Text, View , Button,
} from 'react-native';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Login',
    headerBackTitle: null,
    headerStyle:{backgroundColor:'yellow'}
  };
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello Login Navigation!</Text>
        <Button
          onPress={() => navigate('Main')}
          title="Click"
        />
      </View>
    );
  }
}
