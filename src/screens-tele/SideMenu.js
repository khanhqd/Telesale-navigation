import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  AlertIOS,
  Image,
  Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');
export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.button}> FOR SALER TO BECOME THE BEST
        </Text>
        <TouchableOpacity style={styles.buttonLayout} onPress={ this.onPress0.bind(this) }>
          <Text style={styles.button}>Dữ liệu khách hàng</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLayout} onPress={ this.onPress1.bind(this) }>
          <Text style={styles.button}>Lịch sử</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLayout} onPress={ this.onPress2.bind(this) }>
          <Text style={styles.button}>Khách của tôi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLayout} onPress={ this.onPress3.bind(this) }>
          <Text style={styles.button}>Tiến độ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLayout} onPress={ this.onPress4.bind(this) }>
          <Text style={styles.button}>Checklist</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLayout} onPress={ this.onPress5.bind(this) }>
          <Text style={styles.button}>Tạo động lực</Text>
        </TouchableOpacity>


      </ScrollView>
    );
  }
  onPress0() {
    this._toggleDrawer();
    this.props.navigator.push({
      title: "Dữ liệu khách hàng",
      screen: "test.Database",
      animated: false
    });
  }
  onPress1() {
    this._toggleDrawer();
    this.props.navigator.push({
      title: "Lịch sử",
      screen: "test.History",
      animated: false
    });
  }
  onPress2() {
    this._toggleDrawer();
    this.props.navigator.push({
      title: "Khách của tôi",
      screen: "test.MyCustomer",
      animated: false
    });
  }
  onPress3() {
    this._toggleDrawer();
    this.props.navigator.push({
      title: "Tiến độ",
      screen: "test.Target",
      animated: false
    });
  }
  onPress4() {
    this._toggleDrawer();
    this.props.navigator.push({
      title: "Checklist",
      screen: "test.Checklist",
      animated: false
    });
  }
  onPress5() {
    this._toggleDrawer();
    this.props.navigator.push({
      title: "Tạo động lực",
      screen: "test.Motivation",
      animated: false
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
    backgroundColor: '#336600',
    width: 300
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    fontWeight: '500'
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: 'white',
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
    borderColor:'white',
    borderRadius:30,
    alignSelf:'center',
    elevation:1,
  }
});
