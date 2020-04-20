import React from 'react'
import GamesList from './GamesList'
import GenresList from './GenresList'
import GameDetails from './GameDetails'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/games/:id" component={GameDetails} />
        <Route path="/games" component={GamesList} />
        <Route exaxct path="/" component={GenresList} />
      </Switch>
    </BrowserRouter>
  )
}

export default App