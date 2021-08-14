/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
const TodoApp = () => <App/>;
import {name as appName} from './app.json';

AppRegistry.registerComponent('TodoApp', () => TodoApp);
