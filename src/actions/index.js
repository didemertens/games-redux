import rawg from '../apis/rawg'

export const getGames = () => async dispatch => {
    const response = await rawg.get('')
    dispatch({ type: "GET_GAMES", payload: response })
}