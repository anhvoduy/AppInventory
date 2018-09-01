import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './Styles';
import authService from './services/authService';
import Login from './component/login';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}
