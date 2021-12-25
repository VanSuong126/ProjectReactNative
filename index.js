/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import ScreenLogin from './Components/login'
AppRegistry.registerComponent(appName, () => ScreenLogin);
