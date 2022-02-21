import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Create from '../Create'
import Read from '../Read'
import Update from '../Update'
import ReadOne from '../ReadOne'

function Routes() {
  return (
    <Switch>
      <Route exact path="/"><Read /></Route>
      <Route exact path="/create"><Create /></Route>
      {/* <Route exact path="/read"><Read /></Route> */}
      <Route exact path="/update"><Update /></Route>
      <Route exact path="/readOne"><ReadOne /></Route>
    </Switch>
  )
}

export default Routes