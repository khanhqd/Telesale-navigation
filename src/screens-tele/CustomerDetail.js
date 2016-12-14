import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  ScrollView,
  Dimensions,
  TextInput
  } from 'react-native';
import {Navigation} from 'react-native-navigation';
import InfoBox from './_Subtance/InfoBox';
var {height, width} = Dimensions.get('window');
let index = 0;
export default class CustomerDetail extends Component {
  // getInitialState(){
  //       return {rows: []}
  // };
  //
  // _addRow(){
  //   this.state.rows.push(index++)
  //   this.setState({ rows: this.state.rows })
  // };

  // _addRow(){
  //   this.setState.rows = (
  //     this.state.rows.push(
  //       <View style={styles.titleContainer}>
  //         <Text style={styles.textTitle}>Nội dung tương tác:</Text>
  //       </View>
  //     )
  //   )
  // }
  static navigatorButtons = {
    rightButtons:[
      {
        icon: require('../../img/back-icon.png'),
        id: 'back'
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
    this.state={
      content :'Trong này ghi nội dung tương tác..'

    }
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
    if (event.id === 'back') {
      Navigation.dismissModal({
        animationType: 'slide-down'
      });
    }
    if (event.id === 'add') {
      Alert.alert('NavBar', 'Add button pressed');
    }
  }
  addContent(){
    Alert.alert('Add');
  }
  render() {
    // let CheckIndex = i => {
    //     if((i % 2) == 0) {
    //     return styles.gray
    //   }
    // }
    // let rows = this.state.rows.map((r, i) => {
    //     return (<View key={ i } style={[styles.row, CheckIndex(i)]}>
    //                 <Text >Row { r }, Index { i }</Text>
    //              </View>)
    // })
    return (
      <ScrollView style={styles.container}>
        <View style={{flexDirection:'row', width:width}}>
          <View style={{flex:1}}>
              <InfoBox title='Mã KH:' content='M12345' />
              <InfoBox title='Họ tên:' content='Thanh niên chuyên cần' />
              <InfoBox title='Điện thoại' content='0123.456.789' />
          </View>
          <View style={{flex:1}}>
              <InfoBox title='Địa chỉ:' content='612 La Thành - Hà Nội' />
              <InfoBox title='Email:' content='khanhqd.neu@gmail' />
              <InfoBox title='Ngày sinh:' content='11.22.1989' />
          </View>
        </View>
        <InfoBox title='Nhân viên phụ trách:' content='Quách Khánh' />
        <InfoBox title='Nội dung lần 1: ("Time")' content='Khách quan tâm đến sản phẩm...' />
        <InfoBox title='Kế hoạch: ' content='Khách quan tâm đến sản phẩm...' />
        <TouchableOpacity style={styles.button2} >
            <Text style={{fontWeight:'bold', color:'white'}}> add
            </Text>
        </TouchableOpacity>
        <View style={styles.box}>
          <View style={styles.titleContainer}>
            <Text style={styles.textTitle}>Nội dung tương tác:</Text>
          </View>
          <TextInput
          style={styles.textBox}
          onChangeText={(content) => this.setState({content})}
          value={this.state.content}/>
        </View>


      </ScrollView>

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
  },
  container:{
    backgroundColor: '#e9eaed',
  },
  titleContainer:{
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    borderBottomColor: '#d6d7da',
    backgroundColor: '#f6f7f8',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  textTitle:{
    color:'black',
    paddingLeft:20,
    fontSize:15,
    fontWeight:'bold'
  },
  textBox:{
    fontSize:15,
    padding:10,
    paddingLeft:30
  },
  box:{
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#ffffff',
    margin: 5,
    marginVertical: 1,
    overflow: 'hidden',
  },
  button2:{
    height:40,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#336600',
    borderRadius:5
  },
  gray: {
    backgroundColor: '#efefef'
  },
  row: {
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ededed',
    borderBottomWidth: 1
  },
});
