import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { white } from '../utils/colors'

class DeckItem extends Component {
    render() {
        const { title, questions, bigFonts } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.deckTitle}>{title}</Text>
                <Text style={styles.cardCount}>{questions.length} cards</Text>
            </View>
        )
    }
}

export default DeckItem;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    deckTitle: {
        color: white,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    cardCount: {
        color: white,
        fontSize: 12,
        textAlign: 'center',
        fontStyle: 'italic'
    }
})
