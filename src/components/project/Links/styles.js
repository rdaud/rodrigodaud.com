import styled from "styled-components"

export const Wrapper = styled.ol`
 
`

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-items: flex-start;

    small {
        flex-basis: 100%;
        color: ${ props => props.theme.colors.lightgray }
    }

    li {
        padding: 0 !important;
        margin-right: 2rem;
        font-size: 1.1rem;
    }

    @media (max-width: 650px) {
        flex-direction: column;
        gap: 1rem;
    }
`


export const Item = styled.li`
    font-size: 20px !important;
    text-transform: capitalize;
    font-family: 'DM Serif', serif;
    cursor: pointer;
    transition: color .3s ease-out;
    color: ${ props => props.theme.colors.dark };
    &:hover {
        color: ${ props => props.theme.colors.yellow } !important;
        transition: color .3s ease-out;
    }
`

