import styled from "styled-components"

export const Wrapper = styled.div`
    background: ${ props => props.theme.colors.black };
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    position: relative;
`

export const InnerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 4rem;
    @media (max-width: 850px) {
        flex-direction: column;
        gap: 2rem;
    }
`

export const Title = styled.h2`
    color: ${ props => props.theme.colors.lightgray };
`

export const Description = styled.p`
    font-size: 20px;
    font-family: 'Roboto', sans;
    font-weight: 300;
    color: ${ props => props.theme.colors.white };
`

export const Button = styled.button`
    font-size: 20px;
    color: ${ props => props.theme.colors.blue };
`

export const Display = styled.p`
    font-size: 72px;
    line-height: 1;
    font-weight: bold;
    font-family: 'Questrial', sans-serif;
    padding: 2rem 0;
    color: ${ props => props.theme.colors.white };

`