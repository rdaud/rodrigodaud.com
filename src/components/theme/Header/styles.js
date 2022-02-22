import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 72px;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    transform: translateY(0px);
    transition: all 1s;
    display: flex;

    & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }
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
    color: ${ props => props.theme.colors.dark };
`

export const Slogan = styled.h5`
    font-family: 'Questrial', sans-serif;
    font-size: 1rem;
    margin-bottom: 0 !important;
    color: ${ props => props.theme.colors.dark };
`

export const Divider = styled.div`
    height: 16px;
    width: 1px;
    background: #00000030;
`

export const Item = styled.h5`
    font-family: 'Questrial', sans-serif;
    font-size: 1rem;
    margin-bottom: 0 !important;
    color: ${ props => props.theme.colors.dark };
    position: relative;

    &::before {
        content: '';
        position: absolute;
        bottom: -4px;
        height: 2px;
        width: 100%;
        transform: scaleX(0);
        transform-origin: top right;
        background: ${ props => props.theme.colors.blue };
        transition: transform .3s;
    }

    &:hover {
        color: ${ props => props.theme.colors.blue };
        &::before {
            transform: scaleX(1);
            transform-origin: top left;
            transition: transform .3s;
        }
    }
`

export const NavItens = styled.div`
    display: flex;
    gap: 2rem;
    @media (max-width: 650px) {
        display: none;
    }
`