import React from 'react';
import { Wrapper, Logo, Name, Slogan, Divider, Contact } from './styles.js'
import { Link } from 'gatsby';

export const Header = () => {
    return (
        <Wrapper>
            <Link to="/">
                <Logo className="logo">
                    <Name>
                    Rodrigo Daud
                    </Name>
                    <Divider />
                    <Slogan>
                        Design & Tech
                    </Slogan>
                </Logo>
            </Link>
            <Contact className="contact">
                Contact
            </Contact>
        </Wrapper>
    )
}