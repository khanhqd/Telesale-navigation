import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Modal,
  Button
} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class KhuyenMai extends Component {
  static navigatorButtons = {
    leftButtons: [{
      icon: require('../../img/navicon_menu.png'),
      id: 'menu'
    }],
    rightButtons:[
      {
        icon: require('../../img/shop.png'),
        id: 'shop'
      }]
  };
  static navigatorStyle = {
    navBarBackgroundColor: '#1C2436',
    navBarTextColor: '#d4830a',
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
      this.props.navigator.push({
        title: "Giỏ Hàng",
        screen: "test.GioHang",
        animated:true
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Nhập / đọc mã khuyến mại:
        </Text>
          <View
            style={{alignSelf:'center', borderWidth:1, borderColor:'#eee', width:100, backgroundColor:'#1C2436',
              borderRadius:7, alignItems:'center', justifyContent:'center' }}>
            <Text style={{color:'#eee', fontWeight:'bold', fontSize:15}}>OrderByApp
            </Text>
          </View>
        <Text style={styles.text}>
          Để được giảm giá 20k với mọi đơn hàng
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
  container: {
    borderWidth:1,
    borderRadius:3,
    borderColor:'#ddd',
    shadowColor:'#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity:0.2,
    shadowRadius: 2,
    elevation:1,
    marginLeft: 5,
    marginRight:5,
    marginTop:10,
    backgroundColor:'white',
    alignItems:'center'
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue'
  },
  modalButton: {
    marginTop: 10,
  },
  text:{
    color:'black',
    fontSize:15,
    fontWeight:'bold',
    padding: 10,
  }
});
