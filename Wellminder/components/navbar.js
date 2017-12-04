import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { showMenu: false }
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
    console.log(this.state.showMenu);
    if(this.state.showMenu) {
      return (
        <View>
        <Text>Booyah</Text>
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View>
        <View style={{ paddingTop: 24 }}>
          <Header
            leftComponent={ <Text style={ styles.headerText }>Wellminder</Text> }
            rightComponent={ <Icon
                                name='menu'
                                color= '#ffffff'
                                onPress={() => { this.toggleMenu() }} /> }
            outerContainerStyles={{ backgroundColor: '#00bcd4' }}
            />
          </View>
          <View style={ styles.menuContainer }>
            <Text>Dashboard</Text>
            <Text>Daily Check-In</Text>
            <Text>Preferences</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  headerText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  menuContainer: {
    position: 'absolute',
    right: 0,
    top: 94,
    backgroundColor: '#ffffff',
    zIndex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#9e9e9e',
    margin: 2,
    padding: 5
  },
});
