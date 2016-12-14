import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class Motivation extends Component {
  static navigatorButtons = {
    leftButtons: [{
      icon: require('../../img/navicon_menu.png'),
      id: 'menu'
    }]
  };
  static navigatorStyle = {
    navBarBackgroundColor: '#336600',
    navBarTextColor: 'white',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    tabBarBackgroundColor: '#4dbce9',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ffff00'
  };

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
    if (event.id === 'shop') {
      Alert.alert('NavBar', 'Edit button pressed');
    }
    if (event.id === 'add') {
      Alert.alert('NavBar', 'Add button pressed');
    }
  }

  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        <Text>  Tạo động lực
        </Text>
      </View>
    );
  }

//   onLightBoxPress() {
//     this.props.navigator.showLightBox({
//       screen: "example.LightBoxScreen",
//       style: {
//         backgroundBlur: "dark"
//       },
//       passProps: {
//         greeting: 'hey there'
//       },
//     });
//   }
//
//   onInAppNotificationPress() {
//     this.props.navigator.showInAppNotification({
//       screen: "example.NotificationScreen"
//     });
//   }
//

}
const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue'
  }
});
