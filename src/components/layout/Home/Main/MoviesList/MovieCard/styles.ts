import styled from "styled-components";

export const Card = styled.div`
  width: 50%;
  max-width: 30rem;
  min-width: 20rem;
  max-height: 20rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.background.secondary};

  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100%;

`;

export const RightContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
    justify-content: space-between;

  padding: 0.5rem;
  gap: 0.4rem;

  .rent-button {
    height: 2rem;
    width: 90%;
    position: relative;
    bottom: 0;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  position:relative;
`;

export const NoteDisplay = styled.span<{ color: any }>`
  background-color: ${({ color }) => color};

  position: relative;
  bottom: 3.3rem; 
  z-index: 10;

  width: 3rem;
  height: 3rem;

  border-radius: 0.5rem;
  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  color: ${({ theme }) => theme.text.default};
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
`

export const Title = styled.h3`

`;

export const Overview = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;

  font-size: 0.9rem;
`;
