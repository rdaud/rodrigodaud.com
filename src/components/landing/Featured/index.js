import React from 'react'
import { Container } from '../../common'
import { Posts } from '../../work/Posts'
import { Wrapper, Title, CTA } from './styles.js'
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Featured = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    Featured projects
                </Title>
                <Posts />
                <AniLink to="/work" slide direction="up" duration={1}>
                    <CTA>
                        See all
                    </CTA>
                </AniLink>
            </Container>
        </Wrapper>
    )
}