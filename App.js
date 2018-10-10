
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from "./App/screens/Login/Login.js";

const AppNavigator = createStackNavigator({
                                            Login: { screen: Login },
                                          });

export default class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
