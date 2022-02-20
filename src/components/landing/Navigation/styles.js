import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: stretch;
    align-content: stretch;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

export const Item = styled.h1`
    background: gray;
    flex-grow: 1;
    flex-basis: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ props => props.theme.colors.dark };
    border-right: 1px solid #c2c2c2;
    border-top: 1px solid #c2c2c2;
    margin-bottom: 0;
    background: white;
    cursor: pointer;
`

