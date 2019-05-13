import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import { white, lightGray, appbar } from '../utils/colors'
import { addCardToDeck } from '../utils/api'
import { addCard } from '../actions/index'

class AddCard extends Component {

  state = {
    question: "",
    answer: ""
  }

  saveQuestion = () => {
    const { question, answer } = this.state
    const { deck } = this.props
    if (question && answer) {
      addCardToDeck(deck.title, { question, answer })
      this.props.dispatch(addCard(deck.title, { question, answer }));
      ToastAndroid.show('Question added successfully', ToastAndroid.SHORT);
      this.setState({ question: '', answer: '' })
      this.props.navigation.goBack()
    }
    else {
      if(!question) {
        ToastAndroid.show('Cannot add a question without a Question', ToastAndroid.SHORT);
      }
      else {
        ToastAndroid.show('Cannot add a question without an Answer', ToastAndroid.SHORT);
      }
    }
  }

  render() {
    const { deck } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <TextInput style={styles.question} underlineColorAndroid={'transparent'} editable={true} maxLength={100}
          placeholder="Question" onChangeText={(question) => this.setState({ question })} />
        <TextInput style={styles.answer} underlineColorAndroid={'transparent'} editable={true} maxLength={100}
          multiline={true} placeholder="Answer" onChangeText={(answer) => this.setState({ answer })} />
        <TouchableOpacity style={styles.button} onPress={this.saveQuestion}>
          <Text style={styles.buttonText}>Submit Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const width = '80%';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: lightGray,
    fontWeight: 'bold',
    fontSize: 20,
  },
  question: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: lightGray,
    borderRadius: 4,
    width
  },
  answer: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: lightGray,
    height: 70,
    width
  }, buttonText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  }, button: {
    padding: 10,
    height: 45,
    margin: 10,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    backgroundColor: appbar
  }
})

function mapStateToProps(decks, { navigation }) {
  const { deckTitle } = navigation.state.params
  return {
    deck: decks[deckTitle] || {}
  }
}

function mapDispatchToProps(dispatch) { return { dispatch }; }

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)
