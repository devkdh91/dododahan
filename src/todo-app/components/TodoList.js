import React from 'react'
import styled from 'styled-components'
import TodoListItem from './TodoListItem'

const TodoLists = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`

const TodoList = () => {
  return (
    <TodoLists>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </TodoLists>
  )
}

export default TodoList
