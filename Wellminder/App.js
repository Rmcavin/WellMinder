import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Button, Image } from 'react-native';
import Nav from './components/navbar';
import Quiz from './components/quiz';
import Dashboard from './components/dashboard';
import Preferences from './components/preferences';
import Landing from './components/landingpage';

class App extends Component {
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
