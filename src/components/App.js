import React from 'react'
import GamesList from './GamesList'
import GenresList from './GenresList'
import GameDetails from './GameDetails'
import Header from './Header'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/games/:id" component={GameDetails} />
          <Route path="/games" component={GamesList} />
          <Route path="/genres" component={GenresList} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App