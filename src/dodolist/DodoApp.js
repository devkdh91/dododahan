import React, { useState, useRef, useCallback } from 'react'
import produce from 'immer'
import DodoTemplate from './components/DodoTemplate'
import DodoInsert from './components/DodoInsert'
import DodoList from './components/DodoList'

const DodoApp = () => {
  const [todos, setTodos] = useState([])
  const nextId = useRef(1)

  const onInsert = useCallback(
    /////////////// immer사용 전
    // text => {
    //   const todo = {id:nextId.current, text, checked:false}
    //   setTodos(todos => todos.concat(todo));
    //   nextId.current += 1
    // }
    (text) => {
      setTodos(
        produce(todos, (draft) => {
          draft.push({ id: nextId.current, text, checked: false })
        }),
      )
      nextId.current += 1
    },

    [todos],
  )
  const onRemove = useCallback(
    //////////// immer사용 전
    // id => {
    //   // const todoRemove = todos.filter(todo => todo.id !== id);
    //   setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    // }
    (id) => {
      setTodos(
        produce(todos, (draft) => {
          draft.splice(
            draft.findIndex((todo) => todo.id === id),
            1,
          )
        }),
      )
    },
    [todos],
  )
  const onToggle = useCallback(
    (id) => {
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      )
    },
    [todos],
  )

  return (
    <DodoTemplate>
      <DodoInsert onInsert={onInsert} />
      <DodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </DodoTemplate>
  )
}

export default DodoApp
