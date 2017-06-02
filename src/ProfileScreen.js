import React , { Component } from 'react';
import {
  Text, View , Button,
} from 'react-native';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
    headerBackTitle: null,
    // headerStyle:{backgroundColor:'red'}
  };
  buttonPress() {
    this.props.navigation.navigate('Login');
  }
  render(){
    // const { navigate } = this.props.navigation;
    // const { params } = this.props.navigation.state; //Get data from to home screen
    // console.log(`Data`);
    // console.log(params.passProps.myProp);
    return (
      <View>
        <Text>Hello Profile Navigation!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="Click"
        />
      </View>
    );
  }
}
