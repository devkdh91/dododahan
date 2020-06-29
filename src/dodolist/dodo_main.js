import React, { useState } from 'react'
import styled from 'styled-components'

const OuterWrap = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 128, 0, 0.2); */
  background-color: darkslategray;
`
const InnerWrap = styled.div`
  width: 60%;
  padding: 2rem;
  margin: 0 auto;
`
const DoDoTitle = styled.div`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`
const TodayDate = styled.div`
  font-size: 2rem;
  text-align: center;
`
const MainArticle = styled.div`
  width: 80%;
  border: 1px solid gray;
  margin: 0 auto;
  margin-top: 5rem;
`
const DodoInputArea = styled.div`
  display: flex;
  justify-content: center;
  height: 3rem;
  line-height: 3rem;
  margin-bottom: 5rem;
`
const DodoInput = styled.input`
  height: 2rem;
  width: 20rem;
  padding: 0.5rem;
  font-size: 1.3rem;
  margin-right: 1rem;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  outline: none;
  &::placeholder {
    text-align: left;
    letter-spacing: 1rem;
  }
  &:focus {
    outline: none;
  }
`
const TimeInput = styled(DodoInput).attrs({
  type: 'number',
  //   min: '0',
})`
  width: 3rem;
  margin-right: 0.1rem;
`
const Texts = styled.div`
  display: inline-block;
  ${(props) =>
    `font-size: ${props.fontSize}; font-weight:${
      props.fontWeight
    }; margin-right: ${props.marginRight || '1rem'}; margin-left: ${
      props.marginLeft
    } `};
`
const SubmitBtn = styled.div`
  width: 4rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  padding: 0.5rem;
  color: green;
  background-color: rgba(240, 240, 240, 0.7);
`

const DodoListArea = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  border: 1px solid gray;
`
const DodoListItem = styled.div`
  height: 3rem;
  line-height: 3rem;
  font-size: 1.5rem;
`
const Main = () => {
  const [dodolist, setDodolist] = useState([
    '일어나기',
    '씻기',
    '출근하기',
    '일하기',
    '퇴근하기',
  ])
  const [inputs, setInputs] = useState('')
  const handleInput = (e) => {
    setInputs(e.target.value)
  }

  const AddDodolist = (e) => {
    e
      ? setDodolist([...dodolist, e.target.value])
      : setDodolist([...dodolist, inputs])
  }
  return (
    <OuterWrap>
      <InnerWrap>
        <DoDoTitle>DO DO LIST</DoDoTitle>
        <TodayDate>{new Date().toLocaleDateString()}</TodayDate>
        <MainArticle>
          <DodoInputArea>
            <TimeInput max="24" />
            <Texts fontSize="2rem">시</Texts> <TimeInput max="59" />
            <Texts fontSize="2rem">분 까지</Texts>
            <DodoInput
              placeholder="~하기"
              onBlur={handleInput}
              // onKeyPress={(e) => {
              //   handleInput(e)
              //   e.key === 'Enter' && AddDodolist()
              // }}
              onKeyPress={AddDodolist}
            />
            <SubmitBtn onClick={AddDodolist}>추가</SubmitBtn>
          </DodoInputArea>

          <DodoListArea>
            {dodolist.length !== 0 &&
              dodolist.map((f, idx) => (
                <DodoListItem key={idx}>
                  {idx + 1}. &nbsp;{f}
                </DodoListItem>
              ))}
          </DodoListArea>
        </MainArticle>
      </InnerWrap>
    </OuterWrap>
  )
}

export default Main
