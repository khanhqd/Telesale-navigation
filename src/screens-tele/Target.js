import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
  Button
} from 'react-native';
import {Navigation} from 'react-native-navigation';
var {height, width} = Dimensions.get('window');
export default class Target extends Component {
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
  onButtonPress(){
    Alert.alert('pressed', 'Edit button pressed');
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop:20 }}>
        <View style={{flexDirection:'row', width:width , justifyContent: 'space-around'}}>
          <Button
            onPress={this.onButtonPress.bind()}
            title="Ngày"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.onButtonPress.bind()}
            title="Tuần"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.onButtonPress.bind()}
            title="Tháng"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={{width:width-30,margin:15, borderWidth:2, borderRadius: 2}}>
          <View>
            <Text style={styles.text}>Tổng số cuộc gọi</Text>
          </View>
            <View style={styles.box}>
              <Text>15/30</Text>
            </View>
            <View>
              <Text style={styles.text}>Tổng số đặt hẹn</Text>
            </View>

              <View style={styles.box}>
                <Text>15/30</Text>
              </View>
              <View>
                <Text style={styles.text}>Tổng số mua hàng</Text>
              </View>

                <View style={styles.box}>
                  <Text>15/30</Text>
                </View>
        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue'
  },
  box:{
    padding : 5,
    borderWidth : 2,
    borderRadius: 2
  },
  text:{
    padding: 10,
    fontSize: 14
  }
});
