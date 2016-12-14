import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import {Navigation} from 'react-native-navigation';

var {height, width} = Dimensions.get('window');


export default class Home extends Component {

  static navigatorButtons = {
    leftButtons: [{
      icon: require('../../img/navicon_menu.png'),
      id: 'menu'
    }],
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
  }
  onPress0() {
    this.props.navigator.push({
      title: "Dữ liệu khách hàng",
      screen: "test.Database",
      animated: true
    });
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1, backgroundColor:'burlywood'}}>
          <Image
          style={{height:height/3, width:width}}
          source={require('../../img/Home-banner-1.png')}/>
        </View>
        <View style={{flex:1, backgroundColor:'#0f4d92', flexDirection:'row'}}>
          <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:35, color:'white'}}> Hôm nay bạn đã gọi 0 cuộc!</Text>
            <Text style={{fontSize:35, color:'white'}}>Chiến tiếp thôi!</Text>
          </View>
          <TouchableOpacity onPress={this.onPress0.bind(this)} style={{flex:1, backgroundColor:'darkseagreen', justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:30, color:'white'}}>Database</Text>
            <Text style={{fontSize:15, color:'white'}}>Click here!</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'black', fontSize:25, fontWeight:'bold'}}>TRÊN CON ĐƯỜNG THÀNH CÔNG</Text>
          <Text style={{color:'black', fontSize:25, fontWeight:'bold'}}>KHÔNG CÓ DẤU CHÂN </Text>
          <Text style={{color:'black', fontSize:25, fontWeight:'bold'}}>CỦA KẺ LƯỜI BIẾNG</Text>
          <Text style={{color:'black', fontSize:13}}>                   P/S: HỌ ĐI ÔTÔ MÀ!</Text>
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
  firstRow: {
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'grey',
    paddingTop:10,
    paddingBottom:10
  }
});
