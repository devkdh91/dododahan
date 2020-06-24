import React, { useState } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import UseReducer from './study/usereducer'
import Main from './dodolist/dodo_main'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/study/usereducer" component={UseReducer} />
        <Route exact path="/dodolist" component={Main} />
      </Switch>
    </Router>
  )
}

export default App
