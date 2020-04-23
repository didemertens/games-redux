import React from 'react'

import history from '../../history'
import Modal from '../common/Modal'

const GameDelete = () => {
  const actions = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  )

  return (
    <div>
      <Modal
        title="Delete Game"
        content="Are you sure you want to delete this game?"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  )
}

export default GameDelete