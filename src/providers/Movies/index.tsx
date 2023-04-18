import React, { useCallback, useContext, useEffect, useState } from "react";
import { getAllMovie, getSearchMovie } from "../../services/moviesDatabase";
import { MovieTDMA } from "../../types/Movies-TDMA";

interface IValues {
  movies: MovieTDMA[];
  pagination: {
    totalPages?: number;
    currentPage?: number;
  };
  
  movieModal: {
    active: boolean,
    movie?: MovieTDMA
  }
  findMovies: (search?: string, page?: number) => Promise<void>;
  resetPagination: () => void;
  setMovieModal: React.Dispatch<React.SetStateAction<{
    active: boolean;
    movie?: MovieTDMA | undefined;
}>>
}

export const TMDAContext = React.createContext({} as IValues);

function TMDAProvider({ children }: { children: React.ReactNode }) {
  const [movies, setMovies] = useState<MovieTDMA[]>([]);
  const [pagination, setPagination] = useState<IValues['pagination']>({
    totalPages: 1,
    currentPage: 1
  })
  const [movieModal, setMovieModal] = useState<IValues['movieModal']>({ active: false });

  const findMovies = useCallback(async (search?: string, page?: number) => {
    
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



  const resetPagination = () => setPagination({
    totalPages: 1,
    currentPage: 1
  })

  return <TMDAContext.Provider value={{ movies, pagination, resetPagination, findMovies, movieModal, setMovieModal }}>{children}</TMDAContext.Provider>;
}

export default TMDAProvider;

export const useTMDA = () => useContext(TMDAContext);
