import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { Wrapper } from './styles.js'
import { Container } from '../../common/index.js'

export const Posts = () => {

    const { allMarkdownRemark: { edges } } = useStaticQuery(graphql`
        query MyQuery {
            allMarkdownRemark {
            edges {
                node {
                html
                frontmatter {
                    id
                    slug
                    title
                }
                }
            }
            }
        }
    `)

  console.log(edges)

    return (
        <Wrapper as={Container}>
            { edges.map((item,index) => {

                const title = item.node.frontmatter.title
                const slug = item.node.frontmatter.slug

                return (
                    <>
                    <Link to={slug}>
                    <h3> {title} </h3> 
                    </Link>
                    </>
                )
            }) }
        </Wrapper>
    )
}

