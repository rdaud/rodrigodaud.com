import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 650px) {
        flex-direction: column;
        gap: 1rem;
    }
`

export const Text = styled.h3`
    font-size: 2rem;
    max-width: 600px;
    font-family: 'Questrial', serif;
    color: ${ props => props.theme.colors.dark };
`