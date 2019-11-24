import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';
import Bar from './pages/Bar';
// import Login from './pages/Login'
// import Register from './pages/Register'

export default createAppContainer(
  createStackNavigator({
    Home: Home,
    Bar: Bar,
  }),
);
