import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Entypo from 'react-native-vector-icons/Entypo';
import DeckLanding from './DeckLanding'
import AddNewDeck from './AddNewDeck'


export const BottomTabs = createBottomTabNavigator({
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