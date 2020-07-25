import React from 'react';
import styled from 'styled-components';


const TemplateWrap = styled.div`
    width:1024px;
    /* height:30rem; */
    height:${props => props.fold ? '5rem' : '30rem'};
    border-radius: 1rem 1rem 0 0 ;
    margin:0 auto;
    background:#ADEEE3;
    overflow:hidden;
    transition:all 2s;
`

const WTTemplate = ({children, fold}) => {
    return (
        <TemplateWrap fold={fold}>
            {children}
        </TemplateWrap>
    )
}

export default WTTemplate