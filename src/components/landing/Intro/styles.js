import styled, { keyframes } from "styled-components"

// const anim = keyframes`
//     0% {
//         transform: rotateX(0deg);
//     }

//     50% {
//         transform: rotateX(0deg);
//     }

//     100% {
//         transform: rotateX(360deg);

//     }
// `

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

export const Title = styled.h1`
    font-family: 'Questrial', sans-serif;
    font-size: 6rem;
    line-height: 1;
    margin: 0 !important;
    color: #222222;
`

export const Subtitle = styled.h2`
    font-family: 'Questrial', sans-serif;
    color: #222222;
`