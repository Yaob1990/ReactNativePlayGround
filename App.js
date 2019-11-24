import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Button,
  StatusBar,
  Text,
} from 'react-native';

import Navigator from './src/Navigator';

export default class App extends PureComponent {
  render() {
    return <Navigator />;
  }
}
