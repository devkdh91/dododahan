import React from 'react'
import styled from 'styled-components'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(240, 240, 240, 1);
`
const TodoApp = () => {
  return (
    <Background>
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </Background>
  )
}

export default TodoApp
