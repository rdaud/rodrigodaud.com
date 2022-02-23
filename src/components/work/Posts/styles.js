import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
`

export const Post = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-basis: min-content;
    align-items: flex-start;
    cursor: pointer;
    padding-bottom: 1rem;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        bottom: -4px;
        height: 4px;
        width: 100%;
        transform-origin: top left;
        transform: scaleX(1);
        background: ${ props => props.theme.colors.dark };
        transition: all .5s ease-in-out;
    }
    &:hover {
        color: blue !important;

        p {
            color: blue !important;
        }

        &::before {      
            transform-origin: top left;
            transform: scaleX(1);
            background: ${ props => props.theme.colors.blue };
        }
        transition: all .5s ease-in-out;

    }
`

export const Display = styled.p`
    font-size: 4rem;
    line-height: .9 !important;
    font-weight: bold;
    font-family: 'Questrial', sans-serif;
    padding: 2rem 0;
`

export const Tag = styled.small`
text-transform: capitalize;

    &:not(:last-child):after  {
        content: '•';  
        margin: 0 .250rem;
        background: transparent;
        position: relative;
        display: inline-block;
    }
`
