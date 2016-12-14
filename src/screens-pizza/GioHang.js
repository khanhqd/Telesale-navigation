import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Dimensions,
  ScrollView
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Input from './common/Input';
import Card from './common/Card';
import CardSection from './common/CardSection';
import ProductList from './common/ProductList';
import Button from './common/Button';
var {height, width} = Dimensions.get('window');

export default class GioHang extends Component {
  static navigatorButtons = {
    leftButtons: [{
      icon: require('../../img/navicon_menu.png'),
      id: 'menu'
    }],
    rightButtons:[
      {
        icon: require('../../img/back-icon.png'),
        id: 'back'
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
  checkCode(){
    if (this.state.giftcode == "orderbyapp") {
      Alert.alert("Bạn được giảm 20.000d")
    } else {
      Alert.alert("Mã không đúng - hãy nhập orderbyapp để được giảm 20k!")
    }
  }
  back(){
    this.props.navigator.pop({
      animated:true
    });
  }
  sendOrder(){
    Alert.alert("Cảm ơn bạn đã đặt hàng", "Nếu trong 5p không có nhân viên liên lạc, bạn vui lòng gọi trực tiếp hotline: 0163.5815.969 nhé ^^!")
  }
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      phone: '',
      address: '',
      note: '',
      giftcode: ''
    };
  }

  onNavigatorEvent(event) {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
    if (event.id === 'back') {
      this.props.navigator.pop({
        animated:true
      });
    }
  }

  render() {
    return (
        <ScrollView>
          <Card>
            <CardSection>
              <Input
                label="SDT liên hệ:"
                value={this.state.text}
                onChangeText={phone => this.setState({phone})} />
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Input
                label="Địa chỉ giao hàng:"
                value={this.state.text}
                onChangeText={address => this.setState({address})} />
            </CardSection>
          </Card>

          <ProductList />

          <Card>
            <CardSection>
              <Input
                placeholder="Loại bánh và các yêu cầu cụ thể hơn..."
                label="Ghi chú:"
                value={this.state.note}
                onChangeText={note => this.setState({note})} />
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <Input
                placeholder="Điền mã.."
                label="GiftCode:"
                value={this.state.giftcode}
                onChangeText={giftcode => this.setState({giftcode})} />
              <Button
                onPress={this.checkCode.bind(this)}
                add="check" />
            </CardSection>
          </Card>

          <Card>
            <View style={{flexDirection:'row'}}>
              <Button
                onPress={this.back.bind(this)}
                add="BACK"/>
              <Button
                onPress={this.sendOrder.bind(this)}
                add="SEND"/>
            </View>
          </Card>
        </ScrollView>
      );
    }
  }

const styles = {
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
};
