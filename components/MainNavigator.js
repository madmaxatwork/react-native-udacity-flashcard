import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Entypo from 'react-native-vector-icons/Entypo';
import DeckLanding from './DeckLanding'
import AddNewDeck from './AddNewDeck'
import { appbar, white, black } from '../utils/colors'
import DeckView from './DeckView'
import AddCard from './AddCard'
import Quiz from './Quiz'

const BottomTabs = createBottomTabNavigator({
  DeckLanding: {
    screen: DeckLanding,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Entypo name='list' size={30} color={tintColor} />
    }
  },
  AddNewDeck: {
    screen: AddNewDeck,
    navigationOptions: {
      tabBarLabel: 'Add New Deck',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={30} color={tintColor} />
    }
  }
}, {
    navigationOptions: {
      title: 'FlashCards',
      headerStyle: {
        backgroundColor: appbar,
      },
      headerTintColor: white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    tabBarOptions: {
      style: {
        height: 56,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })


export const MainNavigator = createStackNavigator({
  Home: {
    screen: BottomTabs
  }, DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: 'Deck Info',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: appbar
      },
      headerBackTitle: null,
    }
  }, AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: appbar
      },
      headerBackTitle: null,
    }
  }, Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: appbar
      },
      headerBackTitle: null,
    }
  }
})