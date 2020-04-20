import rawg from '../apis/rawg'

export const getGames = () => async dispatch => {
    const response = await rawg.get('/games')
    dispatch({ type: "GET_GAMES", payload: response.data })
}

export const getGenres = () => async dispatch => {
    const response = await rawg.get('/genres')
    dispatch({ type: "GET_GENRES", payload: response.data })
}