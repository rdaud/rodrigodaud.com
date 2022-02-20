import styled, { keyframes } from "styled-components"

const anim = keyframes`
    from {
        transform: translateY(0px);
    }

    to {
        transform: translateY(-10px);
    }
`

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

`

export const Title = styled.h1`
    font-family: 'Questrial', sans-serif;
    font-size: 5rem;
    line-height: 1;
    animation-duration: 1s;
    animation-name: ${anim};
    animation-direction: forwards;
    animation-delay: .2s;
`

export const Subtitle = styled.h2`
    font-family: 'Questrial', sans-serif;
    animation-duration: 1s;
    animation-name: ${anim};
    animation-direction: forwards;
    animation-delay: .4s;
`