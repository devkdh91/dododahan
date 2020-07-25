import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import WTTemplate from './components/WTTemplate'
import WTHeader from './components/WTHeader'
import WTInsert from './components/WTInsert'
import WTList from './components/WTList'
import WTListItem from './components/WTListItem'
import axios from 'axios'

const Wrap = styled.div`
    height:100%;
    width: 100%;
    padding-top:2rem;
    background: rgba(134, 222, 183, 1);
    & * {
        box-sizing:border-box;
    }
`
const Worktime = () => {
    const client = axios.create()
    const [fold, setFold] = useState([false])
    const handleFold = () => {
        setFold([!fold[0]])
    }
    const [update, setUpdate] = useState(false)
    const [tasks, setTasks] = useState([])
    const getTaskList = async (userName) => {
        await client.get(`/api/tasks/${userName}`).then(res => setTasks(res.data))
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
        getTaskList()
    },[update])
    return (
        <Wrap>
            <button onClick={()=>{console.log(tasks[0])}}>테스트</button>
            <WTTemplate fold={fold[0]}>
                <WTHeader handleFold={handleFold}/>
                <WTInsert onInsert={onInsert}/>
                <WTList>
                    {tasks.length !== 0 && tasks.map(task => 
                        <WTListItem 
                            key={task.taskNo} 
                            task={task}  
                            user="heni"
                            getStringTime={getStringTime}
                            getPeriod={getPeriod}
                            onPause={onPause} 
                            onRestart={onRestart} 
                            onFinish={onFinish}/>
                    )}
                </WTList>
            </WTTemplate>
        </Wrap>
    )
}

export default Worktime