import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Buttons = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: ${(props) => props.paddingTop || '0px;'};
  display: flex;
  justify-content: space-around;
`
export const Button = styled(Link)`
  width: 180px;
  height: 60px;
  line-height: 60px;
  font-size: 30px;
  background-color: black;
  color: white;
  text-decoration: none;
  text-align: center;
`
const Navigator = () => {
  return (
    <Buttons paddingTop="200px">
      <Button to="/todoapp">투두 앱</Button>
      <Button to="/dodolist">두두리스트</Button>
      <Button to="/study">공부방</Button>
    </Buttons>
  )
}

export default Navigator
