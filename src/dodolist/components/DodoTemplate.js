import React from 'react'
import styled from 'styled-components'

const OuterWrap = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 6rem);
  padding-top: 6rem;
  background-color: darkslategray;
`
const DodoTemplateWrap = styled.div`
  width: 1024px;
  margin: 0 auto;
  border-radius: 4px;
  overflow: hidden;
`
const AppTitle = styled.div`
  background-color: rgba(74, 98, 99, 1);
  padding: 1rem;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`
const Content = styled.div`
  background: white;
`

const DodoTemplate = ({ children }) => {
  return (
    <OuterWrap>
      <DodoTemplateWrap>
        <AppTitle>DO DO LIST</AppTitle>
        <Content>{children}</Content>
      </DodoTemplateWrap>
    </OuterWrap>
  )
}

export default DodoTemplate
