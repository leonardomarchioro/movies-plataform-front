import styled from "styled-components";

export const Common = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.3rem 0.5rem;
    border-radius: 0.4rem;
    border-color: transparent;
    background-color: ${({ theme }) => theme.background.primary};
    
    display: flex;
    flex-direction: row;
    justify-content: center;

    > input {
        width: 100%;
        height: 100%;
        border-color: transparent;
        font-weight: 500;
        background-color: transparent;
        color: ${({ theme }) => theme.text.primary};

      &::placeholder {
        color: ${({ theme }) => theme.text.secondary};

        font-weight: 400;
        font-size: 16px;
      }
    }

    &:hover {
      background-color: ${({ theme }) =>
        theme.background.default};
    }
    &:focus {
      background-color: ${({ theme }) =>
        theme.background.default};
      border-color: ${({ theme }) => theme.background.primary};
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

export const Form = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > label {
    width: 100%;

    color: ${({ theme }) => theme.text.default};

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 6px;
  }

  > input {
    width: 100%;
    height: 40px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid;
    border-color: ${({ error }: { error: boolean }) =>
      error
        ? ({ theme }) => theme.error.main
        : ({ theme }) => theme.background.primary};
    padding: 0px 16px;
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.background.primary};

    &::placeholder {
      color: ${({ theme }) => theme.text.secondary};

      font-weight: 400;
      font-size: 16px;
    }

    &:hover {
      background-color: ${({ theme }) =>
        theme.background.default};
    }
    &:focus {
      background-color: ${({ theme }) =>
        theme.background.default};
      border-color: ${({ theme }) => theme.background.primary};
    }
  }
  > div {
    height: 10px;

    > span {
      font-size: 12px;
      color: ${({ theme }) => theme.error.main};
    }
  }
`