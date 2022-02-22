import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`


export const Title = styled.h1`
    font-size: 5rem;
    font-family: 'Questrial', sans;
    line-height: 1;
`

export const Details = styled.ul`
    display: flex;
    gap: 3rem;

     small {
        color: ${props => props.theme.colors.lightgray} !important;
    }

    @media (max-width: 650px) {
        flex-direction: column;
        gap: 0;
    }

`