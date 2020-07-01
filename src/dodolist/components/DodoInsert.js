import React from 'react';
import { MdAdd } from 'react-icons/md'

import styled from 'styled-components';

const DodoInserts = styled.form`
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

const DodoInsert = ({dodos}) => {
    return (
        <DodoInserts onSubmit={onSubmit}>
      <input placeholder="할 일 입력" value={value} onChange={onChange}/>
      <button type="submit">
        <MdAdd />
      </button>
    </DodoInserts>
    )
}

export default DodoInsert