import { LOAD_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case LOAD_DECKS:
      break;
    case ADD_DECK:
      break;
    case DELETE_DECK:
      break;
    case ADD_CARD:
      break;
    default:
      return state
  }
}

export default decks
