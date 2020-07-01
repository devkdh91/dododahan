import React, { useState, useRef, useCallback} from 'react'
import produce from 'immer'
import styled from 'styled-components'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import { Switch } from 'react-router-dom'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(240, 240, 240, 1);
`


const TodoApp = () => {
  
  const [todos, setTodos] = useState([])
  const nextId = useRef(1)

  const onInsert = useCallback(
    /////////////// immer사용 전
    // text => {
    //   const todo = {id:nextId.current, text, checked:false}
    //   setTodos(todos => todos.concat(todo));
    //   nextId.current += 1
    // }
    text => {
      setTodos(
      produce(todos, draft => {
        draft.push({id:nextId.current , text, checked:false})
      }))
      nextId.current += 1
    }

    
    , [todos]
  )
  const onRemove = useCallback(
    //////////// immer사용 전
    // id => {
    //   // const todoRemove = todos.filter(todo => todo.id !== id);
    //   setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id)); 
    // }
    id => {
      setTodos(
        produce(todos, draft => {
          draft.splice(draft.findIndex(todo => todo.id === id), 1)
        })
      )
    }
    , [todos]
  )
  const onToggle = useCallback(
    id => {
      setTodos(todos => todos.map(todo => todo.id === id ? {...todo, checked:!todo.checked} : todo))
    }
    ,[todos]
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
