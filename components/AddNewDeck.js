import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { white, lightGray } from '../utils/colors'

class AddNewDeck extends React.Component {
    state = {
        text: ""
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>What is the title of your new deck?</Text>
            </View >
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

export default (AddNewDeck)