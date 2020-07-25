import React from 'react';
import styled from 'styled-components';
import {AiFillCaretDown} from 'react-icons/ai'

const Header = styled.div`
    height:5rem;
    width:100%;
    background-color:white;
    border-radius: 1rem 1rem  0 0; 
    display:flex;
    justify-content:space-between;
    padding: 0 1rem;
`
const UserName = styled.div`
    line-height:5rem;
    font-size:1.2rem;
`
const FoldBtn = styled.div`
    margin-top:1.75rem;
    height:fit-content;
    cursor:pointer;
`


const WTHeader = ({handleFold}) => {
    return (
        <Header>
            <UserName>김혜진</UserName>
            <FoldBtn><AiFillCaretDown size="1.5rem" onClick={handleFold}/></FoldBtn>
        </Header>
    )
}

export default WTHeader