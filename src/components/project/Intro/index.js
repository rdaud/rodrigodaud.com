import React from 'react'
import { Wrapper, Title, Details } from './styles.js'
import { SmallerContainer, Spacer, Container } from '../../common'

export const Intro = ({ title, client, location, industry, timeline }) => {
    return (
        <Wrapper as={Container}>
           <Spacer large />
           <Spacer large />
            <Title>{title}</Title>
            <Spacer small />
            <Details>
                    <li>
                        <small>Client</small>
                        <p> { client }</p>    
                    </li>
                    <li>
                        <small>Location</small>
                        <p> { location }</p>  
                    </li>
                    <li>
                        <small>Industry</small>
                        <p> { industry }</p>  
                    </li>
                    <li>
                        <small>Timeline</small>
                        <p> { timeline }</p>
                    </li>              
            </Details>
            <Spacer medium />
        </Wrapper>
    )
}