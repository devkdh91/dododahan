import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import WTHeader from './WTHeader'
import WTInsert from './WTInsert'
import WTList from './WTList'
import WTListItem from './WTListItem'
import axios from 'axios'



const TemplateWrap = styled.div`
    width:1024px;
    /* height:30rem; */
    height:${props => props.fold ? '5rem' : '40rem'};
    border-radius: 1rem 1rem 0 0 ;
    margin:0 auto;
    background:#ADEEE3;
    overflow:hidden;
    transition:all 2s;
    margin-bottom:2rem;
    position:relative;
`
const TemplateInnerWrap = styled.div`
    height: calc(100% - 5rem);
    width:100%;
    /* background:black; */
    position:absolute;
    top:5rem;
    left:0;
    z-index:1;
`

const WTTemplate = ({ fold, handleFold, user, loginUser}) => {
    const client = axios.create()
    const [update, setUpdate] = useState(false)
    const [tasks, setTasks] = useState([])
    const [comeTime, setComeTime] = useState('')
    const getTaskList = async (userName) => {
        await client.get(`/api/tasks/${userName}`).then(res => setTasks(res.data))
    }

    const getComeTime = async (userName) => {
        await client.get(`/api/timechecks/${userName}`).then(res => setComeTime(res.data.comeTime))
    }

    const Goodbye = async () => {
        await client.patch('/api/timechecks/goodbye')
        window.location.reload()
    }

    const Update = () => {
        setUpdate(!update)
    }

    const getStringTime = () => {
        const date = new Date()
        const st = String(date.getHours()) < 10
          ? 0 + String(date.getHours()) + ":" + String(date.getMinutes())
          : String(date.getHours()) + ":" +String(date.getMinutes())

        return st
    }

    const onInsert = async (user, inputs) => {
        await client.post('/api/tasks', {
            userName: user,
            taskName: inputs,
            startTime : [getStringTime()]
        })
        Update()
    }


    const getPeriod = (time1, time2) => {
        const hourGap = (parseInt(time1.substring(0, 2))-parseInt(time2.substring(0, 2)))*60
        const MinuteGap = (parseInt(time1.substring(3, 5))-parseInt(time2.substring(3, 5)))
        return (hourGap+MinuteGap)
    }

    const onPause = async (task) => {
        await client.patch('/api/tasks/update/pause', {
            taskNo: task.taskNo,
            pauseTime : [...task.pauseTime, getStringTime()],
            period: task.period + getPeriod(getStringTime(), task.startTime.slice(-1)[0])
        })
        Update()
    }

    const onRestart = async (task) => {
        await client.patch('/api/tasks/update/restart', {
            taskNo: task.taskNo,
            startTime: [...task.startTime, getStringTime()]
        })
        Update()
    }
    
    const onFinish = async (task) => {
        await client.patch('/api/tasks/update/end', {
            taskNo: task.taskNo,
            endTime: getStringTime(),
            period: task.startTime.length > task.pauseTime.length ? task.period + getPeriod(getStringTime(), task.startTime.slice(-1)[0]) : task.period
        })
        Update()
    }
    useEffect(()=>{
        getComeTime(user.nickname)
    },[])
    useEffect(()=>{
        getTaskList(user.nickname)
    },[update])
    return (
        <TemplateWrap fold={fold}>
            {loginUser !== user.nickname && <TemplateInnerWrap/>}
            <WTHeader handleFold={handleFold} user={user} comeTime={comeTime} Goodbye={Goodbye} loginUser={loginUser}/>
                    <WTInsert onInsert={onInsert} user={user.nickname}/>
                    <WTList>
                        {tasks.length !== 0 && tasks.map(task => 
                            <WTListItem 
                                key={task.taskNo} 
                                task={task}  
                                getStringTime={getStringTime}
                                getPeriod={getPeriod}
                                onPause={onPause} 
                                onRestart={onRestart} 
                                onFinish={onFinish}/>
                        )}
                    </WTList>
        </TemplateWrap>
    )
}

export default WTTemplate