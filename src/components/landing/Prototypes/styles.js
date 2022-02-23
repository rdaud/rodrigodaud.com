import styled from "styled-components"

export const Wrapper = styled.section`
    background: ${ props => props.theme.colors.lightgray };
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

export const Title = styled.h3`
    color: ${ props => props.theme.colors.dark };
`

export const Description = styled.p`
    font-size: 20px;
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
    color: ${ props => props.theme.colors.black };

`

export const CTA = styled.button`
  
    margin-bottom: 0 !important;
    font-size: 1.2rem;
    font-family: 'Questrial', sans;
    color: ${ props => props.theme.colors.white };
    position: relative;
    align-self: flex-start;
    display: inline;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        bottom: -4px;
        height: 2px;
        width: 100%;
        transform: scaleX(0);
        transform-origin: top right;
        background: ${ props => props.theme.colors.blue };
        transition: transform .5s;
    }

    &:hover {
        color: ${ props => props.theme.colors.blue };
        &::before {
            transform: scaleX(1);
            transform-origin: top left;
            transition: transform .5s;
        }
    }
`