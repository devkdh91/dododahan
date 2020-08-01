import React, {useState, useEffect} from 'react';
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
    left:70%;
    top:0;
    height:2rem;
    margin-top:1.2rem;
    line-height:2rem;
    cursor:pointer;
`
const Hightlight = styled.span`
    font-size:${props => props.fontSize || '2rem'};

`


const WTHeader = ({handleFold, user, comeTime, loginUser, Goodbye, tasks, getStringTime, getPeriod}) => {
    const ingTask = tasks.length !== 0 && tasks.find(task => !task.hasOwnProperty('endTime') && task.startTime.length > task.pauseTime.length)

    const [totalWorkTime, setTotalWorkTime] = useState(0)
    
    const handleTotalWorkTime = () => {
        let times = ingTask ? getPeriod(getStringTime(), ingTask.startTime[ingTask.startTime.length-1]) : 0;
        for(let i = 0; i < tasks.length; i++){
            if(tasks[i].hasOwnProperty('period')){
                times += tasks[i].period
            }
        }
        setTotalWorkTime(times)
    }
    useEffect(()=>{
        handleTotalWorkTime()
        setInterval(handleTotalWorkTime, 1000*60)
    },[tasks])
    return (
        <Header>
            <UserName>
                <Hightlight fontSize="1.5rem">{user.role}&nbsp;{user.name}</Hightlight>{comeTime ? <span>( Came to work at <Hightlight>{comeTime}</Hightlight></span> : ''}
                {totalWorkTime ? <span>&nbsp;&amp; Total <Hightlight>{totalWorkTime}</Hightlight>minutes worked )</span> : (comeTime && ')')}
                {loginUser === user.nickname && <GoodbyeBtn onClick={Goodbye}><GiExitDoor size="2rem"/></GoodbyeBtn>}
            </UserName>
            <FoldBtn><AiFillCaretDown size="1.5rem" onClick={()=>{handleFold(user.nickname)}}/></FoldBtn>
            
        </Header>
    )
}

export default WTHeader