import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    width:100%;
    /* height:calc( 100% - 10rem ); */
    /* padding-top:10rem; */
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:rgba(123, 217, 174, 0.8);
`

const ErrorBox = styled.div`
    width:40%;
    height:40%;
    text-align:center;
    position:relative;
    color:white;
`
const CryingIcon = styled.img`
    width:13rem;
    height:13rem;
    display:block;
    margin:0 auto;
    margin-bottom:3rem;
`
const FirstLine = styled.div`
    font-size:2.2rem;
    margin-bottom:1rem;
`
const BackBtn = styled.div`
    margin:0 auto;
    margin-top:1rem;
    height:3rem;
    line-height:3rem;
    width:15rem;
    border-radius:1rem;
    color:rgba(123, 217, 174, 1);
    background-color:white;
`
const ErrorPage = () => {
    return (
        <Wrap>
            <ErrorBox>
                {/* <Background/> */}
                <CryingIcon src="./image/crying.png" alt="crying-icon"/>
                <FirstLine>에상하지 못한 오류가 발생하였습니다.</FirstLine>
                <br/>
                해당 에러는 TENGLE 서버로 전송됩니다.
                <br/>
                빠른시일내에 수정하도록 하겠습니다. 죄송합니다.
                <br/>
                <br/>
                <BackBtn>
                이전 화면으로 돌아가기
                </BackBtn>
            </ErrorBox>

        </Wrap>
    )
}

export default ErrorPage