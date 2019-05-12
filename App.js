import React, { Component } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { purple } from './utils/colors'
import { BottomTabs } from './components/MainNavigator'
import { Constants } from 'expo'

const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

const Container = createAppContainer(BottomTabs);


export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <AppStatusBar backgroundColor={purple} barStyle='light-content' />
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
