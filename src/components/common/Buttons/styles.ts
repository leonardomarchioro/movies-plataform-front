import styled from "styled-components";

export const Primary = styled.div`
    width: 100%;
    height: 100%;

    > button {
        width: 100%;
        height: 100%;
        padding: 0.2rem;
        cursor: pointer;
        border-radius: 0.4rem;
        border-color: transparent;
        color: ${({ theme }) => theme.text.primary};
        background-color: ${({ theme }) => theme.primary.dark};
        font-weight: 500;

        &:hover {
            transform: scale(1.09);
            transition: .9s ease;
        }
    }
`;

export const Secondary = styled.div`
    width: 100%;
    height: 100%;

    > button {
        width: 100%;
        height: 100%;
        padding: 0.2rem;
        cursor: pointer;
        border-radius: 0.4rem;
        border-color: transparent;
        color: ${({ theme }) => theme.text.secondary};
        background-color: ${({ theme }) => theme.secondary.dark};
        font-weight: 500;

        &:hover {
            transform: scale(1.09);
            transition: .9s ease;
        }
    }
`;

export const Default = styled.div`
    width: 100%;
    height: 100%;

    > button {
        width: 100%;
        height: 100%;
        padding: 0.2rem;
        cursor: pointer;
        border-radius: 0.4rem;
        border-color: transparent;
        color: ${({ theme }) => theme.text.default};
        background-color: ${({ theme }) => theme.background.default};
        font-weight: 500;

        &:hover {
            transform: scale(1.09);
            transition: .9s ease;
        }
    }
`;