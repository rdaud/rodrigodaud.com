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
        color: ${ props => props.theme.colors.lightgray };
        margin-bottom: .5rem;
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
    font-size: 1.1rem !important;
    text-transform: capitalize;
    cursor: pointer;
    transition: color .3s ease-out;
    font-family: Martel, sans;
    color: ${ props => props.theme.colors.dark };
    &:hover {
        color: ${ props => props.theme.colors.blue } !important;
        transition: color .3s ease-out;
    }
`

