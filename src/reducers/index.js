import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import genresReducer from './genresReducer'
import gameReducer from './gameReducer'
import authReducer from './authReducer'
import saveGameReducer from './saveGameReducer'

export default combineReducers({
  game: gameReducer,
  games: gamesReducer,
  genres: genresReducer,
  auth: authReducer,
  savedGames: saveGameReducer
})