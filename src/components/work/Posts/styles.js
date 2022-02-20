import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
`

export const Post = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: border-bottom .3s;

    &:hover {
        border-bottom: 5px solid black;
        transition: border-bottom .3s;
    }
`

export const Display = styled.p`
    font-size: 72px;
    line-height: 1;
    font-weight: bold;
    font-family: 'Questrial', sans-serif;
    padding: 2rem 0;
`

export const Tag = styled.small`
    &:not(:last-child):after  {
        content: '';
        width: 1px;
        height: 10px;
        margin: 0 .250rem;
        background: #00000030;
        position: relative;
        display: inline-block;
    }
`
