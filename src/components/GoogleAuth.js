import React from 'react'

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_ID,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      })
    })
  }

  renderAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return <div>Don't know</div>
    } else if (this.state.isSignedIn) {
      return <div>Signed in</div>
    } else {
      return <div>Not signed in</div>
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default GoogleAuth