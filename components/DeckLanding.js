import React, { Component } from 'react'
import { View, Slider, StyleSheet, Text } from 'react-native'
import { getSeedData } from '../utils/api'
import { AppLoading } from 'expo'


class DeckLanding extends Component {
    state = {
        ready: false,
        fabIsVisible: true
    }

    render() {
        const seedDecks = getSeedData();

        return (
            <View>
                {
                    Object.keys(seedDecks).map((seedDeck) => {
                        const { title, questions } = seedDecks[seedDeck];
                        return (
                            <View key={seedDeck} >
                                <Text>{title}</Text>
                            </View>
                        )
                    })

                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default DeckLanding;