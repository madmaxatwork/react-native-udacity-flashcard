import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AddCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Rendering Start Quiz</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default (AddCard)