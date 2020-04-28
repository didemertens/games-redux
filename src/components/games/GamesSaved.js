import React from 'react'
import { connect } from 'react-redux'
import { getGame } from '../../actions'

class GamesSaved extends React.Component {
  state = {
    savedGamesData: []
  }


  componentDidMount() {
    this.props.savedGames.forEach(async (game) => {
      await this.props.getGame(game.gameId)
      const response = this.props.game
      const userGame = { userId: game.userId, game: response}
      this.setState({savedGamesData: [...this.state.savedGamesData, userGame]})
    })
  }

  renderNoSavedGames = () => {
    return (
      <section>
        <h1>You haven't saved any games yet.</h1>
        <p>Click on the button below a game to save it to your wishlist.</p>
      </section>
    )
  }


  render() {
    return (
      <section>
        <h1>Wishlist</h1>
        {this.state.savedGamesData.length === 0 
        ?
        this.renderNoSavedGames()
        :
        this.state.savedGamesData.map(el => {
          return (
          el.userId === this.props.auth.userId 
          ?
          <div className="item" key={el.game.id}>
            <h5>{el.game.name}</h5>
            <p>{el.game.rating}</p>
            <img className="ui medium image" src={el.game.background_image} alt={el.game.name} />
          </div>
          :
          this.renderNoSavedGames()
          )
        })
        } 
        
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game,
    savedGames: state.savedGames,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { getGame })(GamesSaved)