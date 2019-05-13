import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { white, appbar } from '../utils/colors'
import DeckItem from './DeckItem'

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params
    return { title: deckTitle }
  }

  render() {
    const { deck, navigateToAddCard, navigateToStartQuiz } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <DeckItem id={deck.title} title={deck.title} questions={deck.questions} detailsView={true} />
        </View>
        <TouchableOpacity style={[styles.buttonStyle, styles.addCard]} onPress={() => navigateToAddCard(deck.title)}>
          <Text style={[styles.buttonTextStyle, styles.addCardText]}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonStyle, styles.startQuiz]} onPress={() => navigateToStartQuiz(deck.title)}>
          <Text style={[styles.buttonTextStyle, styles.startQuizText]}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
    justifyContent: 'center',
  },
  buttonStyle: {
    padding: 10,
    height: 45,
    margin: 10,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2
  }, item: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
    margin: 8,
    borderRadius: 6,
    shadowColor: 'rgba(0,0,0,0.20)'
  },
  addCard: {
    backgroundColor: white,
    borderWidth: 1,
    borderColor: appbar
  },
  addCardText: {
    color: appbar
  },
  startQuiz: {
    backgroundColor: appbar
  },
  startQuizText: {
    color: white
  },
  buttonTextStyle: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  }
})

function mapStateToProps(decks, { navigation }) {
  const { deckTitle } = navigation.state.params
  return {
    deck: decks[deckTitle] || {},
    decks
  }
}


function mapDispatchToProps(dispatch, { navigation }) {
  const { deckTitle } = navigation.state.params

  return {
    goBack: () => navigation.goBack(),
    navigateToAddCard: (deckTitle) => navigation.navigate('AddCard', { deckTitle: deckTitle }),
    navigateToStartQuiz: (deckTitle) => navigation.navigate('Quiz', { deckTitle: deckTitle })
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(DeckView)