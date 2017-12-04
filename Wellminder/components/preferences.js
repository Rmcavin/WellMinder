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

  checkPhysical = () => {
    this.setState({ physical: !this.state.physical })
    console.log(this.state.physical);
  }
  checkEmotional = () => {
    this.setState({ emotional: !this.state.emotional })
    console.log(this.state.emotional);
  }
  checkSocial = () => {
    this.setState({ social: !this.state.social })
    console.log(this.state.social);
  }
  checkOccupational = () => {
    this.setState({ occupational: !this.state.occupational })
    console.log(this.state.occupational);
  }
  checkSpiritual = () => {
    this.setState({ spiritual: !this.state.spiritual })
    console.log(this.state.spiritual);
  }
  checkIntellectual = () => {
    this.setState({ intellectual: !this.state.intellectual })
    console.log(this.state.intellectual);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ borderBottomWidth: 0.5, borderColor: '#9e9e9e' }}>
          <Text style={{ textAlign: 'center' }}>User Preferences</Text>
        </View>
        <View>
          <Text style={{ textAlign: 'center' }}>Which wellness aspects would you like to track?</Text>
        </View>
        <View>
          <CheckBox
            title='Physical'
            checked={this.state.physical}
            onPress={this.checkPhysical}
          />
          <CheckBox
            title='Emotional'
            checked={this.state.emotional}
            onPress={this.checkEmotional}
          />
          <CheckBox
            title='Social'
            checked={this.state.social}
            onPress={this.checkSocial}
          />
          <CheckBox
            title='Occupational'
            checked={this.state.occupational}
            onPress={this.checkOccupational}
          />
          <CheckBox
            title='Spiritual'
            checked={this.state.spiritual}
            onPress={this.checkSpiritual}
          />
          <CheckBox
            title='Intellectual'
            checked={this.state.intellectual}
            onPress={this.checkIntellectual}
          />
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#9e9e9e',
    margin: 2,
    padding: 5
  },
});
