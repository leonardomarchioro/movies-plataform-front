import styled from "styled-components";

export const Form = styled.form`
    width: 80%;
    height: 70vh;
    background-color: ${({ theme }) => theme.background.secondary};
    padding: 2rem;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerInputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
    
    .send-button {
        height: 3rem;
        width: 80%;
    }

    .input {
        width: 100%;
    }
`;

export const BottomContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    .register-button {
        height: 3rem;
        width: 80%;
    }
`;

export const Spacer = styled.div`
    width: 60%;
    background-color: ${({ theme }) => theme.background.default};
    border-radius: 1rem;
    height: 0.1rem;
`

export const Title = styled.h2`
    width: 100%;
    color: ${({ theme }) => theme.text.secondary};
`;

export const Span = styled.span`
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.text.secondary};
`;