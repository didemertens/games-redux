import React from 'react'
import { connect } from 'react-redux'
import { getGames } from '../actions'

class GamesList extends React.Component {
  componentDidMount() {
    this.props.getGames()
  }

  render () {
    return (
      <div>
        Games List
      </div>
    )
  }
}

export default connect(null, 
  { getGames }
  )(GamesList)