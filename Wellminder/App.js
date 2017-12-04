import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Button, Image } from 'react-native';
import firebase from 'firebase';
import Nav from './components/navbar';
import Quiz from './components/quiz';
import Dashboard from './components/dashboard';
import Preferences from './components/preferences';
import Landing from './components/landingpage';

class App extends Component {
  componentWillMount() {
        firebase.initializeApp({
          apiKey: "AIzaSyBc5KaDNcBS3wWN1kTVtWTGgi2MVjGgZko",
          authDomain: "wellminder-7beb4.firebaseapp.com",
          databaseURL: "https://wellminder-7beb4.firebaseio.com",
          projectId: "wellminder-7beb4",
          storageBucket: "wellminder-7beb4.appspot.com",
          messagingSenderId: "707860039026"
        });
    }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Nav />
        <Quiz />
        <Dashboard />
        <Preferences />
        <Landing />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
