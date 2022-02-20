import React from 'react'
import { Wrapper, Item } from './styles.js'


export const Post = ({ html, frontmatter }) => {
  return (
    <Wrapper>
      <Item>
        <h1>{frontmatter.title}</h1>
      </Item>
    </Wrapper>
  )
}