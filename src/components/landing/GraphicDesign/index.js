import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Wrapper, Display, Title, Images } from './styles.js'
import { Container } from '../../common/index.js'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Slide } from 'react-reveal'
import styled from 'styled-components'

const StyledImage = styled(GatsbyImage)`
    cursor: pointer;
    width: 100%;
    border: 1px solid #00000020;
    box-shadow: 0 0px 20px #00000000;
    transition: all .5s;
    transform: scale(1) translateY(${ props => props.index * 100}px) translateX(${ props => props.index * -200}px);
    &:hover {
        transform: scale(1.1) translateY(${ props => props.index * 100}px) translateX(${ props => props.index * -200}px);
        border: 1px solid transparent;
        box-shadow: 0 30px 40px #00000030;
        transition: all .5s;
    }
`

export const GraphicDesign = () => {

    const { allFile: { edges } } = useStaticQuery(graphql`
        query QueryGraphicDesignImages {
            allFile(
            filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "graphic-design"}}
            ) {
            edges {
                node {
                id
                base
                childImageSharp {
                    gatsbyImageData
                  }
                }
            }
            }
        }
    `)

    console.log(edges)

    return (
        <Wrapper>
            <Container>
                <Title>
                    Graphic Design
                </Title>
                <Display>
                    Before becoming an Experience Designer, I worked for 8 years as Graphic Designer & Illustrator.
                </Display>
                <Images>
                    { edges.map((img, index) => {
                        const image = getImage(img.node)
                        return (
                            <Slide up>
                            <StyledImage index={index} key={img.node.id} image={image} /> 
                            </Slide>
                        )
                    }) }
                </Images>
            </Container>
        </Wrapper>
    )
}
