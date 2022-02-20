import styled from "styled-components"

export const Wrapper = styled.ol`
 
`

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    align-items: flex-start;

    h4, li {
        padding: 0 !important;
        margin: 0 !important;
    }

    @media (max-width: 650px) {
        flex-direction: column;
        gap: 1rem;


    }
`


export const Item = styled.li`
    font-size: 1rem;
    text-transform: capitalize;
    cursor: pointer;
    transition: color .3s ease-out;
    color: ${ props => props.theme.colors.lightgray };
    &:hover {
        color: ${ props => props.theme.colors.black };
        transition: color .3s ease-out;
    }
`

