import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native';

import {API, graphqlOperation} from 'aws-amplify'

 class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <ChatBot
    botName={botName}
    welcomeMessage={welcomeMessage}
    onComplete={this.handleComplete}
    clearOnComplete={false}
    styles={StyleSheet.create({
        itemMe: {
            color: 'red'
        }
    })}
/>
      </View>
    );
  }
}

export default withAuthenticator(App,{includeGreetings:true})

const styles = StyleSheet.create({
 /* container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },*/
});
