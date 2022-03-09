/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
//import ChangePass from './Components/changepassword'
import NavigationBottom from "./Navigation/BottomNavigation"
import Wallet from "./Components/wallet";
import SettingFood from "./Components/settingfood"
import Profile from "./Components/profile"

AppRegistry.registerComponent(appName, () => NavigationBottom);
