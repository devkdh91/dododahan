import React from 'react'
import styled from 'styled-components'
import { Buttons, Button } from '../navigator'
import UseReducer from './usereducer'
import UseRef from './useref'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(221, 255, 210, 0.6);
`

const Header = styled.div`
  width: 100%;
  /* padding: 0 10%; */
  height: 100px;
  background-color: rgba(221, 255, 199, 1);
  margin: 0 auto;
  & > div {
    padding-top: 20px;
  }
`
const Article = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 100px;
  height: calc(100% - 200px);
`
const Study = () => {
  return (
    <Wrap>
      <Header>
        <Buttons>
          <Button to="usereducer">useReducer</Button>
          <Button to="useref">useRef</Button>
        </Buttons>
      </Header>
      <Article>
        <Switch>
          <Route path="/study/usereducer" component={UseReducer} />
          <Route path="/study/useref" component={UseRef} />
        </Switch>
      </Article>
    </Wrap>
  )
}
export default Study
