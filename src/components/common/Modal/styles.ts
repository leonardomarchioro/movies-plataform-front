import { Modal } from "react-overlays";
import styled from "styled-components";

export const BackgroundModal = styled.section`
  position: fixed;
  z-index: 1080;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.8;
`;

export const ModalContainer = styled(Modal)<{
    width: string,
    height: string
}>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1080;
  min-width: 15rem;
  width: ${({ width }) => width};
  max-width: 500px;
  min-height: 15rem;
  height: ${({ height }) => height};
  max-height: 100vh;
  background-color: transparent;
`;
