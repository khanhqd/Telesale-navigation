import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import MapView from 'react-native-maps';
var {height, width} = Dimensions.get('window');
export default class LienHe extends Component {
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
      <View style={{flex: 1, padding: 5}}>
        <View style={styles.container}>
          <Text style={styles.text}> Night Pizza, ship đồ ăn đêm từ 20h - 02h sáng
          </Text>
          <Text style={styles.text}> Hotline: 0163.5815.969 / 08689.12344. {'\n'} Địa chỉ: ngõ 612 Đê La Thành
          </Text>
          <Text style={styles.text}> Web: www.pizzadem.com {'\n'} FB: fb.com/PizzaDemHN
          </Text>
          <Text style={styles.text}> On Google Map</Text>
        </View>
        <View style={{width:width-20, height:width-20,borderWidth:1, borderColor:'#1C2436', margin: 5}}>
          <MapView
            style={{width:null, height: 400}}
            initialRegion={{
              latitude: 21.025317,
              longitude: 105.816797,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <MapView.Marker
              coordinate={{latitude: 21.025317,longitude: 105.816797}}
              title='Night Pizza'
              description='0163.5815.969'
            />
          </MapView>
        </View>
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
    backgroundColor:'white'
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue'
  },
  text:{
    color:'#1C2436',
    fontSize:14,
    paddingTop: 5,
  }
});
