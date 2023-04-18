import styled from "styled-components";


export const Container = styled.div`
    height: auto;
    padding: 1rem;
    background-color: ${({ theme }) => theme.background.secondary};

`
export const Text = styled.h2`
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.text.secondary};
`