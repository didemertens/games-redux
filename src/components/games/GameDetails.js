import React from 'react'
import { connect } from 'react-redux'
import { getGame, saveGame } from '../../actions'

class GameDetails extends React.Component {
  state = {
    gameSaved: false
  }


  componentDidMount() {
    const { match: { params } } = this.props
    this.props.getGame(params.id)
  } 

  renderList() {
    return (
      <div className="item" key={this.props.game.id}>
        <h2>{this.props.game.name}</h2>
        <p>{this.props.game.rating}</p>
        <img className="ui medium image" src={this.props.game.background_image} alt={this.props.game.name} />
        {
          this.props.auth.isSignedIn && !this.state.gameSaved &&
          <button 
            onClick={() => {
              this.setState({ gameSaved: true })
              this.props.saveGame(this.props.game.id, this.props.auth.userId)
          }}
            className="ui button primary"
          >
            Save to wishlist
          </button>
        }
      </div>
    )
  }


  render() {
    return (
      <div>
        {this.renderList()}
      </div>
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

export default connect(mapStateToProps, 
  { getGame, saveGame }
  )(GameDetails)