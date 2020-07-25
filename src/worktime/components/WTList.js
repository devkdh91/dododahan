
import React from 'react';
import styled from 'styled-components';
import WTListItem from './WTListItem'

const ListWrap = styled.div`
    width:100%;
    height:100%;
    & > div:first-child {
        color:black;
    }
    & > div:first-child > div:first-child{
        text-align:center;
    }
`

const WTList = ({children}) => {
    const task = {
        taskName: '업무내용',
        startTime: ['시작시간'],
        pauseTime: [],
        endTime: '종료시간',
        period: '진행시간',
    }
    return (
        <ListWrap>
            <WTListItem task={task}/>
            {children}
        </ListWrap>
    )
}

export default WTList