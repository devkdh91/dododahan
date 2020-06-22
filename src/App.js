import React, { useState } from 'react';
import styled from 'styled-components';

const OuterWrap = styled.div`
  width:100%;
  height:100%;
  background-color: rgba(0,128,0, 0.2);
`
const InnerWrap = styled.div`
  width:60%;
  padding:2rem;
  margin:0 auto;
`
const DoDoTitle = styled.div`
  font-size:4rem;
  font-weight:bold;
  text-align:center;
`
const TodayDate = styled.div`

  font-size:2rem;
  text-align:center;
 `
function App() {

  const [dodolist, setDodolist] = useState([])
  const [inputs, setInputs] = useState('')
  const handleInput = (e) => {
    setInputs(e.target.value)
  }
  const AddDodolist = () => {
    setDodolist([...dodolist, inputs])
  }
  return (
    <OuterWrap>
      <InnerWrap>
        <DoDoTitle>DO DO LIST</DoDoTitle>
        <TodayDate>{new Date().toLocaleDateString()}</TodayDate>
        <input placeholder="할 일 목록" onBlur={handleInput} />
        <button onClick={AddDodolist}>추가</button>
        <div>할일 목록
          <ul>
            {dodolist.length !== 0 && dodolist.map((f, idx) => <li key={idx}>{f}</li>)}
          </ul>
        </div>
      </InnerWrap>
    </OuterWrap>
  );
}

export default App;
