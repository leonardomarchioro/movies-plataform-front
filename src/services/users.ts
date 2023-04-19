import { UserRegister, UserSignIn } from "../types/User";
import { moviesService } from "./clients";

import { toast } from "react-toastify";

export const signIn = async (data: UserSignIn) => {
  try {
    const { data: result } = await moviesService.post(`/auth`, data)
    return result
    
  } catch (err) {
    return {error: true, err}
  }
};

export const register = async (data: UserRegister) => {
  try {
    const { data: result } = await moviesService.post(`/users`, data)
    return result

  } catch (err) {
    return {error: true, err}
  }
};

export const findProfile = async (token: string) => {
  try {
    const { data: result } = await moviesService
    .get(`/users`, { headers: { Authorization: `Bearer ${token}` } })
    return result

  } catch (err) {
    return {error: true, err}
  }
};
