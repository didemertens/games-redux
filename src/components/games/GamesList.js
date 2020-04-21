import React from 'react'
import { connect } from 'react-redux'
import { getGames, getGenres } from '../../actions'

class GamesList extends React.Component {
  componentDidMount() {
    this.props.getGames()
    this.props.getGenres()
  }

  renderList() {
    return this.props.games.results.map(game => {
      return (
        <div className="item" key={game.id}>
          <h2>{game.name}</h2>
          <p>{game.rating}</p>
          <img className="ui medium image" src={game.background_image} alt={game.name} />
        </div>
      )
    })
  }

  render () {
    console.log(this.props.genres.results)
    if (this.props.games.length === 0) return null
    return (
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
    genres: state.genres
  }
}

export default connect(
  mapStateToProps, 
  { getGames, getGenres }
  )(GamesList)