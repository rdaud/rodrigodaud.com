import React from 'react'
import { graphql, useStaticQuery, navigate } from 'gatsby'
import { Wrapper, Post, Display, Tag } from './styles.js'
import { Container } from '../../common/index.js'
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"



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
        <Wrapper>
            { edges.map((item,index) => {

                const title = item.node.frontmatter.title
                const slug = item.node.frontmatter.slug
                const tags = item.node.frontmatter.tags

                function handleClickEvent() {
                    navigate(slug)
                }

                
                return (
                    <AniLink
                        to={slug}
                        cover
                        bg="#000000"
                        direction="up"
                        duration={2}
                        entryOffset={300}
                    >
                        <Post onClick={handleClickEvent} key={index}>
                            <Display>
                                {title}
                            </Display>
                            <div>
                            { tags.map((tag,index) => (
                                <Tag key={index}>
                                    { tag }
                                </Tag>
                            ))}
                            </div>
                        </Post>
                    </AniLink>
                )
            }) }
        </Wrapper>
    )
}

