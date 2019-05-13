import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { appbar, blue } from '../utils/colors'

class QuizCard extends Component {

  state = {
    flipToShow: 'Answer',
    titleText: ""
  }

  componentWillReceiveProps(nextProps) {
    const { card } = this.props
    if (card.question !== nextProps.card.question) {
      this.reset(nextProps.card)
    }
  }

  componentWillMount() {
    const { card } = this.props
    this.reset(card)
  }

  reset(card) {
    this.setState({ flipToShow: 'Answer', titleText: card.question })
  }

  flipCard = (card) => {
    if (this.value == 1) {
      this.value = 0
      this.setState({ flipToShow: 'Answer', titleText: card.question })
    } else {
      this.value = 1
      this.setState({ flipToShow: 'Question', titleText: card.answer })
    }
  }

  render() {
    const { card } = this.props;
    const { flipToShow, titleText } = this.state

    return (
      <View style={[styles.container]}>
        <Text style={styles.question}> {titleText} </Text>
        <TouchableOpacity onPress={() => this.flipCard(card)}>
          <Text style={{ color: blue }}>{flipToShow}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default QuizCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  question: {
    color: appbar,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  content: {
    color: appbar,
    fontSize: 44,
    textAlign: 'center'
  }
})
