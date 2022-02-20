import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
`

export const Logo = styled.div`
    display: flex;
    gap: 1rem;
    transition: all .5s;

`

export const Name = styled.h5`
    font-family: 'Questrial', sans-serif;
    font-size: 1rem;
    margin-bottom: 0 !important;
`

export const Slogan = styled.h5`
    font-family: 'Questrial', sans-serif;
    font-size: 1rem;
    opacity: .6;
    margin-bottom: 0 !important;

`

export const Divider = styled.div`
    height: 16px;
    width: 1px;
    background: #00000030;
`

export const Contact = styled.h5`
    font-family: 'Questrial', sans-serif;
    font-size: 1rem;
    margin-bottom: 0 !important;
`