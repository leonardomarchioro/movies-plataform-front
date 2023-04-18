import React, { useCallback, useContext, useEffect, useState } from "react";
import { getAllMovie, getSearchMovie } from "../../services/moviesDatabase";
import { MovieTDMA } from "../../types/Movies-TDMA";

interface IValues {
  movies: MovieTDMA[];
  pagination: {
    totalPages?: number;
    currentPage?: number;
  };
  findMovies: (search?: string, page?: number) => Promise<void>;
  resetPagination: () => void;
}

export const TMDAContext = React.createContext({} as IValues);

function TMDAProvider({ children }: { children: React.ReactNode }) {
  const [movies, setMovies] = useState<MovieTDMA[]>([]);
  const [pagination, setPagination] = useState({})

  const findMovies = useCallback(async (search?: string, page?: number) => {
    console.log({page});
    if (search) {
      const data = await getSearchMovie(search, page);
      setMovies(data.results);
      setPagination({
        totalPages: data.total_pages > 500 ? 500 : data.total_pages,
        currentPage: data.page
      })
      
    } else {
      const data = await getAllMovie(page);
      setMovies(data.results);
      setPagination({
        totalPages: data.total_pages > 500 ? 500 : data.total_pages,
        currentPage: data.page
      })
    }
  }, []);
  useEffect(() => {
    findMovies();
  }, []);

  const resetPagination = () => setPagination({})

  return <TMDAContext.Provider value={{ movies, pagination, resetPagination, findMovies }}>{children}</TMDAContext.Provider>;
}

export default TMDAProvider;

export const useTMDA = () => useContext(TMDAContext);
