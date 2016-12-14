import {Navigation} from 'react-native-navigation';

import SideMenu from './SideMenu';
import Home from './Home';
import GioiThieu from './GioiThieu';
import LienHe from './LienHe';
import Menu from './Menu';
import KhuyenMai from './KhuyenMai';
import Login from './Login';
import GioHang from './GioHang';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('test.SideMenu', () => SideMenu);
  Navigation.registerComponent('test.Home', () => Home);
  Navigation.registerComponent('test.GioiThieu', () => GioiThieu);
  Navigation.registerComponent('test.LienHe', () => LienHe);
  Navigation.registerComponent('test.Menu', () => Menu);
  Navigation.registerComponent('test.KhuyenMai', () => KhuyenMai);
  Navigation.registerComponent('test.Login', () => Login);
  Navigation.registerComponent('test.GioHang', () => GioHang);
}
