import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const Title = styled.h2`
    color: ${ props => props.theme.colors.lightgray };
`

export const SeeAll = styled.button`
    font-size: 20px;
`