import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50, textAlign: 'center'}}>Wellminder</Text>
      </View>
    );
  }
}

class Dashboard extends Component {
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

class Quiz extends Component {
  render() {
    return (
      <View style={quizStyles.container}>
        <Text style={{fontSize: 40, textAlign: 'center'}}>Daily Quiz</Text>
        <View>
          <Text style={{fontSize: 14, textAlign:'left'}}>How much sleep did you get last night? (hours)</Text>
        </View>
        <View style={quizStyles.button}>
          <Button title="< 5"/>
          <Button title="5-6"/>
          <Button title="6-7"/>
          <Button title="7-8"/>
          <Button title="> 8"/>
        </View>
        <View>
          <Text style={{fontSize: 14, textAlign:'left'}}>How well did you eat today?</Text>
        </View>
        <View style={quizStyles.button}>
          <Button title="1"/>
          <Button title="2"/>
          <Button title="3"/>
          <Button title="4"/>
          <Button title="5"/>
        </View>
        <View>
          <Text style={{fontSize: 14, textAlign:'left'}}>How active were you today?</Text>
        </View>
        <View style={quizStyles.button}>
          <Button title="1"/>
          <Button title="2"/>
          <Button title="3"/>
          <Button title="4"/>
          <Button title="5"/>
        </View>
        <View>
          <Text style={{fontSize: 14, textAlign:'left'}}>How would you rate your self esteem today?</Text>
        </View>
        <View style={quizStyles.button}>
          <Button title="1"/>
          <Button title="2"/>
          <Button title="3"/>
          <Button title="4"/>
          <Button title="5"/>
        </View>
        <View>
          <Text style={{fontSize: 14, textAlign:'left'}}>How was your overall mood today?</Text>
        </View>
        <View style={quizStyles.button}>
          <Button title="1"/>
          <Button title="2"/>
          <Button title="3"/>
          <Button title="4"/>
          <Button title="5"/>
        </View>
        <View>
          <Text style={{fontSize: 14, textAlign:'left'}}>How did you feel today socially?</Text>
        </View>
        <View style={quizStyles.button}>
          <Button title="1"/>
          <Button title="2"/>
          <Button title="3"/>
          <Button title="4"/>
          <Button title="5"/>
        </View>
        <View>
          <Text style={{fontSize: 14, textAlign:'left'}}>How was your day at work today?</Text>
        </View>
        <View style={quizStyles.button}>
          <Button title="1"/>
          <Button title="2"/>
          <Button title="3"/>
          <Button title="4"/>
          <Button title="5"/>
          <Button title='N/A'/>
        </View>
        <View>
          <Text style={{fontSize: 14, textAlign:'left'}}>Did you feel spiritually known today?</Text>
        </View>
        <View style={quizStyles.button}>
          <Button title="1"/>
          <Button title="2"/>
          <Button title="3"/>
          <Button title="4"/>
          <Button title="5"/>
        </View>
        <View>
          <Text style={{fontSize: 14, textAlign:'left'}}>Did you challenge yourself intellectually today?</Text>
        </View>
        <View style={quizStyles.button}>
          <Button title="1"/>
          <Button title="2"/>
          <Button title="3"/>
          <Button title="4"/>
          <Button title="5"/>
        </View>
      </View>
    )
  }
}


const quizStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bcd4',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00bcd4",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Quiz;
