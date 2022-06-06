/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {LockScreen} from './src/lock-screen';

AppRegistry.registerComponent(appName, () => LockScreen);
