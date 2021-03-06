import React from 'react'
import styled, { css } from 'styled-components'
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from 'react-icons/md'

const TodoListItems = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`
const Checkbox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  & > svg {
    font-size: 1.5rem;
    color: ${(props) => props.checked && '#22b8cf'};
  }
`
const Text = styled.div`
  ${(props) =>
    props.checked &&
    css`
      color: #adb5bd;
      text-decoration: line-through;
    `}
  margin-left: 0.5rem;
  flex: 1;
`
const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`
const TodoListItem = ({todo, onRemove, onToggle}) => {
  return (
    <TodoListItems>
      <Checkbox checked={todo.checked} onClick={()=>{
        onToggle(todo.id)
      }}>
      {todo.checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}  

        <Text checked={todo.checked}>{todo.text}</Text>
      </Checkbox>
      <Remove onClick={() => {onRemove(todo.id)}}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItems>
  )
}

export default React.memo(TodoListItem)
