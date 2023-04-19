import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 2rem;
`;

export const Section = styled.section`
    width: 100%;
    height: 15rem;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    background-color: ${({ theme }) => theme.primary.dark};


    .search-input {
        height: 2rem;
        width: 20rem;
    }
`

export const Text = styled.p`
    width: 100%;
    color: ${({ theme }) => theme.text.primary};
    font-weight: 700;
    font-size: 2.5rem;
    font-family: "Anton", sans-serif;
    text-align: center;
`
export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Pagination = styled(ReactPaginate)`
    display: flex;
    flex-direction: row;
    gap: 0.2rem;
    padding: 1rem;

    > li {
        background-color: ${({ theme}) => theme.background.secondary};
        color: ${({ theme }) => theme.text.secondary};
        border-radius: 0.2rem;
        padding: 0.2rem 0.5rem;
        cursor: pointer;
    }

`;