import styled from "styled-components";

export const Container = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
`
export const EmptyContainer = styled.div`
    display: flex;
    align-items: center;
    height: 45vh;

    font-weight: 600;
    font-size: 2rem;
    color: ${({ theme }) => theme.text.secondary};

`