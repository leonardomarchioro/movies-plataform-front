import styled from "styled-components";

export const Common = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.2rem;
    border-radius: 0.4rem;
    border-color: transparent;
    background-color: ${({ theme }) => theme.background.white};

    display: flex;
    flex-direction: row;
    justify-content: center;

    > input {
        width: 100%;
        height: 100%;
        border-color: transparent;
        font-weight: 500;
    }

    > svg {
        cursor: pointer;
        height: 100%;
        color: ${({ theme }) => theme.primary.dark};

        &:hover {
            transform: scale(1.1);
        }
    }
`;