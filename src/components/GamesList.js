import React from 'react'
import { connect } from 'react-redux'
import { getGames } from '../actions'

class GamesList extends React.Component {
  componentDidMount() {
    this.props.getGames()
  }

  render () {
    console.log(this.props.games)
    return (
      <div>
        Games List
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}

export default connect(
  mapStateToProps, 
  { getGames }
  )(GamesList)