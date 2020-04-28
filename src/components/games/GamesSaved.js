import React from 'react'
import { connect } from 'react-redux'
import { getGame } from '../../actions'

class GamesSaved extends React.Component {
  state = {
    savedGamesData: []
  }


  componentDidMount() {
    this.props.savedGames.forEach(async (gameId) => {
      await this.props.getGame(gameId)
      const response = this.props.game
      this.setState({savedGamesData: [...this.state.savedGamesData, response]})

    })
  }


  render() {
    if (this.state.savedGamesData.length === 0) return (
      <section>
        <h1>You haven't saved any games yet.</h1>
        <p>Click on the button below a game to save it to your wishlist.</p>
      </section>
    )
    return (
      <section>
        <h1>Saved games</h1>
        {this.state.savedGamesData.map(game => (
          <div className="item" key={game.id}>
            <h2>{game.name}</h2>
            <p>{game.rating}</p>
            <img className="ui medium image" src={game.background_image} alt={game.name} />
          </div>
        ))}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game,
    savedGames: state.savedGames
  }
}

export default connect(mapStateToProps, { getGame })(GamesSaved)