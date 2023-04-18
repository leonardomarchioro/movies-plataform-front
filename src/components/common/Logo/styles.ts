import styled from "styled-components";

export const Logo = styled.div`
    font-family: 'Anton', sans-serif;
    font-size: 48px;
    font-weight: bold;
    color: ${({theme}) => theme.primary.main};
    text-transform: uppercase;
    letter-spacing: 2px;
`