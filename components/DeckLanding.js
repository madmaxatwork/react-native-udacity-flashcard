import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { getSeedData } from '../utils/api'
import { white, lightGray } from '../utils/colors'


class DeckLanding extends Component {
    state = {
        ready: false,
        fabIsVisible: true
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>Deck Landing</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: lightGray,
        fontWeight: 'bold',
        fontSize: 20,
      },
});


export default DeckLanding;