import React from 'react'

import history from '../../history'
import Modal from '../common/Modal'
import { connect } from 'react-redux'
import { getGame } from '../../actions'

class GameDelete extends React.Component {
  componentDidMount() {
    const { match: { params } } = this.props
    this.props.getGame(params.id)
  }

  actions = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  )

  renderContent() {
    if (!this.props.game.name) {
      return 'Are you sure you want to delete this game?'
    }
    return `Are you sure you want to delete this game '${this.props.game.name}'?`
  }

  render() {
    return (
        <Modal
          title='Delete game?'
          content={this.renderContent()}
          actions={this.actions}
          onDismiss={() => history.push('/')}
        />
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
  )(GameDelete)