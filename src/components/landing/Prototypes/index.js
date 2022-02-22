import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Wrapper, InnerWrapper, Title, Description, Button, Display } from './styles.js'
import { Container, Spacer } from '../../common/index.js'

export const Prototypes = () => {

    return (
        <Wrapper>
            <Container>
                <Spacer large />
                    <InnerWrapper>
                        <div>
                            <Title>
                                High-end Prototypes
                            </Title>
                            <Display>
                                Cutting edge prototypes that take usability testings to next level.
                            </Display>
                            <Description>
                            With the help of tools and coding languages like Framer and React, I design and code fully dynamic prototypes that almost feel as final product. But with the agility that only a prototype can give.
                            </Description>
                            <Button>
                                Explore prototypes
                            </Button>  
                        </div>
                        <div style={{
                            'alignSelf': 'center'
                        }}>
                            <StaticImage src="../../../images/prototypes.png" alt="Prototypes" /> 
                        </div>
                    </InnerWrapper>
                <Spacer large />
            </Container>
        </Wrapper>
    )
}
