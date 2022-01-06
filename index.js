/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
//import ChangePass from './Components/changepassword'
import ScreenLogin from './Components/login';
import BookFood  from './Components/bookfood';
import RegistrationUser from './Components/registration'

AppRegistry.registerComponent(appName, () => BookFood);
