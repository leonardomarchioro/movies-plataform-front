import React, { useCallback, useContext, useEffect, useState } from "react";

import { MovieTDMA } from "../../types/Movies-TDMA";
import { findRentedMovies, rentMovie } from "../../services/rent";
import { useUsers } from "../Users";

import { toast } from "react-toastify";


interface IValues {
    rentMovies: MovieTDMA[];
    rentNewMovie: (id: number) => Promise<void>;
}

export const RentContext = React.createContext({} as IValues);

function RentProvider({ children }: { children: React.ReactNode }) {
    const [rentMovies, setRentMovies] = useState<MovieTDMA[]>([]);

    const { token } = useUsers()

    const getRentedMovies = useCallback(async () => {
        const result = await findRentedMovies(token);

        if(result.error){
            if(result.err.response.data.message){
              toast.error(result.err.response.data.message)
            } else {
              toast.error("Erro desconhecido")
            }
          } else {
            setRentMovies(result);
          }
    }, [setRentMovies, token]);

    const rentNewMovie = async (id: number) => {
        const result = await rentMovie(id, token);

        if(result.error){
            if(result.err.response.data.message){
              toast.error(result.err.response.data.message)
            } else {
              toast.error("Erro desconhecido")
            }
          } else {
            toast.success("Filme alugado com sucesso")
            await getRentedMovies();
          }
    }

    useEffect(() => {
        if(token){
            getRentedMovies()
        }
    }, [token])

  return (
    <RentContext.Provider
      value={{ rentMovies, rentNewMovie }}
    >
      {children}
    </RentContext.Provider>
  );
}

export default RentProvider;

export const useRents = () => useContext(RentContext);
