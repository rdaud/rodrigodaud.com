import React from 'react'
import { Wrapper, Item } from './styles.js'
import { Spacer, SmallerContainer } from '../../common/index.js'
import gsap from 'gsap'
import ScrollToPlugin from '../../../../node_modules/gsap/ScrollToPlugin.js'
gsap.registerPlugin(ScrollToPlugin)



export const Links = ({sections}) => {

    function handleClickEvent(e) {
        const id_ = e.target.getAttribute('id').replace(/[^a-zA-Z ]/g, '')
        console.log(id_)
        gsap.to(window, {duration: .3, scrollTo: {y: `#${id_}`, offsetY: 32 }, ease: "power2"});
    }

    return (
        <Wrapper>
            <SmallerContainer>
                <h4>Timeline</h4>
                { sections.map((item,index) => (
                    <Item key={index} id={`${item}-${index}`} onClick={handleClickEvent}>
                        {item}
                    </Item>
                )) }
                <Spacer large />
            </SmallerContainer>
        </Wrapper>
    )
}