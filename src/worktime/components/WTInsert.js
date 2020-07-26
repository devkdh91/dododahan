import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'

const InsertWrap = styled.div`
    height:4rem;
    background:rgba(60, 122, 137, 0.7);
    display:flex;
    justify-content:space-evenly;
`
const InputBox = styled.input`
    height:3rem;
    margin-top:0.5rem;
    padding:0.5rem 1rem;
    width:80%;
    border:none;
`
const SubmitBtn = styled.div`
    height:3rem;
    margin-top:0.5rem;
    width:15%;
    line-height:3rem;
    font-size:1rem;
    color:white;
    text-align:center;
    background:rgb(60, 122, 137);
`

const WTInsert = ({onInsert, user}) => {
    const [inputs, setInputs] = useState('')
    const handleInput = e => {
        setInputs(e.target.value)
    }
    return (
        <InsertWrap>
            <InputBox value={inputs} onChange={handleInput}/>
            <SubmitBtn onClick={(e)=>{onInsert(user, inputs); setInputs('')}}>시작</SubmitBtn>
        </InsertWrap>
    )
}

export default WTInsert