import {
  Platform
} from 'react-native';
import { Navigation } from 'react-native-navigation';

// screen related book keeping
import { registerScreens } from './screens-tele';
registerScreens();

// const createTabs = () => {
//   let tabs = [
//     {
//       label: 'One',
//       screen: 'example.FirstTabScreen',
//       icon: require('../img/one.png'),
//       selectedIcon: require('../img/one_selected.png'),
//       title: 'Screen One'
//     },
//     {
//       label: 'Two',
//       screen: 'example.SecondTabScreen',
//       icon: require('../img/two.png'),
//       selectedIcon: require('../img/two_selected.png'),
//       title: 'Screen Two',
//       navigatorStyle: {
//         tabBarBackgroundColor: '#4dbce9',
//       }
//     }
//   ];
//   if (Platform.OS === 'android') {
//     tabs.push({
//       label: 'Collapsing',
//       screen: 'example.CollapsingTopBarScreen',
//       icon: require('../img/one.png'),
//       title: 'Collapsing',
//     });
//   }
//   return tabs;
// };
// // // this will start our app
// // Navigation.startTabBasedApp({
// //   tabs: createTabs(),
// //   appStyle: {
// //     tabBarBackgroundColor: '#0f2362',
// //     tabBarButtonColor: '#ffffff',
// //     tabBarSelectedButtonColor: '#63d7cc'
// //   },
// //   drawer: {
// //     left: {
// //       screen: 'example.SideMenu'
// //     }
// //   }
// // });
Navigation.startSingleScreenApp({
  screen: {
    //  screen: 'example.Login'
    screen: 'test.Home',
    title:'SuperSaler'
  },
   drawer: {
     left: {
      screen: 'test.SideMenu'
    },

  }
});
