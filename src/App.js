import React, { useState } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Main from './dodolist/dodo_main'
import TodoApp from './todo-app/todoapp'
import Navigator from './navigator'
import Study from './study/index'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Navigator} />
          <Route path="/todoapp" component={TodoApp} />
          <Route path="/study" component={Study} />
          <Route path="/dodolist" component={Main} />
        </Switch>
      </Router>
    </>
  )
}

export default App
