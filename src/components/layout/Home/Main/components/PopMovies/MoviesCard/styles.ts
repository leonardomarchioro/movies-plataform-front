import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 0.3rem;

    display: flex;
    flex-direction: column;

    cursor: pointer;

    > img {
        border-radius: 0.3rem 0.3rem 0 0;
    }
`

export const NoteDisplay = styled.span<{color: any}>`
    background-color: ${({ color }) => color};
    color: ${({ theme }) => theme.text.primary};
    padding: 0.3rem;
    text-align: center;
    font-weight: 600;
`;

export const Span = styled.span`
    width: 100%;
    padding: 0.3rem 0.1rem;
    background-color: #000;
    opacity: 0.8;
    font-weight: 500;
`;

