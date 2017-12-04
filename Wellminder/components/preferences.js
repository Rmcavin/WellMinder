import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Preferences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      physical: true,
      emotional: true,
      social: true,
      occupational: true,
      spiritual: true,
      intellectual: true
     }
  }

  render() {
    return (
      <View>
        <View>
          <Text>User Preferences</Text>
        </View>
        <View>
          <CheckBox
            title='Physical'
            checked={this.state.physical}
          />
          <CheckBox
            title='Emotional'
            checked={this.state.emotional}
          />
          <CheckBox
            title='Social'
            checked={this.state.social}
          />
          <CheckBox
            title='Occupational'
            checked={this.state.occupational}
          />
          <CheckBox
            title='Spiritual'
            checked={this.state.spiritual}
          />
          <CheckBox
            title='Intellectual'
            checked={this.state.intellectual}
          />
        </View>
      </View>
    )
  }

}
