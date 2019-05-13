import React, { Component } from 'react'
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { MainNavigator } from './components/MainNavigator'
import { setLocalNotification } from './utils/notificationHelper'

const Container = createAppContainer(MainNavigator);

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }
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
