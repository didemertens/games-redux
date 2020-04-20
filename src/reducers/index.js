import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import genresReducer from './genresReducer'

export default combineReducers({
  games: gamesReducer,
  genres: genresReducer
})