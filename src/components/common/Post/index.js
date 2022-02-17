import React from 'react'


export const Post = ({ html, frontmatter }) => {
  return (
    <>
      <h1>{frontmatter.title}</h1>
    </>
  )
}