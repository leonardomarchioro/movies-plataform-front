import React from "react";
import * as S from "./styles"
import { HiOutlineSearch } from "react-icons/hi"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: any;
  register: any;
  name: string;
}

interface InputSearch extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick: () => void;
}


export const Input: React.FC<InputSearch>  = ({
    className,
    onClick,
    ...rest
  }) => {

    const enterPress = (event: any) => {
      if (event.key === "Enter") { 
        onClick();
      }
    }

    return (
      <S.Common className={className}>
        <input {...rest} onKeyDown={enterPress}/>
        <HiOutlineSearch onClick={onClick}/>
      </S.Common>
    );
  };

export const InputFormCommon: React.FC<InputProps> = ({
  label,
  register,
  name,
  error,
  className,
  ...rest
}) => {
  return (
    <S.Form error={!!error} className={className}>
      <span>{label}</span>
      <input {...register(name)} {...rest} />
      <div>{!!error && <span>{error}</span>}</div>
    </S.Form>
  );
};

export const InputFormPassword: React.FC<InputProps> = ({
  label,
  register,
  name,
  error,
  className,
  ...rest
}) => {
  return (
    <S.Form error={!!error} className={className}>
      <span>{label}</span>
      <input {...register(name)} {...rest} />
      <div>{!!error && <span>{error}</span>}</div>
    </S.Form>
  );
};
