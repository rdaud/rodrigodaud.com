import React from 'react'
import { Wrapper } from './styles.js'
import { SmallerContainer, Spacer } from '../../common/index.js'

export const Content = ({children}) => {
    return (
        <Wrapper as={SmallerContainer}>
            <Spacer large />
            { children }
        </Wrapper>
    )
}