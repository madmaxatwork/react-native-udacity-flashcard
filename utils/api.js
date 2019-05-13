import { AsyncStorage } from 'react-native'
const STORAGE_KEY = 'udacity.decks'

const seedData = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

export function saveDeck(deckTitle) {
    getDecks().then((decks) => {
      if (!decks[deckTitle]) {
        decks[deckTitle] = {
          title: deckTitle,
          questions: []
        }
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks))
      }
    })
  }


export const getSeedData = () => {
    return seedData;
}

function getResult(results) {
    return (results) ? JSON.parse(results) : getSeedData()
}

export function getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY).then(getResult)
}
