import React from 'react'
import { Container } from '../../common/index.js'
import { Wrapper, Title, Subtitle } from './styles.js'


export const Intro = ({className}) => {
    return (
        <Wrapper className={className} as={Container} >
            <Title >
                Rodrigo Daud. <br />Full Stack Designer.
            </Title>
            <Subtitle >
                Design & Technology
            </Subtitle>
        </Wrapper>
    )
}