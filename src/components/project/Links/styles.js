import styled from "styled-components"

export const Wrapper = styled.ol`
   & > * { display: flex;
   flex-direction: column;
   }
`

export const Item = styled.li`
    font-size: 1rem;
    text-transform: capitalize;
    flex-basis: min-content;
    cursor: pointer;
    align-self: flex-start;
    transition: color .3s ease-out;
    color: ${ props => props.theme.colors.lightgray};
    &:hover {
        color: ${ props => props.theme.colors.black};
        transition: color .3s ease-out;
    }
`

