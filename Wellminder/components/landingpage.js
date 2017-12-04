import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TextInput } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import firebase from 'firebase';

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '', error: '' }
  }

  onLoginPress() {
    console.log('Login button pushed');
    const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '' });
          })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { this.setState({ error: '' });
                  })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.' });
                    });
            });
    }

    onSignupPress() {
      console.log('Sign Up button pushed');
      const { email, password } = this.state;
      console.log(email);
      console.log(password);
          firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                  console.log('booyah');
                  console.log(firebase.User);
              })
                .catch(() => {
                    this.setState({ error: 'Authentication failed.' });
                });
      }

  render() {
    return (
      <View style={{ padding: 10 }}>
      <TextInput
      placeholder='Email Address'
      style={{ height: 40 }}
      onChangeText={(email) => this.setState({email})}
      value={this.state.email}
    />
      <TextInput
      placeholder='Password'
      style={{ height: 40 }}
      secureTextEntry
      onChangeText={(password) => this.setState({password})}
      value={this.state.password}
    />
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Button
        buttonStyle={{ width: 100 }}
        backgroundColor='#00bcd4'
        title='Login'
        onPress={this.onLoginPress.bind(this)} />
      <Button
        buttonStyle={{ width: 100 }}
        backgroundColor='#00bcd4'
        title='Sign Up'
        onPress={this.onSignupPress.bind(this)}/>
      </View>
      </View>
    )
  }
}
