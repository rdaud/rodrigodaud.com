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
`

export const Logo = styled.div`
    display: flex;
    gap: 1rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all .5s;

`

export const Name = styled.h5`
    font-family: 'Questrial', sans-serif;
    font-size: 14px;
    margin-bottom: 0 !important;
`

export const Slogan = styled.h5`
    font-family: 'Questrial', sans-serif;
    font-size: 14px;
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
    font-size: 14px;
    margin-bottom: 0 !important;
    opacity: 0;
    transform: translateY(20px);
`