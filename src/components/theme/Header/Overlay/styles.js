import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: none;
    background: white;
    position: absolute;
    top: 0;
    left: 0;

    @media (max-width: 650px) {
        display: block;
    }
`

