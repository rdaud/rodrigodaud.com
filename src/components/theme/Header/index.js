import React, { useState } from 'react';
import { Wrapper, Logo, Name, Slogan, Divider, Item, NavItens } from './styles.js'
import { Link } from 'gatsby';
import { Menu } from './Menu';
import { Overlay } from './Overlay'
import { Container } from '../../common/index.js';
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import './header.css'

let prevScrollPosition = 0;

const activeStyles = {
    'background': 'red'
}

window.addEventListener('scroll', e => {

    const headerEl = document.querySelector('.header')
    
    let currentScrollPosition = window.scrollY

    if (currentScrollPosition > prevScrollPosition + 10) {
        headerEl.classList.add('hide')
    }
    if (currentScrollPosition < prevScrollPosition - 10) {
        headerEl.classList.remove('hide')
    }
    prevScrollPosition = currentScrollPosition


export const Header = () => {

    const [ active, isActive ] = useState(false)


    })

    return (
        <>
        { isActive && <Overlay /> }
        <Wrapper className="header">
            <Container>

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
            <Menu />
            <NavItens>
                <AniLink
                    cover
                    bg="#000000"
                    direction="up"
                    duration={2}
                    entryOffset={300}
                    to="/work"
                 >
                    <Item className="work">
                        Work
                    </Item>
                </AniLink>
                <Link to="/contact" activeStyle={activeStyles}>
                    <Item className="contact">
                        Contact
                    </Item>
                </Link>
                <Link to="/about" activeStyle={activeStyles}>
                    <Item className="about">
                        About
                    </Item>
                </Link>
            </NavItens>
            </Container>
        </Wrapper>
        </>
    )
}