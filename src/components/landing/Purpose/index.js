import React from 'react'
import { Wrapper, Text } from './styles.js'
import { Container } from '../../common/index.js'
import { Slide } from 'react-reveal'
import { StaticImage } from 'gatsby-plugin-image'

export const Purpose = () => {
    return (
            <Wrapper>
               <Slide up>
                    <Container>
                        <StaticImage src="../../../images/me.png" alt="My profile picture" width={400} height={400}/>
                        <Text>
                            I love helping companies and founders create delightly crafted
                            experiences to their products.
                        </Text>
                    </Container>
                </Slide>
            </Wrapper>

    )
}