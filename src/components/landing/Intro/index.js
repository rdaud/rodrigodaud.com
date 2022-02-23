import React from 'react'
import { Wrapper, Title, Subtitle } from './styles.js'
import { Container, Spacer } from '../../common/index.js'
import { Slide } from 'react-reveal'


export const Intro = () => {

    return (
        <Wrapper className="intro">
            <Container>
            <Slide up>
                <Title>
                    Rodrigo Daud. <br />
                    <span style={{
                        "color": "#3138DE"
                    }}>Full Stack Designer.</span>
                </Title>
            </Slide>
            </Container>
        </Wrapper>
    )
}