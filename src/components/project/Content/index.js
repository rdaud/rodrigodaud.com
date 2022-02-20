import React from 'react'
import { Wrapper } from './styles.js'
import { SmallerContainer, Container, Spacer } from '../../common/index.js'

export const Content = ({children}) => {
    return (
        <Wrapper as={Container}>
            <Spacer large />
            { children }
        </Wrapper>
    )
}