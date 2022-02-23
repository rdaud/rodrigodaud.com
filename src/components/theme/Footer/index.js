import React from 'react';
import {
        Wrapper,
        ProfileInfo,
        Addresses,
        ImageWrapper,
        InnerWrapper,
        Contact,
        Button,
        Deployment
} from './styles.js'
import { Container } from '../../common/index.js';
import { StaticImage } from 'gatsby-plugin-image'


export const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <InnerWrapper>
                    <ProfileInfo>
                        <StaticImage
                            src="../../../images/me.png"
                            alt="My profile picture"
                            width={100}
                            height={100}
                            layout="fixed"
                            as={ImageWrapper}
                        />
                        <Addresses>
                            <h4>
                                Rodrigo Daud • Design & Tech
                            </h4>
                            <ul>
                                <li>
                                    Currently based: São Paulo(BR)
                                </li>
                                <li>
                                    Find me on:
                                </li>
                            </ul>
                        </Addresses>
                    </ProfileInfo>
                    <Contact>
                        <h5>
                            Jobs inquiries or freelances opportunities? <a href="mailto:rodrigodaudskeff@gmail.com">Contact me.</a>
                        </h5>
                        {/* <Button>
                            Contact me
                        </Button> */}
                    </Contact>
                 
                </InnerWrapper>
            </Container>
                <Deployment>
                        <p>
                        Built with <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby.js</a> and deployed on <a href="https://www.vercel.com" target="_blank">Vercel</a>
                        </p>
                </Deployment>
        </Wrapper>
    )
}