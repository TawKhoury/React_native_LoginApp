import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';

class Login extends React.Component {
  render() {
    return (
      <FBLogin />
    );
  }
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
