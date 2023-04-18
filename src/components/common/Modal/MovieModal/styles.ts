import styled from "styled-components";

export const Root = styled.div`
    background-color: ${({ theme }) => theme.background.primary};
    border-radius: 1rem;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Header = styled.div`
    width: 100%;

    border-radius: 1rem 1rem 0 0;

    background-color: ${({theme}) => theme.background.default};

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h2`
    padding: 1rem;
    height: 4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text.primary};
`
export const Text = styled.p`
    color: ${({ theme }) => theme.text.primary};
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.text.secondary};

`;

export const Conetent = styled.div<{img: any}>`
    width: 100%;
    height: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Backdrop = styled.img`
    width: 100%;
`

export const Footer = styled.div`
    width: 100%;
    padding: 1rem;
`;