import React from 'react'
import { graphql, useStaticQuery, navigate } from 'gatsby'
import { Wrapper, Post, Display, Tag } from './styles.js'
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
                    tags
                }
                }
            }
            }
        }
    `)

  



    return (
        <Wrapper as={Container}>
            { edges.map((item,index) => {

                const title = item.node.frontmatter.title
                const slug = item.node.frontmatter.slug
                const tags = item.node.frontmatter.tags

                function handleClickEvent() {
                    navigate(slug)
                }

                console.log(tags)
                

                return (
                    <Post onClick={handleClickEvent}>
                        <Display> {title} </Display>
                        <div>
                        { tags.map((tag,index) => (
                            <Tag key={index}> { tag } </Tag>
                        ))}
                        </div>
                    </Post>
                )
            }) }
        </Wrapper>
    )
}

