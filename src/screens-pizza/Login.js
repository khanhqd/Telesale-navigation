import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Image,
  Dimensions,
  ScrollView,
  Animated,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import firebase from 'firebase';
var {height, width} = Dimensions.get('window');

import { Navigation } from 'react-native-navigation';

export default class Login extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyAHIjncssrAq86Qsxk3tzqGnL5eA2q-IHE',
    authDomain: 'pizza-e08db.firebaseapp.com',
    databaseURL: 'https://pizza-e08db.firebaseio.com',
    storageBucket: 'pizza-e08db.appspot.com',
    messagingSenderId: '295156272865'
    });
  }
  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onLogin() {
    this.props.navigator.push({
      screen: 'test.Home',
      title: 'Night Pizza'
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#1C2436"
          barStyle="light-content"
          />
        <Image source={require('../../img/pizzabackground6.jpg')}
          resizeMode='stretch'
          style={{flex:1,height: height, width: width}}
          >
          <Image
            source={require('../../img/logo-pizza.png')}
            style={{height:width/4, width:width/4, marginTop:height*0.1, alignSelf:'center'}}/>
          <TouchableOpacity onPress={() => {this.onLogin()}}
            style={{
              alignSelf: 'center',backgroundColor: '#1C2436',
              height: 45, width: 250, marginTop: 30,marginTop:height*0.5,
              borderWidth: 1.5, borderColor: '#eee', borderRadius: 30,
              justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#eee', fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            backgroundColor: '#3b5999', alignSelf: 'center',
            height: 45, width: 250, borderWidth: 1.5,marginTop:20,
            borderColor: '#eee', borderRadius: 30, justifyContent: 'center',
            alignItems: 'center', flexDirection: 'row' }}>
              <View style={{ alignItems:'center' }}>
                <Text style={{ color: '#eee', fontWeight: 'bold' }}>Login with Facebook</Text>
              </View>

          </TouchableOpacity>
        </Image>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  /*nhiem vu cua a Khanh la viet sang styles nhe :D */

});
