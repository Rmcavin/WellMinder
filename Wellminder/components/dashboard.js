import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';

export default class Dashboard extends Component {
  render() {
    let chart = {
      uri: 'https://i.stack.imgur.com/7Tk8n.png'
    };
    return (
      <View style={quizStyles.container}>
        <Text style={{fontSize: 40, textAlign: 'center'}}>Wellness Dashboard</Text>
        <Image source={chart} style={{width: 320, height: 200,}}/>
      </View>
    )
  }
}

const quizStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
    width: 50,
    backgroundColor: '#ddd',
  },
});
