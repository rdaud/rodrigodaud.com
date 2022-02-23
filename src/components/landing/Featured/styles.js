import styled from "styled-components"

export const Wrapper = styled.section`

& > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
   
`
export const Title = styled.h3`
    color: ${ props => props.theme.colors.lightgray };
`

export const CTA = styled.button`
    font-size: 1.2rem;
    font-family: 'Questrial', sans;
    margin-bottom: 0 !important;
    color: ${ props => props.theme.colors.dark };
    position: relative;
    align-self: flex-start;
    display: inline;

    &::before {
        content: '';
        position: absolute;
        bottom: -4px;
        height: 2px;
        width: 100%;
        transform: scaleX(0);
        transform-origin: top right;
        background: ${ props => props.theme.colors.blue };
        transition: transform .3s;
    }

    &:hover {
        color: ${ props => props.theme.colors.blue };
        &::before {
            transform: scaleX(1);
            transform-origin: top left;
            transition: transform .3s;
        }
    }
`