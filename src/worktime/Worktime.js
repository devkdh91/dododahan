import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import WTTemplate from './components/WTTemplate'
import axios from 'axios'

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
const Worktime = ({children}) => {
    const client = axios.create()
    const users = [{name: '김혜진', nickname:'heni', role:'CEO'}, 
                   {name:'김다한', nickname:'dahan', role:'CTO'}, 
                   {name: '김석현', nickname:'bro', role:'CMO'}]
    const [fold, setFold] = useState('')
    const handleFold = (nickname) => {
        setFold(nickname)
    }

    useEffect(()=>{
        setFold(children)
    }, [children])
    return (
        <Wrap>
            {users.map((user, idx) => {
                return (
                <WTTemplate key={idx} fold={user.nickname !== fold} handleFold={handleFold} user={user} loginUser={children}>
                    
                </WTTemplate>
                )
            })}
            
        </Wrap>
    )
}

export default Worktime