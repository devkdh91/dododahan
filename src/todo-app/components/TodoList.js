import React, {useCallback} from 'react'
import styled from 'styled-components'
import TodoListItem from './TodoListItem'

const TodoLists = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`

const TodoList = ({todos, onRemove, onToggle}) => {
  
  return (
    <TodoLists
      
    >
      {todos.map(todo => <TodoListItem onRemove={onRemove} todo={todo} key={todo.id} onToggle={onToggle}></TodoListItem>)}
      
    </TodoLists>
  )
}

export default React.memo(TodoList)
