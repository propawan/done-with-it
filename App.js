import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return (
    <ViewImageScreen></ViewImageScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
  first: {
    backgroundColor: "red",
    width: "100%",
    height: 50
  },
  second: {
    backgroundColor: "green",
    width: "100%",
    height: 50
  },
  image: {
    flex: 1,
    alignSelf: 'center'
  }
});
