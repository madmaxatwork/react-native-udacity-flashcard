import React, { Component } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { MainNavigator } from './components/MainNavigator'

const Container = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <Container />
        </View>
      </Provider>
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
