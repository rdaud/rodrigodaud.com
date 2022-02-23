import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Wrapper, InnerWrapper, Title, CTA, Button, Display } from './styles.js'
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
                           
                            <CTA>
                                Explore prototypes
                            </CTA>  
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
