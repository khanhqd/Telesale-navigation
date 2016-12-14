import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
  Image,
  ScrollView,
  TextInput
} from 'react-native';
import {Navigation} from 'react-native-navigation';

var {height, width} = Dimensions.get('window');

export default class GioiThieu extends Component {
  static navigatorButtons = {
    leftButtons: [{
      icon: require('../../img/navicon_menu.png'),
      id: 'menu'
    }],
    rightButtons:[
      {
        icon: require('../../img/shop.png'),
        id: 'shop'
      }],

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
      <View style={{flex:1}}>

        <Image
          style={{height:height, width:width, opacity:0.5, position:'absolute'}}
          resizeMode="stretch"
          source={require('../../img/pizzabackground4.jpg')} />
          <View style={styles.container}>
            <Text style={styles.text}>  Night Pizza là thương hiệu ship đồ ăn đêm hàng đầu tại Hà Nội, chuyên phục vụ Pizza,
            Spaghetti và đang dần mở rộng thêm hương vị ẩm thực của Ý.

            </Text>
            <Text style={styles.text}>  Phục vụ từ 20h tối đến 02h sáng các ngày trong tuần.
            Chỉ dưới 30p sau khi order bạn đã có thể thưởng thức hương vị Pizza chuyên nghiệp ngay tại phòng của bạn.
            Với mong muốn phục vụ được nhiều hơn những bữa ăn đêm ngon của quý khách hàng,
             Night Pizza nhận ship trong bán kính 7km tính từ cơ sở 612 Đê La Thành chỉ với phí ship tối đa 20k đồng.
             Hãy order Pizza Night để tận hưởng sự phục vụ tận tâm của chúng tôi và hương vị Pizza ngon tuyệt vời!!!
            </Text>
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
    color:'black',
    fontSize:15,
    fontWeight:'bold',
    paddingTop: 10,
    paddingLeft:10,
  }
});
