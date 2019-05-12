import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { white, lightGray } from '../utils/colors'

class AddNewDeck extends React.Component {
    state = {
        text: ""
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>What is the title of your new deck?</Text>
                <TextInput style={styles.deckTitleInput} underlineColorAndroid={'transparent'} editable={true} maxLength={100} placeholder="Deck Title"/>
            </View >
        );
    }
}

const width = '80%';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        textAlign: 'center',
        color: lightGray,
        fontWeight: 'bold',
        fontSize: 20,
    },
    deckTitleInput: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 1,
        borderColor: lightGray,
        borderRadius: 4,
        width
      }
});

export default (AddNewDeck)