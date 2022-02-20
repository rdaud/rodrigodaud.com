import React from 'react'
import { Wrapper } from './styles.js'
import { SmallerContainer } from '../../common/index.js'

export const Content = ({children}) => {
    return (
        <Wrapper as={SmallerContainer}>
            { children }
        </Wrapper>
    )
}