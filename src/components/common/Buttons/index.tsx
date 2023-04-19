import React, { ReactNode } from 'react';

import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; 
}

export const ButtonPrimary: React.FC<ButtonProps> = ({children, className, ...rest}) => {
  return <S.Primary className={className}>
    <button {...rest}>{children}</button>
  </S.Primary>;
}

export const ButtonSecondary: React.FC<ButtonProps> = ({children, className, ...rest}) => {
    return <S.Secondary className={className}>
        <button {...rest}>{children}</button>
    </S.Secondary>;
  }

export const ButtonDefault: React.FC<ButtonProps> = ({children, className, ...rest}) => {
    return <S.Default className={className}>
        <button {...rest}>{children}</button>
    </S.Default>;
  }