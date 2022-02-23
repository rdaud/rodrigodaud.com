import styled from "styled-components"

export const Wrapper = styled.main`
    width: 100%;
    background: ${ props => props.bg ? props.bg : 'transparent'};
`