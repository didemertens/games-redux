import React from 'react'
import { connect } from 'react-redux'
import { getGenres } from '../actions'

class GenresList extends React.Component {
  componentDidMount() {
    this.props.getGenres()
  }

  renderList() {
    return this.props.genres.results.map(genre => {
      return (
        <div className="item" key={genre.id}>
          <h2>{genre.name}</h2>
          {genre.games.map(game => (
            <div className="item" key={game.id}>
              <p>{game.name}</p>
            </div>
          ))}
        </div>
      )
    })
  }

  render () {
    if (this.props.genres.length === 0) return null
    return (
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.genres
  }
}

export default connect(
  mapStateToProps, 
  { getGenres }
  )(GenresList)