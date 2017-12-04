import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TextInput } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = { username: 'username', password: 'password'}
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
      <TextInput
      style={{ height: 40 }}
      onChangeText={(username) => this.setState({username})}
      value={this.state.username}
    />
      <TextInput
      style={{ height: 40 }}
      onChangeText={(password) => this.setState({password})}
      value={this.state.password}
    />
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Button
        buttonStyle={{ width: 100 }}
        backgroundColor='#00bcd4'
        title='Login' />
      <Button
        buttonStyle={{ width: 100 }}
        backgroundColor='#00bcd4'
        title='Sign Up' />
      </View>
      </View>
    )
  }
}
