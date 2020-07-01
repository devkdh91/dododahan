import React, { useState, useCallback } from 'react'
import { MdAdd } from 'react-icons/md'

import styled from 'styled-components'

const DodoInserts = styled.form`
  display: flex;
  background: #495057;
  height: 3rem;
  & > input {
    width: 10rem;
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    border-left: 2px solid darkgray;
    text-align: center;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: hidden;
      margin: 0;
    }
  }
  & > input:nth-child(4) {
    width: 100%;
  }

  & > div {
    padding: 0 1rem;
    font-size: 1.1rem;
    line-height: 3rem;
    letter-spacing: 0.1rem;
    width: 12rem;
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

const DodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('')
  const onChange = useCallback(
    (e) => {
      setValue(e.target.value)
    },
    [value],
  )
  const onSubmit = useCallback(
    (e) => {
      onInsert(value)
      setValue('')
      e.preventDefault()
    },
    [value],
  )

  return (
    <DodoInserts onSubmit={onSubmit}>
      <div>종료시점 입력 : </div>
      <input type="number" min="0" max="24" placeholder="시" />
      <input type="number" min="0" max="59" placeholder="분" />
      <input placeholder="할 일 입력" value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </DodoInserts>
  )
}

export default DodoInsert
