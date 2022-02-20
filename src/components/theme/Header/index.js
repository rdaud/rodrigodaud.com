import React from 'react';
import { Wrapper, Logo, Name, Slogan, Divider, Contact } from './styles.js'

export const Header = () => {
    return (
        <Wrapper>
            <Logo className="logo">
                <Name>
                Rodrigo Daud
                </Name>
                <Divider />
                <Slogan>
                    Design & Tech
                </Slogan>
            </Logo>
            <Contact className="contact">
                Contact
            </Contact>
        </Wrapper>
    )
}