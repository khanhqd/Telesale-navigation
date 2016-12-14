import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
  ListView,
  TextInput
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import DatePicker from 'react-native-datepicker';
var moment = require('moment');
var {height, width} = Dimensions.get('window');
var data = [
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' }
];

export default class MyCustomer extends Component {
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
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
          dataSource: ds.cloneWithRows(data),
          searchText:''
        };

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
  _renderRow(data) {
      return (
        <TouchableOpacity
          onPress={this._goToDetail.bind()}
          style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignItems: 'center', borderBottomWidth: 1, borderColor: '#CFD8DC'}}>
          <View style={[styles.viewText,{flex: 2}]}>
            <Text style={styles.text}>{data.dateOfEvent}</Text>
          </View>
          <View style={[styles.viewText,{flex: 3}]}>
            <Text style={styles.text}>{data.customerName}</Text>
          </View>
          <View style={[styles.viewText,{flex: 3}]}>
            <Text style={styles.text}>{data.phonenumber}</Text>
          </View>
          <View style={[styles.viewText,{flex: 2}]}>
            <Text style={styles.text}>{data.status}</Text>
          </View>
          </TouchableOpacity>
      );
    }
  _goToDetail() {
    Navigation.showModal({
      screen: "test.CustomerDetail",
      title: "Chi tiết khách hàng",
      animationType: 'slide-up'
    });
  }
  _search(){
    Alert.alert('pressed')
  }
  render() {
    return (
      <View style={{flex: 1,justifyContent:'flex-start', backgroundColor: '#FAFAFA'}}>
        <View style={{backgroundColor: '#FAFAFA',width:width, marginTop: 5, alignSelf: 'center', justifyContent:'flex-start',borderRadius: 6}}>
            <View style={{flexDirection:'row', width:width-50, borderRadius:3, borderColor:'grey', alignSelf:'center'}}>
              <View style={{flex:5, backgroundColor:'rgb(255, 255, 255)', borderWidth:1,borderColor:'#336600', borderRadius:5}}>
                <TextInput
                style={styles.textBox}
                onChangeText={(searchText) => this.setState({searchText})}
                placeholder="Nhập tên hoặc sdt..."
                value={this.state.searchText}/>
              </View>
              <TouchableOpacity
                onPress={this._search.bind(this)}
                style={styles.button2}>
                <Text style={{color:'white', fontWeight:'bold'}}>Tìm
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 10, alignSelf: 'center', width:width-20}}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderColor: '#CFD8DC'}}>
                        <View style={[styles.viewText,{flex: 2}]}>
                          <Text style={[styles.text,{fontWeight:'bold'}]}>Ngày</Text>
                        </View>
                        <View style={[styles.viewText,{flex: 3}]}>
                          <Text style={[styles.text,{fontWeight:'bold'}]}>Tên</Text>
                        </View>
                        <View style={[styles.viewText,{flex: 3}]}>
                          <Text style={[styles.text,{fontWeight:'bold'}]}>SĐT</Text>
                        </View>
                        <View style={[styles.viewText,{flex: 2}]}>
                          <Text style={[styles.text,{fontWeight:'bold'}]}>Tình trạng</Text>
                        </View>
                    </View>
                   <ListView
                     dataSource={this.state.dataSource}
                     renderRow={(data) => this._renderRow(data)}
                   />
            </View>
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
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue'
  },
  viewText: {
    height:40,
    borderWidth:0.5,
    borderColor:'grey',
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    padding: 3,
    fontSize: 14,
  },
  textBox:{
    fontSize:14,
    padding:5
  },
  button2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#336600',
    borderRadius:5
  }
});
