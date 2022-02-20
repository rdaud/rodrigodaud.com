import React from 'react'
import { Wrapper, Item } from './styles.js'
import { navigate } from 'gatsby'


export const Navigation = ({ className }) => {

    function handleClickEvent(e) {

        const navigation = document.querySelector('.navigation')
        const childLength = navigation.childNodes.length
        let arr = []
        let index = 1;

        navigation.childNodes.forEach((node,index) => {
            if (e.target.classList[2] === 'work') {
                node.classList.add('rotate-works')
            }
            if (e.target.classList[2] === 'about') {
                node.classList.add('rotate-about')
            }
            if (e.target.classList[2] === 'contact') {
                node.classList.add('rotate-contact')
            }
            if (node.classList[2].includes(e.target.classList[2])) {
                return;
            }
            node.style.transitionDelay = `${index * .5}s`
        })

        setTimeout(() => {
            navigate("/work")
        }, 2000)

     
    }

    return (
        <Wrapper className={className}>
            <Item className="work" onClick={handleClickEvent} key={1}>
                Work
            </Item>
            <Item className="about" onClick={handleClickEvent} key={2}>
                About
            </Item>
            <Item className="contact" onClick={handleClickEvent} key={3}>
                Contact
            </Item>
        </Wrapper>
    )
}