import React, {useState, useRef, useEffect} from 'react'
import styled, {keyframes} from 'styled-components'
import {MdFingerprint} from 'react-icons/md'
import axios from 'axios'
import {AuthConsumer} from '../../contexts/auth'

const LoginWrap = styled.div`
    height:100%;
    width:100%;
    background:black;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
`
const FingerPrintArea = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    opacity:${props => props.opacity};
    transition: opacity 3s;
    text-align:center;
`
const Ment = styled.div`
    color:white;
    text-align:center;
    margin-top:2rem;
`
const LoginArea = styled.div`
    height: 20rem;
    width:40rem;
    border-radius:2rem;
    background:#ADEEE3;
    display:flex;
    justify-content:center;
    align-items:center;
    opacity: ${props => props.opacity};
    transition: opacity 2s;
    z-index:1;
    
`
const ani = keyframes`
    0% {
        width:0;
    }
    100% {
        width:10rem;
    }
`
const NameInput = styled.input.attrs({placeholder:'닉네임 입력'})`
    height:3rem;
    width:10rem;
    text-align:center;
    font-size:1.5rem;
    border:none;
    line-height:3rem;
    animation: ${ani} 4s ease;
    &:focus {
        border:none;
        outline:none;
    }
`
const SubmitBtn = styled.div`
    height:3rem;
    margin-left:1rem;
    width:4rem;
    background:white;
    text-align:center;
    line-height:1.5rem;
    box-shadow:1px 1px 5px 1px lightgrey;
`

const WTLogin = () => {
    const InputRef = useRef()
    const [authPage, setAuthPage] = useState(false)
    const [input, setInput] = useState('')
    const [loginInfo, setLoginInfo] = useState('')
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    useEffect(()=>{
        InputRef.current.focus()
    },[])

    const Login = async () => {
        axios.create().post('/api/users/login', {userName: input})
        .then(res => {
                if(res.data){
                    setTimeout(function(){window.location.reload()}, 4000)
                    setAuthPage(true)
                }})
    }
    return (
        <>
        <LoginWrap>
            {/* {!authPage ? */}
                <LoginArea opacity={authPage ? '0' : '1'}>
                    <NameInput ref={InputRef} onBlur={handleInput}/>
                    <SubmitBtn onClick={Login}>출 근<br/>하 기</SubmitBtn>
                </LoginArea>
                <FingerPrintArea opacity={authPage ? '1' : '0'}>
                    <MdFingerprint size="5rem" color="white"/>
                    <Ment>엄지 손가락을 대주세요</Ment>
                </FingerPrintArea>
        </LoginWrap>
        </>

    )
}

export default WTLogin