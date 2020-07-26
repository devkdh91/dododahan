import React from 'react';
import styled from 'styled-components';
import {AiFillCaretDown} from 'react-icons/ai'
import {GiExitDoor} from 'react-icons/gi'

const Header = styled.div`
    height:5rem;
    width:100%;
    background-color:white;
    border-radius: 1rem 1rem  0 0; 
    display:flex;
    justify-content:space-between;
    padding: 0 1rem;
    position:relative;
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
const GoodbyeBtn = styled.div`
    position:absolute;
    left:20rem;
    top:0;
    height:2rem;
    margin-top:1.2rem;
    line-height:2rem;
    cursor:pointer;
`


const WTHeader = ({handleFold, user, comeTime, loginUser, Goodbye}) => {
    return (
        <Header>
            <UserName>{user.role}&nbsp;{user.name}{comeTime ? ' ( '+ comeTime + '출근 )' : ''}
                {loginUser === user.nickname && <GoodbyeBtn onClick={Goodbye}><GiExitDoor size="2rem"/></GoodbyeBtn>}
            </UserName>
            <FoldBtn><AiFillCaretDown size="1.5rem" onClick={()=>{handleFold(user.nickname)}}/></FoldBtn>
            
        </Header>
    )
}

export default WTHeader