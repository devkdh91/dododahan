import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {FaPause, FaPlay, FaStop, FaDotCircle} from 'react-icons/fa'

const ItemWrap = styled.div`
    width:100%;
    height:3rem;
    display:flex;
    color:${props => props.color};
`
const TaskTitle = styled.div`
    height:3rem;
    width:60%;
    /* padding-left:4rem; */
    padding-left:1rem;
    box-sizing:border-box;
    /* border:1px solid gray; */
    line-height:3rem;
    color:${props => props.color};
`
const StartTime = styled(TaskTitle)`
    padding: 0 ;
    width:10%;
    text-align:center;
`
const EndTime = styled(StartTime)``
const PeriodTime = styled(StartTime)`
    color:${props => props.color};
`
const ButtonsArea = styled(StartTime)`

    width:10%;
    display:flex;
    justify-content:space-around;
    color:black;
`
const Button = styled.div`
    width:40%;
    height:2rem;
    margin-top:0.5rem;
    /* background-color:white; */
`

const WTListItem = ({task, onPause, onRestart, onFinish, getStringTime, getPeriod}) => {
    
    const [duration, setDuration] = useState('')
    const getDuration = () => {
        const fromLastST = getPeriod && getPeriod((getStringTime && getStringTime()), task.startTime.slice(-1)[0])
        return task.endTime ? 0 : fromLastST
    }
    

    useEffect(()=>{
        setDuration(getDuration())
       setInterval(function(){
           setDuration(getDuration())
    }, 1000*60)
    //    return () => {clearInterval(durationTimer)}
    },[])
    
    return (
        <ItemWrap color={task.endTime ? 'lightgrey' : (task.startTime.length === task.pauseTime.length ? 'red' : 'black')}>
            <TaskTitle>
            {task.taskName !== '업무내용' && <FaDotCircle size="10px"/>}&nbsp;{task.taskName}
            </TaskTitle>
            <StartTime onClick={()=>{console.log(getDuration())}}>{task.startTime[0]}</StartTime>
            <EndTime>{task.endTime}</EndTime>
            <PeriodTime color={(task.endTime && task.period !== '진행시간') && 'grey'}>
                {task.period === '진행시간' ? '진행시간' : duration+(task.period && task.period)}{task.period !== '진행시간' && '분'}
            </PeriodTime>
            {!task.endTime && 
                <ButtonsArea>
                    {task.startTime.length > task.pauseTime.length ? 
                        <Button onClick={()=>{onPause(task)}}>{task.taskName === '업무내용' ? '' : <FaPause size="1.5rem"/>}</Button>
                    :
                        <Button onClick={()=>{onRestart(task)}}>{task.taskName === '업무내용' ? '' : <FaPlay size="1.5rem"/>}</Button>
                    }
                    <Button onClick={()=>{onFinish(task)}}>{task.taskName === '업무내용' ? '' : <FaStop size="1.5rem" color="red"/>}</Button>
                </ButtonsArea>
            }   
        </ItemWrap>
    )
}

export default WTListItem