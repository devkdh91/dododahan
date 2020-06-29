import React, {useState, useRef, useCallback} from 'react'
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
  const createBulkTodos = () => {
    const array = []
    for(var i = 1; i<2550; i++){
      array.push({id:i, text:`할일${i}`, checked:false})
    }
    return array
  }
  const [todos, setTodos] = useState(createBulkTodos)
  const nextId = useRef(4)
  const onInsert = useCallback(
    text => {
      const todo = {id:nextId.current, text, checked:false}
      setTodos(todos => todos.concat(todo));
      nextId.current += 1
    }
    , []
  )
  const onRemove = useCallback(
    id => {
      // const todoRemove = todos.filter(todo => todo.id !== id);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
      
    }, []
  )
  const onToggle = useCallback(
    id => {
      setTodos(todos => todos.map(todo => todo.id === id ? {...todo, checked:!todo.checked} : todo))
    }
    ,[]
  )
  return (
    <Background>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </Background>
  )
}

export default TodoApp
