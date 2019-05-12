import React, { Component } from 'react'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { loadDecks } from '../actions'
import DeckItem from './DeckItem'
import { white, orange } from '../utils/colors'


class DeckLanding extends Component {

    componentDidMount() {
        const { loadDecks } = this.props
        getDecks().then((decks) => loadDecks(decks))
    }

    extractor = (item) => item.title;

    onPressItem = (item) => {
        console.log("item clicked")
    };

    getItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item} onPress={() => this.onPressItem(item)}>
                <DeckItem id={item.title} title={item.title} questions={item.questions} />
            </TouchableOpacity>
        )
    }

    render() {
        const { decks } = this.props
        const listOfDecks = Object.values(decks)
        return (<FlatList style={styles.container} data={listOfDecks} extraData={this.state} keyExtractor={this.extractor} renderItem={this.getItem} />)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 15
    },
    item: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 160,
        margin: 8,
        borderRadius: 6,
        backgroundColor: orange,
        shadowColor: 'rgba(0,0,0,0.20)'
    }
});

function mapStateToProps(decks) {
    return { decks }
}
export default connect(mapStateToProps, { loadDecks })(DeckLanding)