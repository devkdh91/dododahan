import React, { useState, useContext, useEffect } from 'react'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import { FcHome } from 'react-icons/fc'
import Main from './dodolist/dodo_main'
import TodoApp from './todo-app/todoapp'
import Navigator from './navigator'
import Study from './study/index'
import DodoApp from './dodolist/DodoApp'
import Worktime from './worktime/Worktime'
import WTLogin from './worktime/components/WTLogin'
import axios from 'axios'

const HomeBtn = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  height: 30px;
  width: 30px;
  z-index: 1;
`

function App() {
  const [loginInfo, setLoginInfo] = useState('')
  const checkLogin = async () => {
    await axios.create().get('/api/users/check').then(res => setLoginInfo(res.data))
  }

  useEffect(()=>{
    checkLogin()
  },[])
  return (
    // <>
    //   <Router>
    //     <HomeBtn>
    //       <Link to="/">
    //         <FcHome size="24" />
    //       </Link>
    //     </HomeBtn>
    //     <Switch>
    //       <Route exact path="/" component={Navigator} />
    //       <Route path="/todoapp" component={TodoApp} />
    //       <Route path="/study" component={Study} />
    //       <Route path="/dodolist" component={DodoApp} />
    //     </Switch>
    //   </Router>
    // </>
    <>
        {loginInfo === 'no logined' ? 
        <WTLogin/>
        :
        <Worktime>{loginInfo}</Worktime>
      }
    </>
  )
}

export default App
