export default (state = [], action) => {
  switch(action.type) {
    case 'GET_GAME':
      console.log('hello')
      return action.payload
    default:
      return state
  }
}