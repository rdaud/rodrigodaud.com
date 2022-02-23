import styled from "styled-components"


export const Wrapper = styled.section`
    width: 100vw;
    position: relative;
   div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        @media (max-width: 850px) {
            flex-direction: column;
            gap: 2rem;
            align-items: flex-start;
        }
    }

    img {
        box-shadow: 10px 10px 30px #000000;
        flex-shrink: 1;
    }
`

export const Text = styled.h3`
    max-width: 600px;
    align-self: flex-end;
    margin: 0 !important;
    flex-shrink: 3;
    color: ${ props => props.theme.colors.dark };
`