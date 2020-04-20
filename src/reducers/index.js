import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import genresReducer from './genresReducer'
import gameReducer from './gameReducer'

export default combineReducers({
  game: gameReducer,
  games: gamesReducer,
  genres: genresReducer
})