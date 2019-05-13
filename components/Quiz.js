import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { white, appbar } from '../utils/colors'
import QuizCard from './QuizCard'
import {setLocalNotification, clearLocalNotification} from '../utils/notificationHelper'

class Quiz extends Component {
    state = {
        correctCount: 0,
        questionIndex: 0,
    }

    componentDidMount() {
        clearLocalNotification().then(setLocalNotification)
      }

    restartQuiz() {
        this.setState({ questionIndex: 0, correctCount: 0 })
    }

    correctAnswer() {
        this.setState((state) => {
            return {
                questionIndex: state['questionIndex'] + 1,
                correctCount: state['correctCount'] + 1
            }
        })
    }
    incorrectAnswer() {
        this.setState((state) => {
            return {
                ...state,
                questionIndex: state['questionIndex'] + 1
            }
        })
    }

    render() {
        const { questionIndex, correctCount } = this.state
        const { questions } = this.props

        if (questionIndex > 0 && questionIndex === questions.length) {
            return (
                <View style={styles.container}>
                    <View style={styles.scoreContainer}>
                        <Text style={styles.scoreLabel}>You Scored</Text>
                        <Text style={styles.score}>{(correctCount / questions.length) * 100}
                            %</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.buttonStyle, styles.goBackToDeckBtn]} onPress={() => this.props.navigation.goBack()}>
                            <Text style={[styles.buttonText, styles.goBackToDeckBtnText]}>Back to Deck</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttonStyle, styles.restartQuizBtn]} onPress={() => this.restartQuiz()}>
                            <Text style={[styles.buttonText, styles.restartQuizBtnText]}>Restart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        const currentCard = questions[questionIndex]
        return (
            <View style={styles.container}>
                <Text style={styles.cardCount}>{questionIndex + 1}/{questions.length}</Text>
                <View style={styles.questionCard}><QuizCard card={currentCard} /></View>
                <View>
                    <TouchableOpacity style={[styles.buttonStyle, styles.correctButton]} onPress={() => this.correctAnswer()}>
                        <Text style={[styles.buttonText, styles.correctButtonText]}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonStyle, styles.incorrectButton]} onPress={() => this.incorrectAnswer()}>
                        <Text style={[styles.buttonText]}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 15
    },
    scoreLabel: {
        fontSize: 36,
        color: appbar
    },
    score: {
        fontSize: 48,
        color: appbar
    },
    cardCount: {
        flex: 1,
        alignItems: 'flex-start'
    },
    questionCard: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        padding: 10,
        height: 45,
        margin: 10,
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2
    },
    correctButton: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: appbar
    },
    incorrectButton: {
        backgroundColor: appbar
    },
    goBackToDeckBtn: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: appbar
    },
    goBackToDeckBtnText: {
        color: appbar
    },
    correctButtonText: {
        color: appbar
    },
    restartQuizBtn: {
        backgroundColor: appbar
    },
    restartQuizBtnText: {
        color: white
    },
    buttonText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    scoreContainer: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function mapStateToProps(decks, { navigation }) {
    const { deckTitle } = navigation.state.params
    return {
        questions: decks[deckTitle].questions
    }
}

function mapDispatchToProps(dispatch) { return { dispatch }; }

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
