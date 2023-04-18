import React from "react";
import * as S from "./styles";

import { RenderModalBackdropProps } from "react-overlays/cjs/Modal";

interface IProps {
  children: React.ReactNode;
  show: boolean;
  close: () => void;
  height?: string;
  width?: string;
}

const Modal: React.FC<IProps> = ({
  children,
  show,
  close,
  height = "80%",
  width = "50%",
}) => {
  const renderBackdrop = (props: RenderModalBackdropProps) => (
    <S.BackgroundModal {...props} />
  );

  return (
    <S.ModalContainer
      height={height}
      width={width}
      onHide={close}
      show={show}
      renderBackdrop={renderBackdrop}
    >
      {children}
    </S.ModalContainer>
  );
};

export default Modal;
