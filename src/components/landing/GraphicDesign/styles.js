import styled from "styled-components"

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow: show;
`

export const Title = styled.h3`
    color: ${ props => props.theme.colors.lightgray };
`

export const Description = styled.p`
    font-size: 20px;
    font-family: 'Roboto', sans;
    font-weight: 300;
    color: ${ props => props.theme.colors.dark };
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
    color: ${ props => props.theme.colors.dark };
`

export const Images = styled.div`
    width: 100%;
    transform: translateX(200px);
    max-width: 1400px;
    display: flex;
    flex-direction: row;
    overflow: show;
    align-items: center;
    justify-content: center;
    align-self: center;
`