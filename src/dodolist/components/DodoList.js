import React from 'react'
import styled from 'styled-components'
import DodoListItem from './DodoListItem'

const DodoLists = styled.div`
  min-height: 520px;
  max-height: 820px;
  overflow-y: auto;
`

const DodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <DodoLists>
      {todos.map((todo) => (
        <DodoListItem
          onRemove={onRemove}
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
        ></DodoListItem>
      ))}
    </DodoLists>
  )
}

export default DodoList
