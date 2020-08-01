import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import WTTemplate from './components/WTTemplate'
import axios from 'axios'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'

const Wrap = styled.div`
    height: 100%;
    width: 100%;
    padding-top:2rem;
    background: rgba(134, 222, 183, 1);
    box-sizing: border-box;
    & * {
        box-sizing:border-box;
    }
`
const DateArea = styled.div`
    height:3rem;
    width:50%;
    margin:0 auto;
    text-align:center;
    font-size:3rem;
    display:flex;
    justify-content:space-around;
    margin-bottom:2rem;
`
const DateTitle = styled.div`
`
const Prev = styled.div``
const Next = styled.div``
const Worktime = ({children}) => {
    const client = axios.create()
    const users = [{name: '김혜진', nickname:'heni', role:'CEO'}, 
                   {name:'김다한', nickname:'dahan', role:'CTO'}, 
                   {name: '김석현', nickname:'bro', role:'CMO'}]
    const [pickDate, setPickDate] = useState(new Date())
    const [fold, setFold] = useState('')
    const handleFold = (nickname) => {
        setFold(nickname)
    }
    
    const getPrevDate = () => {
        setPickDate(new Date(pickDate.setDate(pickDate.getDate() -1 )))
    }
    const getNextDate = () => {
        setPickDate(new Date(pickDate.setDate(pickDate.getDate() +1 )))
    }

    useEffect(()=>{
        setFold(children)
    }, [children])
    return (
        <Wrap>
            <DateArea>
                <Prev onClick={getPrevDate}><GrFormPrevious/></Prev>
                <DateTitle>{pickDate.toLocaleDateString()}</DateTitle>
                <Next onClick={getNextDate}><GrFormNext/></Next>
            </DateArea>
            {users.map((user, idx) => {
                return (
                <WTTemplate key={idx} fold={user.nickname !== fold} handleFold={handleFold} user={user} loginUser={children} pickDate={pickDate}>
                    
                </WTTemplate>
                )
            })}
            
        </Wrap>
    )
}

export default Worktime