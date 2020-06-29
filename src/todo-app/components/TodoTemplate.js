import React from 'react'
import styled from 'styled-components'

const TodoTemplates = styled.div`
  width: 512px;
  margin: 0 auto;
  padding-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`
const AppTitle = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Content = styled.div`
  background: white;
`

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplates>
      <AppTitle>일정관리</AppTitle>
      <Content>{children}</Content>
    </TodoTemplates>
  )
}

export default TodoTemplate
