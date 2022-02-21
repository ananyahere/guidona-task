import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from '../Home'
import Create from '../Create'
import Read from '../Read'
import Update from '../Update'

function Routes() {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/create"><Create /></Route>
      <Route exact path="/read"><Read /></Route>
      <Route exact path="/update"><Update /></Route>
    </Switch>
  )
}

export default Routes