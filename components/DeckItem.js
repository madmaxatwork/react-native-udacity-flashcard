import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { white, appbar } from '../utils/colors'

class DeckItem extends Component {
    render() {
        const { title, questions, detailsView } = this.props;
        return (
            <View style={styles.container}>
                <Text style={[styles.deckTitle, (detailsView) ? { fontSize: 40, color: appbar } : '']}>{title}</Text>
                <Text style={[styles.cardCount, (detailsView) ? { fontSize: 26, color: appbar } : '']}>{questions.length} cards</Text>
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
