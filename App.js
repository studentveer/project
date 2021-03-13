import React, { Component } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer ,createSwitchNavigator } from 'react-navigation'; 

import WelcomeScreen from './screens/WelcomeScreen';
import Loginscreen from './screens/Loginscreen';

export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
  }
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Loginscreen:{screen: Loginscreen}
  })

  const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
