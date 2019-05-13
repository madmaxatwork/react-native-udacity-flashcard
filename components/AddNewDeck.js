import React from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import { white, lightGray, appbar } from '../utils/colors'
import { saveDeck } from '../utils/api'
import { addDeck } from '../actions/index'
import { connect } from 'react-redux'

class AddNewDeck extends React.Component {
    state = {
        text: ""
    }

    saveDeckTitle = () => {
        const { text } = this.state;
        if (text.length) {
            saveDeck(text);
            this.props.dispatch(addDeck(text));
            ToastAndroid.show('Deck added successfully', ToastAndroid.SHORT);
            this.setState({ text: "" })
            this.props.navigation.navigate('DeckLanding')
        }
        else {
            ToastAndroid.show('Cannot add Deck without a title', ToastAndroid.SHORT);
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>What is the title of your new deck?</Text>
                <TextInput style={styles.deckTitleInput} underlineColorAndroid={'transparent'} editable={true} maxLength={100} placeholder="Deck Title"
                    onChangeText={(text) => this.setState({ text: text })} value={this.state.text} />
                <TouchableOpacity style={styles.button} onPress={this.saveDeckTitle}>
                    <Text style={styles.buttonText}>Submit Deck</Text>
                </TouchableOpacity>
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
});

function mapStateToProps(decks, { navigation }) {
    return {
        decks
    }
}

function mapDispatchToProps(dispatch) { return { dispatch }; }

export default connect(mapStateToProps, mapDispatchToProps)(AddNewDeck)