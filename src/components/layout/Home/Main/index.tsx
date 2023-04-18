import React, { useState } from "react";
import * as S from "./styles";

import { Input } from "../../../common/Input";
import PopMovies from "./components/PopMovies";
import MoviesList from "./components/MoviesList";
import { useTMDA } from "../../../../providers/Movies";


const Main: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const { findMovies, pagination, resetPagination } = useTMDA()

  return (
    <S.Container>
      <S.Section>
        <S.Text>Assista aos melhores filmes no conforto da sua casa</S.Text>
        <Input
          placeholder="Seu filme favorito"
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => {
            resetPagination()
            findMovies(search)
        }}
        />
      </S.Section>
      <PopMovies />
      <S.Center>
        <MoviesList />
        <S.Pagination 
            pageCount={pagination.totalPages as number}
            onPageChange={({ selected }) => findMovies(search, (selected+=1))}
            nextLabel=">"
            previousLabel="<"
        />
        </S.Center>
    </S.Container>
  );
};

export default Main;
