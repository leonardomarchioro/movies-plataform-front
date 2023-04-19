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

