import React from 'react'
import { connect } from 'react-redux'
import { getGame } from '../actions'

class GameDetails extends React.Component {
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
    game: state.game
  }
}

export default connect(mapStateToProps, 
  { getGame }
  )(GameDetails)