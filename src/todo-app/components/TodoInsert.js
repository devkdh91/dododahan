import React, {useState, useCallback} from 'react'
import { MdAdd } from 'react-icons/md'
import styled from 'styled-components'

const TodoInserts = styled.form`
  display: flex;
  background: #495057;
  & > input {
    width: 100%;
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
  }
  & > button {
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding: 0 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
  &::placeholder {
    color: #dee2e6;
  }
  flex: 1;
`

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value)
  },[])
  const onSubmit = useCallback(e => {
    onInsert(value)
    setValue('')
    e.preventDefault()
  },[onInsert, value])
  return (
    <TodoInserts onSubmit={onSubmit}>
      <input placeholder="할 일 입력" value={value} onChange={onChange}/>
      <button type="submit">
        <MdAdd />
      </button>
    </TodoInserts>
  )
}

export default TodoInsert
