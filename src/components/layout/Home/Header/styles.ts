import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 6rem;
    padding: 1rem;

    background-color: ${({ theme }) => theme.background.primary};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`;

export const Container = styled.div`
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    width: 20rem;

    .user-buttons {
        width: 10rem;
    }
`;

export const Text = styled.h3`
    width: auto;
`