import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import DeckLanding from './components/DeckLanding'
import ActionButton from 'react-native-action-button';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckLanding />
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => { alert("hi") }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
