import styled from "styled-components";

export const Wrapper = styled.footer`
    position: relative;
    width: 100%;
    height: 400px;
    border-top: 1px solid #00000010;
    background: ${ props => props.theme.colors.white };
`

export const ProfileInfo = styled.div`
    display: flex;
    gap: 2rem;
    align-content: center;  
`

export const Addresses = styled.div`

`

export const ImageWrapper = styled.div`
    border-radius: 100px;
    box-shadow: 0 10px 30px #00000040;
    overflow: hidden;
    width: 100px;
    height: 100px;
`

export const InnerWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 850px) {
        flex-direction: column;
        gap: 2rem;
    }
`

export const Contact = styled.div`
    max-width: 350px;
    h5 {
        text-align: center;
    }
    a {
        color: ${ props => props.theme.colors.blue };
        text-weight: bold;
    }
`

export const Button = styled.button`
    height: 56px;
    align-self: center;
    font-size: .750rem;
    padding: 0 1.250rem;
    border-radius: .250rem;
    border: 1px solid #00000020;
    font-weight: bold;
`
export const Deployment = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;
    background: ${ props => props.theme.colors.blue };
    width: 100%;
    p {
        margin: 0 !important;
        font-family: 'Arial', sans !important;
        color: ${ props => props.theme.colors.white };
        font-size: .650rem;

        a {
            color: white !important;
            text-decoration: underline;
        }
    }
`