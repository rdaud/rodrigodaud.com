import styled from "styled-components"

export const Wrapper = styled.div`
    width: 32px;
    flex-direction: column;
    gap: .225rem;
    display: none;

    @media (max-width: 650px) {
        display: flex;
    }
`

export const Bar = styled.div`
    width: 100%;
    height: 2px;
    background: black;
`