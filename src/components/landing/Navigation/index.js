import React from 'react'
import { Wrapper, Item } from './styles.js'

export const Navigation = ({className}) => {
    return (
        <Wrapper className={className}>
            <Item index={1}>
                Work
            </Item>
            <Item index={2}>
                About
            </Item>
            <Item index={3}>
                Contact
            </Item>
        </Wrapper>
    )
}