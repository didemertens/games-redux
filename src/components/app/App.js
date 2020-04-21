import React from 'react'
import GamesList from '../games/GamesList'
import GenresList from '../games/GenresList'
import GameDetails from '../games/GameDetails'
import Header from '../common/Header'
import Home from '../common/Home'

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
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App