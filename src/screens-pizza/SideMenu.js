import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
var {height, width} = Dimensions.get('window');
import { Navigation } from 'react-native-navigation';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Night Pizza</Text>
          <TouchableOpacity onPress={ this.onPressLogo.bind(this) }>
            <Image
              style={{height:width/4, width:width/4, margin:10, alignSelf:'center'}}
              source={require('../../img/logo-pizza.png')}/>
          </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLayout}
          onPress={ this.onPressLogo.bind(this) }>
          <Text style={styles.button}>Trang Chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLayout}
          onPress={ this.onPressGioiThieu.bind(this) }>
          <Text style={styles.button}>Giới thiệu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLayout}
          onPress={ this.onPressMenu.bind(this) }>
          <Text style={styles.button}>Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLayout}
          onPress={ this.onPressKhuyenMai.bind(this) }>
          <Text style={styles.button}>Khuyến mại</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLayout}
          onPress={ this.onPressLienHe.bind(this) }>
          <Text style={styles.button}>Liên hệ</Text>
        </TouchableOpacity>

        <Text style={{color:'#d4830a', padding:10, alignSelf:'center'}}>Hotline: 0163.5815.969</Text>
        <Text style={{color:'#d4830a', padding:10, alignSelf:'center'}}>Phục vụ từ 20h đến 2h sáng</Text>
      </ScrollView>
    );
  }
  // onReplaceTab2Press() {
  //   this._toggleDrawer();
  //   // push/pop navigator actions affect the navigation stack of the current screen only.
  //   // since side menu actions are normally directed at sibling tabs, push/pop will
  //   // not help us. the recommended alternative is to use deep links for this purpose
  //   this.props.navigator.handleDeepLink({
  //     link: "tab2/example.PushedScreen"
  //   });
  // }
  onPressLogo() {
    this._toggleDrawer();
    this.props.navigator.push({
      screen: 'test.Home',
      animated:true
    });
  }
  onPressGioiThieu() {
    this._toggleDrawer();
    this.props.navigator.push({
      title: 'Giới Thiệu',
      screen: 'test.GioiThieu',
      animated:true
    });
  }
  onPressMenu() {
    this._toggleDrawer();
    this.props.navigator.push({
      title: 'Menu',
      screen: 'test.Menu',
      animated:true
    });
  }
  onPressLienHe() {
    this._toggleDrawer();
    this.props.navigator.push({
      title: 'Liên Hệ',
      screen: 'test.LienHe',
      animated:true
    });
  }
  onPressKhuyenMai() {
    this._toggleDrawer();
    this.props.navigator.push({
      title: 'Khuyến Mãi',
      screen: 'test.KhuyenMai',
      animated:false
    });
  }
  _toggleDrawer() {
    this.props.navigator.toggleDrawer({
      to: 'closed',
      side: 'left',
      animated: true
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2436',
    width: 300
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    marginTop:10,
    color:'#d4830a',
    fontWeight: 'bold'
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: '#ddd',
    fontWeight:'bold',
    marginLeft:10,
    marginRight:10
  },
  buttonLayout: {
    marginTop:10,
    marginBottom:10,
    borderWidth:1,
    width:250,
    height:50,
    borderColor:'#eee',
    borderRadius:30,
    alignSelf:'center',
    elevation:1,
  }
});
