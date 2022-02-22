import styled from "styled-components"

export const Spacer = styled.div`
    height: ${props =>
        props.small && `2rem` ||
        props.medium && `4rem` ||
        props.large && `6rem`
    };
    width: 100%;
    background: transparent;
    @media (max-width: 650px) {
        height: ${props =>
            props.small && `2rem` ||
            props.medium && `3rem` ||
            props.large && `4rem`
        };
    }
`