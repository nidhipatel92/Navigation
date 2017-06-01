import React ,{Component} from 'react';

import {
  Text, View , Button,
} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerBackTitle: null,
    headerTintColor: 'black',
    // headerStyle:{backgroundColor:'pink'}
  };
  render() {
    const { navigate } = this.props.navigation;
    let nextRoute = {
      title: 'TwoScene',
      passProps: { myProp: 'bar', searchText: 'pass data', }
    };
    return (
      <View>
        <Button
          onPress={() => navigate('Profile' , nextRoute)} // Pass data to ProfileScreen nextRoute
          title="Click"
        />
      </View>
    );
  }
}
