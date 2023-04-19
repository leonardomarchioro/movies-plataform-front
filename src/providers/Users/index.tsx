import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserProfile, UserRegister, UserSignIn } from "../../types/User";
import { findProfile, register, signIn } from "../../services/users";
import { toast } from "react-toastify";

interface IValues {
  logIn: (data: UserSignIn) => Promise<void>;
  logOut: () => void;
  registerUser: (data: UserRegister) => Promise<void>;
  profile: UserProfile;
  token: string;
}

export const UserContext = React.createContext({} as IValues);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>({});
  const [token, setToken] = useState<string>("");

  const logIn = async (data: UserSignIn) => {
    const result = await signIn(data);

    if(result.error){
      if(result.err.response.data.message){
        toast.error(result.err.response.data.message)
      } else {
        toast.error("Erro desconhecido")
      }
    } else {
      toast.success("Login feito com sucesso")
      setToken(result.token);
    }
  };

  const logOut = () => {
    setProfile({});
    setToken("");
  };

  const registerUser = async (data: UserRegister) => {
    const result = await register(data);

    if(result.error){
      if(result.err.response.data.message){
        toast.error(result.err.response.data.message)
      } else {
        toast.error("Erro desconhecido")
      }
    } else {
      toast.success("Usuário criado com sucesso")
    }
  };

  const getProfile = useCallback(async () => {
    const result = await findProfile(token);;

    if(result.error){
      if(result.err.response.data.message){
        toast.error(result.err.response.data.message)
      } else {
        toast.error("Erro desconhecido")
      }
    } else {
      setProfile(result);
    }

  }, [token]);

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        logIn,
        logOut,
        profile,
        registerUser,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

export const useUsers = () => useContext(UserContext);
