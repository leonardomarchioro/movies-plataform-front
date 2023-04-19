import React, { useState } from "react";
import * as S from "./styles";
import { HiOutlineSearch } from "react-icons/hi";
import { FiEyeOff, FiEye } from "react-icons/fi";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: any;
  register: any;
  name: string;
}

interface InputSearch extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick: () => void;
}

export const Input: React.FC<InputSearch> = ({
  className,
  onClick,
  ...rest
}) => {
  const enterPress = (event: any) => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  return (
    <S.Common className={className}>
      <input {...rest} onKeyDown={enterPress} />
      <HiOutlineSearch onClick={onClick} />
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
      <S.ErrorContainer>{!!error && <span>{error}</span>}</S.ErrorContainer>
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
  const [show, setShow] = useState("password");

  const handleType = () => {
    show === "text" ? setShow("password") : setShow("text");
  };

  return (
    <S.Form error={!!error} className={className}>
      <span>{label}</span>
      <input {...register(name)} {...rest} type={show} />
        {
        show === "text" ? (
          <FiEyeOff onClick={handleType} />
        ) : (
          <FiEye onClick={handleType} />
        )}
      <S.ErrorContainer>{!!error && <span>{error}</span>}</S.ErrorContainer>
    </S.Form>
  );
};
