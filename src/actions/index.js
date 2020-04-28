import rawg from '../apis/rawg'
import { SIGN_IN, SIGN_OUT, SAVE_GAME } from '../actions/types'

export const getGames = () => async dispatch => {
    const response = await rawg.get('/games')
    dispatch({ type: 'GET_GAMES', payload: response.data })
}

export const getGame = (id) => async dispatch => {
    const response = await rawg.get(`/games/${id}`)
    dispatch({ type: 'GET_GAME', payload: response.data })
}

export const getGenres = () => async dispatch => {
    const response = await rawg.get('/genres')
    dispatch({ type: 'GET_GENRES', payload: response.data })
}

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const saveGame = (id) => {
    return {
        type: SAVE_GAME,
        payload: id
    }
}