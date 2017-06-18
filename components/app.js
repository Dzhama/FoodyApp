import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';

import { 
  Container, 
  Content, 
  Form, 
  Item, 
  Input,Label} from 'native-base';


import Login from './login/login';
import Register from './login/register';
import PasswordReset from './login/passwordreset';


export default class foody extends Component {
  render() {
    return (
      <NavigationExperimental.Navigator initialRoute = {{ id: 'Login'}}
      renderScene = {this.navigatorRenderScene} />
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'Login':
        return ( <Login navigator = {navigator} />)
      case 'Register':
        return ( <Register navigator = {navigator} />)
      case 'PasswordReset':
        return ( <PasswordReset navigator = {navigator} />)
    }
  }
}

const styles = StyleSheet.create({

});