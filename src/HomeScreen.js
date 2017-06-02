import React ,{Component} from 'react';
import {
  Text, View , Button,Image,
} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
      title: 'Splash', //header:null <= if you want to hide the header
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
          <Text>Hello, This is splash</Text>
          <Button
            onPress={() => navigate('Profile')}
            title="Go Home"
          />
        </View>
      );
    }
  }
//   static navigationOptions = {
//     title: 'Home',
//     headerBackTitle: null,
//     headerTintColor: 'black',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     let nextRoute = {
//       title: 'TwoScene',
//       passProps: { myProp: 'bar', searchText: 'pass data', }
//     };
//     return (
//       <View>
//         <Button
//           onPress={() => navigate('Profile' , nextRoute)} // Pass data to ProfileScreen nextRoute
//           title="Click"
//         />
//       </View>
//     );
//   }
// }
