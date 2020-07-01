import React, { useState } from 'react'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components';
import { FcHome } from 'react-icons/fc'

import Main from './dodolist/dodo_main'
import TodoApp from './todo-app/todoapp'
import Navigator from './navigator'
import Study from './study/index'
import DodoApp from './dodolist/DodoApp';

const HomeBtn = styled.div`
  position:absolute;
  left:10px;
  top:10px;
  height:30px;
  width:30px;
`

function App() {
  return (
    <>
      <Router>
      <HomeBtn><Link to="/"><FcHome size="24"/></Link></HomeBtn>
        <Switch>
          <Route exact path="/" component={Navigator} />
          <Route path="/todoapp" component={TodoApp} />
          <Route path="/study" component={Study} />
          <Route path="/dodolist" component={DodoApp} />
        </Switch>
      </Router>
    </>
  )
}

export default App
